const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/spotrootFinders').on('open', () => {
    console.log('Mongo db is connected');
}).on('error', () => {
    console.log('Mongo db connection is Error');
});

module.exports = connection;