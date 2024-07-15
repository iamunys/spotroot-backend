const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://iamunys:92398669Atlas@spotroot-finder.sotxb3s.mongodb.net' +
            '/spotroot-finder', {
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
