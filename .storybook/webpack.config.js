// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js'); 
module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]---[hash:base64:5]!postcss"
            },
            { 
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    postcss: function (webpack) {
        return [
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-cssnext")(),
            require("lost")
        ]
    }
}