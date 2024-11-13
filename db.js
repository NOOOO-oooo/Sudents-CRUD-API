const Pool = require("pg").Pool;

const pool = new Pool({
   user: "postgres",
   host: "localhost",
   password: "1234",
   port: 3001,
   database: "students",
});

module.exports = pool;
