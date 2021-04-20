
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config({ debug: process.env.DEBUG });

const app = express();

app.use(express.static(path.join(__dirname, '../build/')));
app.use(bodyParser.json());
app.use(cookieParser());

const userRouter = require('./routers/userRouter');
const scoresRouter = require('./routers/scoresRouter');

app.use('/user', userRouter);
app.use('/score', scoresRouter);

app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

// this middleware is used to catch 404 errors and forward to the global error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// this middleware is used as a global error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500).send(res.locals.message);
});

module.exports = app;