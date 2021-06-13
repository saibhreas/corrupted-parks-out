const path = require("path");
const express = require("express");
// Import express-session
const session = require("express-session");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const app = express();

const PORT = process.env.PORT || 3306;

const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
