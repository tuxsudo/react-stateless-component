import ExtractTextPlugin from 'extract-text-webpack-plugin';
import cssnext from 'postcss-cssnext';
import cssImport from 'postcss-import';

export default {
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[local][hash:base64:3]!postcss-loader"
                )
            },
            {
                test : /\.jsx?$/,
                loader  : 'babel'
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "file-loader"
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
        cssImport(),
        cssnext()
    ]
};
