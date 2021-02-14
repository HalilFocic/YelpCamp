const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const users = require("../controllers/users");

//Route to render registration form
router.get("/register", users.renderRegister);

// Route for sending request to make new user
router.post("/register", catchAsync(users.register));

//Route to render login form
router.get("/login", users.renderLogin);

//Route to login someone in,or atleast attempt to
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  users.login
);

//Route for logging out
router.get("/logout", users.logout);
module.exports = router;
