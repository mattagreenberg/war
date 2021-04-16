const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '../build/')));
app.use(bodyParser.json());
app.use(cookieParser());

const userRouter = require('./routers/userRouter');

app.use('/user', userRouter);

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
  
  console.log(err);
  res.status(err.status || 500).send(res.locals.message);
});

// open socket to server
app.listen(PORT, (err) => {
  console.log(new Date(), err || `listening on port ${PORT}`);
});

module.exports = app;