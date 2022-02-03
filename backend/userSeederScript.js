const keys = require("./PrivateKeys");

const usersData = require("./data/users");
const connectDB = require("./config/db");
const Users = require("./model/user-model");

connectDB();

const importData = async () => {
    try {
        await Users.insertMany(usersData);
        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.log("Error with data import....");
        process.exit(1);
    }
}

importData();