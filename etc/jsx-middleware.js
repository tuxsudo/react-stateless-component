import { renderToString } from 'react-dom/server';
import demo from '../src/demo.js';

export default (req, res, next) => {
    res.locals.jsx = renderToString(demo);
    next();
}
