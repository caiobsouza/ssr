import express from 'express';
import path from 'path';
import winston from 'winston';

import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Layout from './components/Layout';

winston.add(
    new winston.transports.Console({
        format: winston.format.combine(winston.format.simple()),
    })
);

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
    const context = {};
    const jsx = (
        <StaticRouter context={context} location={req.url}>
            <Layout />
        </StaticRouter>
    );
    const reactDom = renderToString(jsx);
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, helmetData));
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => winston.info(`Ready on http://localhost:${PORT}`));

function htmlTemplate(reactDom, helmetData) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
