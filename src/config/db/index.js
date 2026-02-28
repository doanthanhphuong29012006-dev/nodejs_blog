const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/phuongdt_dev', {
        });
        console.log('Successfully')
    } catch (error) {
        console.log('Failure')
        console.log('Error: ', error.message)
    }
}

module.exports = { connect }