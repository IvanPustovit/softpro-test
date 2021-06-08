const Router = require('express');
const {
  create,
  getMessageFromChat,
} = require('../controllers/messageController');
const router = new Router();

router.post('/add', create);
router.post('/get', getMessageFromChat);

module.exports = router;
