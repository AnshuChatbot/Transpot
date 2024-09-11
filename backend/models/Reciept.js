const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Receipt = sequelize.define('Receipt', {
  gaddiNumber: { type: DataTypes.STRING, allowNull: false },
  partyName: { type: DataTypes.STRING, allowNull: false },
  privateMarka: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Receipt;
