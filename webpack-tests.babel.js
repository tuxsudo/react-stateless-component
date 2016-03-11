import path from 'path';
import base from './webpack-base.js';
import fs from 'fs';


export default {
    ...base,
    entry: path.normalize(`${__dirname}/src/test.js`),
    output: {
        path: path.normalize(`${__dirname}/dist/tests`),
        filename: "test.js"
    },
    target: "node",
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
        .concat([
            'react-dom/server'
        ])
        .reduce( (ext, mod) => ({
                ...ext,
                [mod]: 'commonjs ' + mod
            }), {}),

    node: {
       __filename: true,
       __dirname: true
   }
};
