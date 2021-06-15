const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Park, Note } = require("../../models");
// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Note }, { model: Park }],
      attributes: {
        include: [
          [
            // Use plain SQL to get a count of all short books
            sequelize.literal(
              "(SELECT COUNT(*) FROM book WHERE pages BETWEEN 100 AND 300 AND book.user_id = user.id)"
            ),
            "shortBooks",
          ],
        ],
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: User }, { model: Parks }, { model: Notes }],
      attributes: {
        include: [
          [
            // Use plain SQL to get a count of all short books
            sequelize.literal(
              "(SELECT COUNT(*) FROM book WHERE pages BETWEEN 100 AND 300 AND book.user_id = user.id)"
            ),
            "shortBooks",
          ],
        ],
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// CREATE a user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
