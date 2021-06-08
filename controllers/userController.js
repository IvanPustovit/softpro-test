const User = require('../models/User.model');

const addUser = async (req, res) => {
  try {
    const { userName } = req.body;
    await User.sync();
    const user = await User.create({
      userName,
    });
    res.status(201).json({ id: user.id });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
};

module.exports = { addUser };
