require("dotenv").config();
const keys = require("../PrivateKeys");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(keys.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.log("MongoDB connection FAILED");
        process.exit(1);
    }
}

module.exports = connectDB;