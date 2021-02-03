const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected!");
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/makecampground", async function (req, res) {
  const camp = new Campground({
    title: "My Backyard",
  });
  await camp.save();
  res.send(camp);
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
