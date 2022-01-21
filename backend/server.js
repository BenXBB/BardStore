require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const productRoutes = require("./routes/productRoutes");

connectDB();

app.use(express.json());

app.use("./api/products", productRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))