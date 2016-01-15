const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const api = express();

api.use(logger('dev'));
api.use(bodyParser.json());

require('./sample/routes')(api);

module.exports = api;
