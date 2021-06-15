const User = require("./user");
const Note = require("./note");
const Log = require("./Log");
const Park = require("./park");

User.hasMany(Log, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Park, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Log.belongsTo(User, {
  foreignKey: "user_id",
});

Park.belongsTo(User, {
  foreignKey: "user_id",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Park, Note, Log };
