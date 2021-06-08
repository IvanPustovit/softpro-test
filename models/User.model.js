const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connect');
const Message = require('./Message.model');

const User = sequelize.define(
  'User',
  {
    id: {
      alowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userName: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'User' }
);

User.hasMany(Message, { onDelete: 'cascade', foreignKey: 'author' });
module.exports = User;
