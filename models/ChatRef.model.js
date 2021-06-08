const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connect');

const ChatRef = sequelize.define(
  'ChatRef',
  {
    user_Id: {
      alowNull: false,
      type: DataTypes.INTEGER,
    },
    chat_Id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { tableName: 'ChatRef' }
);

module.exports = ChatRef;
