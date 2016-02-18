import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import {tmpdir} from 'os';
import {sync as globSync} from 'glob';
import {name as pkgName} from './package.json';

const base = {

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
                    // "sass-loader"
                )
            },
            {
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/,
                loader  : 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    cssLoader: {
        modules: true
    },
    postcss : [
        precss(),
        cssnano({
            autoprefixer : {
                add      : true,
                remove   : true,
                browsers : ['last 2 versions']
            },
            discardComments : {
                removeAll : true
            }
        })
    ],
    devServer: {
        contentBase: './demo',
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        compress: true
    }
};

const test = {
    entry: globSync('./test/**/*.spec.js'),
    target: "node",

    output: {
        path: `${tmpdir()}/${pkgName}`,
        filename: "[name].spec.js"
    },

    externals: {
        'cheerio': 'global',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }

}

const demo = {

        entry: "./demo/demo.js",
        output: {
            path: './demo',
            filename: "bundle.js"
        }
}


export default {
    ...base,
    ...(process.env.NODE_ENV === "test" ? test : demo)
};
