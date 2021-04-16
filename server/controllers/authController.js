const jwt = require('jsonwebtoken');
const { query } = require('../models/models');
const { accessToken } = require('../utils');

const authController = {};

authController.verifyToken = (req, res, next) => {

  const sessionToken = req.cookies.jwt;

  if (!sessionToken) {
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  };

  let payload;

  try {
    // use the jwt.verify method to verify the access token
    // throws an error if the token has expired or has a invalid signature
    payload = jwt.verify(sessionToken, process.env.ACCESS_TOKEN_SECRET)
    next();
  } catch (err) {
    // if an error occurs pass error object into error handler
    err.status = 401;
    next(err);
  };
};

authController.refreshToken = (req, res, next) => {

  const sessionToken = req.cookies.jwt;

  if (!sessionToken) {
    const err = new Error('Forbidden');
    err.status = 403;
    next(err);
  };

  let payload;

  try {
    payload = jwt.verify(sessionToken, process.env.ACCESS_TOKEN_SECRET)
  } catch (err) {
    err.status = 401;
    next(err);
  };

  const findRefreshTokenQuery = `SELECT session_token FROM users WHERE username = $1;`;

  const values = [payload.username];

  const refresh = query(findRefreshTokenQuery, values)
                    .then(({ rows }) => rows[0])
                    .catch(err => next(err));

  try {
    jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    err.status = 401;
    next(err);
  };

  const newToken = accessToken(payload);
  res.cookie('jwt', newToken, { httpOnly: true });
  next();
};

module.exports = authController;