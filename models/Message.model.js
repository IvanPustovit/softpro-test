const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connect');

const Message = sequelize.define(
  'Message',
  {
    id: {
      alowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    chat: { type: DataTypes.INTEGER, allowNull: false },
    author: { type: DataTypes.INTEGER, alowNull: false },
    text: { type: DataTypes.STRING, alowNull: false },
  },
  { tableName: 'Message' }
);

module.exports = Message;
