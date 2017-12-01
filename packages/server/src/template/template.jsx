import React from 'react';
import Helmet from "react-helmet";

function createMarkup(html) {
    return {__html: html};
}

export default ({body}) => {
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
        <head>
            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            {helmet.link.toComponent()}
        </head>
        <body {...bodyAttrs}>
        <section id="root" dangerouslySetInnerHTML={createMarkup(body)}/>
        <script src="//localhost:8080/static/app.js"/>
        </body>
        </html>
    );
}
