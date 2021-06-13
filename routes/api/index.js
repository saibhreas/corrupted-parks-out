const router = require("express").Router();
const userRoutes = require("./user-routes");
const parkRoutes = require("./park-routes");
const noteRoutes = require("./note-routes");

router.use("/users", userRoutes);
router.use("/parks", parkRoutes);
router.use("/notes", noteRoutes);

module.exports = router;
