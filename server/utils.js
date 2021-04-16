const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRounds = Number(process.env.SALT_ROUNDS);

const utils = {};

// this method will handle salting and hashing of user password
// using bcrypt and will return the hashed password
utils.hashPass = (password) => {
  // generate salt
  const salt = bcrypt.genSaltSync(saltRounds);
  // generate hash
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

// this method created the access token as a JWT
utils.accessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.ACCESS_TOKEN_LIFE
  });
};

// this method created the refresh token as a JWT
utils.refreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.REFRESH_TOKEN_LIFE
  });
};

module.exports = utils;