const Chat = require('../models/Chat.model');
const ChatRef = require('../models/ChatRef.model');
const User = require('../models/User.model');

const create = async (req, res) => {
  try {
    const { name, users } = req.body;
    await Chat.sync();
    await ChatRef.sync();
    const chat = await Chat.create({
      name,
    });
    await users.map((user) => {
      chat.addUsers(user);
    });
    await res.status(201).json({ id: chat.id, message: 'Chat created' });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error');
  }
};

const getUsersChats = async (req, res) => {
  try {
    const { user } = req.body;
    const userDb = await User.findOne({ where: { id: user } });
    const chats = await userDb.getChats();
    res.status(200).json(chats.sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error');
  }
};

module.exports = { create, getUsersChats };
