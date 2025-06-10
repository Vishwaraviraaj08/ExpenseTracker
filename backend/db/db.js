const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect("mongodb://localhost:27017/expensedb");

        console.log('DB CONNECTED')
    } catch (error) {
        console.log('DB CONNECTION ERROR')
    }
}

module.exports = {db}