const pg = require('pg');

const config = {
  max: 5, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

console.log('process.env is:', process.env);

if (process.env.NODE_ENV === 'development') {
  config.user = 'bcadmin';
  config.database = 'bcdb';
  config.password = 'bcpw';
  config.host = 'postgres-db';
  config.port = 5432;
} else if (process.env.NODE_ENV === 'production') {
  config.user = process.env.RDS_USERNAME || 'bcadmin';
  config.database = process.env.RDS_DB_NAME || 'bcdb';
  config.password = process.env.RDS_PASSWORD || 'bcpw';
  config.host = process.env.RDS_HOSTNAME|| 'postgres-db';
  config.port = Number(process.env.RDS_PORT) || 5432;
}

console.log(`Connection to database ${config.database} on host ${config.host}`);


// initializes a connection pool
// keeps idl connections open for 30 seconds
// sets a limit of 5 idle clients
const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

// export the query method for passing queries to the pool
module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

// the pool also supports checking out a client for multiple operations
module.exports.connect = (callback) => pool.connect(callback);