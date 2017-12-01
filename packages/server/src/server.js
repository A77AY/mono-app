import spdy from 'spdy';
import http from 'http';
import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Template from './template/template'
import {Helmet} from 'react-helmet'
// import {App} from '@mono-app/client'

const HOST = '127.0.0.1';
const PORT = 3000;
const SPDY_OPTIONS = {
    key: fs.readFileSync(path.join(__dirname, 'keys/server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'keys/server.crt'))
};

const app = express();

app.get('*', (req, res) => {
    const body = ReactDOMServer.renderToString(<><Helmet defaultTitle="Title"/><h1>Hello, world</h1></>);
    res.status(200).send(ReactDOMServer.renderToStaticMarkup(<Template body={body}/>));
});

const httpsServer = spdy.createServer(SPDY_OPTIONS, app);
const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, (error) => {
    if (error) {
        console.error(error);
        return process.exit(1)
    } else {
        console.log('Listening on port: ' + PORT + '.');
    }
});