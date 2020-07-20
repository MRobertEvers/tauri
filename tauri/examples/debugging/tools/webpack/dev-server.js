const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const host = '127.0.0.1';
const port = 4001;

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = require('../../webpack.config');
console.log(JSON.stringify(webpackConfig, null, 2));

const server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        assets: true,
        colors: true,
        version: true,
        hash: true,
        timings: false,
        chunks: false,
        chunkModules: false
    }
});

server.listen(port, host, (err, result) => {
    if(err) {
        console.error(JSON.stringify(err));
        return;
    }

    console.log(`Listening at ${host}:${port}`);
});