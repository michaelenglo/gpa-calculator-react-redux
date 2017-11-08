//server.js

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const app = express();
const DIST_PATH = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';
const compiler = webpack(config);

if (isDevelopment) {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        },
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get('/', (req, res, next) => {
        // Serve the real index.html because CleanWebpackPlugin will wipe dist folder
        res.sendFile(path.join(__dirname, 'index.html'));
    });
} else {
    app.use(express.static(__dirname));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));
}

app.listen(port, () => console.log(`Server now listening to port ${port}!`));
