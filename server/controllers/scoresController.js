const { query } = require('../models/models');
const { v4: uuidv4 } = require('uuid');

const scoresController = {};

scoresController.recordScore = async (req, res, next) => {

  const { 
    game, 
    balance, 
    handsPlayed, 
    handsWon,
    warsPlayed, 
    warsWon, 
    username
  } = req.body;

  const scoreId = uuidv4();

  try {
    const idQuery = `SELECT _id FROM users WHERE username = $1;`;
    const idVal = [username];

    const userId = await query(idQuery, idVal).then(({ rows }) => rows[0]._id).catch(err => next(err));
  
    const scoreQuery = `
      INSERT INTO scores (_id, user_id, game, balance, hands_played, hands_won, wars_played, wars_won)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    const scoreVals = [scoreId, userId, game, balance, handsPlayed, handsWon, warsPlayed, warsWon];

    if (balance > 0) {

      const balanceQuery = `SELECT balance FROM users WHERE username = $1;`;
      
      const curBalance = await query(balanceQuery, idVal).then(({ rows }) => rows[0].balance).catch(err => next(err));

      const transferQuery = `UPDATE users SET balance = $1 WHERE _id = $2;`;
      const transferVals = [curBalance, userId];

      const transfer = await query(transferQuery, transferVals).catch(err => next(err));
    }

    query(scoreQuery, scoreVals)
      .then(() => next())
      .catch(err => next(err));

  } catch (err) {
      next(err);
  };
};

scoresController.listAllScores = async (req, res, next) => {
  
  try {
    const queryString = `SELECT * FROM scores;`;
    const scoresArr = await query(queryString).then(({ rows }) => rows).catch(err => next(err));
    res.locals.scores = scoresArr;
    next()

  } catch (err) {
    next(err);
  };
};

scoresController.listUserScores = async (req, res, next) => {

  const { username } = req.params;

  try {

    const idQuery = `SELECT _id FROM users WHERE username = $1;`;
    const idVal = [username];

    const userId = await query(idQuery, idVal).then(({ rows }) => rows[0]._id).catch(err => next(err));
  
    const scoreQuery = `SELECT * FROM scores where user_id = $1;`;
    const scoreVal = [userId];

    const scoresArr = await query(scoreQuery, scoreVal).then(({ rows }) => rows).catch(err => next(err));

    res.locals.scores = scoresArr;

    next();

  } catch (err) {
      next(err);
  };
};

module.exports = scoresController;