const express = require('express');                     // requiring express
const bodyParser = require('body-parser');              // requiring body-parser
const morgan = require('morgan');                       // requiring morgan instead of custom middleware

const mongoose = require('./config/db');                // requiring mongoose via config-db folder-file
const { Cricketer } = require('./models/cricketer');    // requiring the .Schema({}) and .model()
const cricketersRouter = require('./routes/cricketers');// requiring the routes handlers 

const app = express();
const port = 3000;

// middleware used to parse body info.
app.use(bodyParser.json());

// morgan - middleware, instead of logger-custom middlware
app.use(morgan('short'));

// creating a middleware for express.Router() handlers
app.use('/cricketers',cricketersRouter);

// sample/testing route handler
app.get('/',(req,res) => {
    res.send({
        msg: 'Welcome to the page'
    });
});

// localhost listening on port
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});