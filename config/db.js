const mongoose = require('mongoose');

const local = "mongodb+srv://admin2:admin2@cluster0.1yyztnl.mongodb.net/MD18402";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
