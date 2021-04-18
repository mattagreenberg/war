const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/signup',
  userController.createUser,
  userController.loginUser,
  (req, res) => {
    res.sendStatus(201);
  }
);

router.post(
  '/login',
  userController.loginUser,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.post(
  '/logout',
  userController.logoutUser,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.delete(
  '/terminate',
  userController.deleteUser,
  (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;