import path from 'path';
import base from './webpack-base.js';

export default {
    ...base,
    entry: path.normalize(`${__dirname}/etc/demo/demo.js`),
    output: {
        path: path.normalize(`${__dirname}/dist/demo`),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.normalize(`${__dirname}/etc/demo`),
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        compress: true
    }
};
