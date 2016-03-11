import express from 'express';
import path from 'path';
import fs from 'fs';


// this is built from ./jsx-middleware.js
import jsxMiddleware from '../dist/demo/jsx-middleware.js';


// create express app...
export const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist', 'demo'), {index: false}));


app.get('/', jsxMiddleware);

// handle routes via react...
app.get('/', (req, res, next) => {

    fs.readFile(path.join(__dirname, 'demo', 'index.html'), (err, file) => {
        if(err) {
            return next(err);
        }
        res.send(file.toString().replace('<!--REACT_APP-->', res.locals.jsx)); //renderToString(demo)
    });

});

// handle any errors
app.use( (err, req, res, next) => { // eslint-disable-line
    if(err.status!=404) {
        console.log(err.stack); // eslint-disable-line
    }
    res.status(err.status||500).send("Application Error");
});

var PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
