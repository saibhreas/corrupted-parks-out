const express = require("express");
const router = express.Router();
const db = require("../../../models");
const passport = require("../../../config/passport");

console.log ("This has been called");

router.post("/signup", function (req, res) {
  console.log("POST /api/v1/auth/signup");
  db.User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.json({ msg: "This user already has an account!" });
    } else {
      db.User.create(req.body).then(function () {
        res.redirect(307, "/login"); //redirect to log in to be authenticated
      });
    }
  });
});

router.post("/login",/* passport.authenticate("local"),*/ function (req, res) {
  console.log("POST /api/v1/auth/login");

  res.json(req.user);
});

router.get("/logout", function (req, res) {
  console.log("POST /api/v1/auth/logout");
  req.logout();
  res.sendStatus(200);
});
module.exports = router;
