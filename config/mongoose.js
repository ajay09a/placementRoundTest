const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error on connecting to mongodb"));

db.once('open', function(){
    console.log('connected to database');
});

module.exports = db;