// requiring mongoose package
const mongoose = require('mongoose');

// assigning global Promise library and making it available for mongoose to use it.
mongoose.Promise = global.Promise;

// connecting mongoose to the mongodb on generated port and creating the db 'cricketers'
mongoose.connect('mongodb://localhost:27017/cricketersdb', {useNewUrlParser: true});

// exporting mongoose to require it in app.js
module.exports = mongoose;