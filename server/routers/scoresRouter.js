const express = require('express');
const scoresController = require('../controllers/scoresController');

const router = express.Router();

router.get(
  '/all',
  scoresController.listAllScores,
  (req, res) => {
    res.status(200).json(res.locals.scores);
  }
);

router.get(
  '/user/:username',
  scoresController.listUserScores,
  (req, res) => {
    res.status(200).json(res.locals.scores);
  }
);

router.post(
  '/record',
  scoresController.recordScore,
  (req, res) => {
    res.sendStatus(201);
  }
);

module.exports = router;