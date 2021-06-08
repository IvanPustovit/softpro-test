const Message = require('../models/Message.model');

const create = async (req, res) => {
  try {
    const { chat, author, text } = req.body;
    await Message.sync();
    const message = await Message.create({
      chat,
      author,
      text,
    });
    res.status(201).json({ id: message.id });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error');
  }
};

const getMessageFromChat = async (req, res) => {
  try {
    const { chat } = req.body;
    const messages = await Message.findAll({ where: { chat: chat } });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error');
  }
};

module.exports = { create, getMessageFromChat };
