const Router = require('express');
const { create, getUsersChats } = require('../controllers/chatController');
const router = new Router();

router.post('/add', create);
router.post('/get', getUsersChats);

module.exports = router;
