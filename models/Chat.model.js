const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connect');
const ChatRef = require('./ChatRef.model');
const User = require('./User.model');

const Chat = sequelize.define(
  'Chat',
  {
    id: {
      alowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'Chat' }
);

Chat.belongsToMany(User, {
  foreignKey: 'chat_Id',
  through: ChatRef,
});

User.belongsToMany(Chat, { foreignKey: 'user_Id', through: ChatRef });

module.exports = Chat;
