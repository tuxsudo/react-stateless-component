import path from 'path';
import base from './webpack-base.js';
import { sync as glob } from 'glob';
import fs from 'fs';



export default {
    ...base,
    entry: glob('./tests/unit/**/*.spec.js')
        .reduce( (l, c)=>({...l, [path.basename(c)]:c }), {}),
    output: {
        path: path.normalize(`${__dirname}/dist/tests`),
        filename: "[name]"
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
