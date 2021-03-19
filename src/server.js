const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const sintegraRoutes = require('./routes/sintegra.routes');

app.use(bodyParser.json());

app.use('/v1/apis', sintegraRoutes);

module.exports = app;