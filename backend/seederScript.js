const keys = require("./PrivateKeys");

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./model/Product");

connectDB();

// deletes everything currently in the database and then repopulates.....

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.log("Error with data import....");
        process.exit(1);
    }
}

importData();