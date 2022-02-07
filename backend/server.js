require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const cookieSession = require('cookie-session');
const keys = require('./PrivateKeys');
const mongoose = require('mongoose');

const app = express();

connectDB();

app.use(express.json());

// setting the cookie that store the data of the user and how long it lasts
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // 1 day expiry
  keys: [keys.session.cookieKey]
}));

// init passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.json({ message: "API backend running..." });
  });

app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))