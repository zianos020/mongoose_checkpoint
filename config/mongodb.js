const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.BD_URI);
        console.log("database connected")
    } catch (error) {
        console.log(`database is not connected ${error}`);
    }
}

module.exports = connectDB;