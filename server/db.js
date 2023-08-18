const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  port: 5432,
  database: "todoapp",
});

module.exports = pool;
