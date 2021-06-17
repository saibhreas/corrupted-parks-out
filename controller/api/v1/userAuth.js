const express = require("express");
const router = express.Router();
const db = require("../../../models");
const passport = require("../../../config/passport");
const { ValidationError } = require("sequelize");


// [POST] /api/v1/auth/signup
router.post("/signup", function (req, res) {
  db.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        // If user exists, throw error.
        res.status(500).json({ message: "This user already has an account!" });
      } else {
        // Create new user
        db.User.create(req.body)
          .then(() => {
            // Redirect to log in to be authenticated
            console.log(`res.redirect("/login")`);
            res.redirect("/login");
          }).catch(err => {
            if (err instanceof ValidationError) {
              // If error is for validation, then show just message
              res.status(500).json({ message: err.message });
            } else {
              res.status(500).json({ message: err });
            }
          });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

// [POST] /api/v1/auth/login
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log('/login', req.user);
  res.json(req.user);
});

// [GET] /api/v1/auth/logout
router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;