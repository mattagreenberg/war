
const app = require('./app');

const PORT = process.env.port || 3000;

// open socket to server
app.listen(PORT, (err) => {
  console.log(new Date(), err || `listening on port ${PORT}`);
});
