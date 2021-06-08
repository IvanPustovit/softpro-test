const Router = require('express');
const { addUser } = require('../controllers/userController');

const router = new Router();

// router.get();
router.post('/add', addUser);

module.exports = router;
