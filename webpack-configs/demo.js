import path from 'path';
import base from './base.js';

export default {
    ...base,
    entry: path.normalize(__dirname + "/../demo/demo.js"),
    output: {
        path: path.normalize(__dirname + '/../demo'),
        filename: "bundle.js"
    }
};
