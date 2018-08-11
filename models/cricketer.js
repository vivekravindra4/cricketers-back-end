// requiring mongoose package
const mongoose = require('mongoose');

// creating a schema using mongoose.Schema({}) object, assigning it to variable
const cricketerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batting_avg: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

// creating a model using mongoose.model() method, takes two arguments:
// first arg -> Collections Name , second arg - Schema
// assign it to a variable such that it should represent a Class
const Cricketer = mongoose.model('Cricketers', cricketerSchema);

// exporting the 'Cricketer' model to app.js 
module.exports = Cricketer;