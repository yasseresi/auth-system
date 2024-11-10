const express = require('express');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/register',
  [
    check('username', 'Username is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }),
    check('fullName', 'Full Name is required').notEmpty()
  ],
  authController.register
);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  authController.login
);

router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
