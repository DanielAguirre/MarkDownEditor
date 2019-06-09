const express = require('express');
const userRouter = require('./files/route')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()

var myLogger = function (req, res, next) {
    console.log('LOGGED', req.method , req.path );
    next();
};

app.use(cors());

app.use(myLogger);
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use('/', userRouter);


module.exports = app;