import base from './webpack-base.js';
import path from 'path';


export default {

    ...base,

    entry: path.resolve('./etc/jsx-middleware.js'),

    output: {
        filename: 'jsx-middleware.js',
        library: 'jsx-middleware.js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist', 'demo')
    },

    target: 'node',

    externals: {
        'html-minifier': 'commonjs html-minifier',
        'react-dom': 'commonjs react-dom',
        'react': 'commonjs react',
        'react-router': 'commonjs react-router',
        'react-redux': 'commonjs react-redux',
        'react-helmet': 'commonjs react-helmet'
    },

    node: {
        __filename: true,
        __dirname: true
    }
}
