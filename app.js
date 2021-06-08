const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.router');
const chatRouter = require('./routes/chat.router');
const messageRouter = require('./routes/message.router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: [] }));

const port = process.env.PORT || 9000;

app.use('/user', userRouter);
app.use('/chats', chatRouter);
app.use('/messages', messageRouter);

const start = async () => {
  try {
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
