const express = require('express');                     // requiring the express package
const { Cricketer } = require('../models/cricketer');   // requiring the models 
const router = express.Router();                        // obtaining the Router() instances by express

// route handlers called on .Router() instance
// router.METHOD(PATH,HANDLER)
router.get('/',(req,res) => {
    Cricketer.find()
    .then((cricketers) => {
        res.send(cricketers);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.get('/:id',(req,res) => {
    Cricketer.findOne()
    .then((cricketer) => {
        res.send(cricketer);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/',(req,res) => {
    let body = req.body;
    let cricketer = new Cricketer(body);
    cricketer.save()
    .then((cricketers) => {
        res.send(cricketers);
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = router;                                // exporting the router(s)