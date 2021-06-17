const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Park extends Model {}
Park.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    park_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    park_phone_number: {
      type: DataTypes.INTEGER,
    },
    park_activities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    park_fees: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'park'
  }
);
module.exports = Park;