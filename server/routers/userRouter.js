const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/signup',
  userController.verifyUniqueUsername,
  userController.createUser,
  userController.loginUser,
  (req, res) => {
    res.sendStatus(201);
  }
);

router.get(
  '/balance/:username',
  userController.getBalance,
  (req, res) => {
    res.status(200).json(res.locals.balance);
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

router.put(
  '/balance/update',
  userController.updateBalance,
  (req, res) => {
    res.sendStatus(204);
  }
);

module.exports = router;