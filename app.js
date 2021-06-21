const express = require("express");
const mongoose = require("mongoose");
const app = express();
const boddyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");
app.use(boddyParser.json());

const postsRoute = require("./routes/posts");

//Middlewares
app.use(cors());
app.use("/posts", postsRoute);
//app.use("/posts", () => {
//  console.log("Hello, this is a middleware running");
//});

app.get("/", (req, res) => {
  res.send("We are at home");
});
//How to start listening
app.listen(3000);

//Connect to DB here
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected boy");
});
