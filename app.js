const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db');

const port = process.env.PORT || 3535;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDb((err, db) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port);
        console.log(`listening on port ${port}`);
    }
})