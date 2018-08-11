const express = require('express');             // requiring express
const bodyParser = require('body-parser');      // requiring body-parser
const morgan = require('morgan');               // requiring morgan instead of custom middleware

// const mongoose = require('');
// const { Cricketer } = require('');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(morgan('short'));

app.get('/',(req,res) => {
    res.send({
        msg: 'Welcome to the page'
    })
});

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});