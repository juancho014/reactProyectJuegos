const express = require('express');
const routes = require('./routes');
const cors= require('cors');
const compression= require('compression');
const router = express.Router();
const app=express();


app.use(express.json());
app.use(compression());
app.use(cors());
app.use(routes(router));

module.exports = app;