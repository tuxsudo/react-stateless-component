import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import path from 'path';

export default {
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
                loader  : 'babel'
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
        contentBase: path.normalize(`${__dirname}/../demo`),
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        compress: true
    }
};
