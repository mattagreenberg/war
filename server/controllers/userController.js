const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const { query } = require('../models/models');
const { hashPass, accessToken, refreshToken } = require('../utils');

const userController = {};

userController.createUser = async (req, res, next) => {

  try {

    const { username, password } = req.body;

    // set hashed password
    const hashedPass = hashPass(password);

    // set user id
    const userId = uuidv4();

    const queryString = `
      INSERT INTO users (_id, username, password, session_token, balance)
      VALUES ($1, $2, $3, null, 100);`;

    const values = [userId, username, hashedPass];

    query(queryString, values)
      .then(() => next())
      .catch(err => next(err));

  } catch (err) {
    next(err);
  }

  
};

userController.loginUser = async (req, res, next) => {
  
  const { username, password } = req.body;

  const verifyQuery = `SELECT password FROM users WHERE username = $1;`;
  const values = [username];

  try {
    
    const rows = await query(verifyQuery, values).then(({ rows }) => rows).catch(err => next(err));
    console.log('rows', rows);
    if (!rows.length) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    const compare = await bcrypt.compareSync(password, rows[0].password, (err, result) => {
      if (err) return next(err);
      return result;
    });

    if (!compare) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    // set access token
    const access = accessToken({ username: username });

    // set refresh token
    const refresh = refreshToken({ username: username });

    res.cookie('jwt', access, { httpOnly: true });

    const refreshQuery = `UPDATE users SET session_token = $1 WHERE username = $2;`;
    const refreshVals = [refresh, username];

    await query(refreshQuery,refreshVals);
     next();

  } catch (err) {
      err.status = 401;
      next(err);
  };

 
};

userController.logoutUser = (req, res, next) => {
  try {
    res.clearCookie('jwt');
    console.log('jwt cleared');
    next();
  } catch (err) {
    next(err);
  }
};

userController.deleteUser = async (req, res, next) => {

  const { username, password } = req.body;

  const verifyQuery = `SELECT password FROM users WHERE username = $1;`;
  const deleteQuery = `DELETE FROM users WHERE username = $1;`;
  const values = [username];

  try {
    const response = await query(verifyQuery, values);
    const { rows } = await response;

    if (!rows.length) {
      const err = new Error('Unauthorized');
      err.status = 401;
      next(err);
    }

    const compare = bcrypt.compareSync(password, rows[0].password, (err, result) => {
      if (err) {
        err.status = 401;
        next(err);
      }
      return result;
    });

    if (!compare) {
      const err = new Error('Unauthorized');
      err.status = 401;
      next(err);
    }

   const del = await query(deleteQuery, values)
      
   next();

  } catch (err) {
      err.status = 401;
      next(err);
  };
};

module.exports = userController;