const mysql = require("mysql2");
const settings = require("../config");

const connection = new mysql.createConnection({
  user: settings.db.user,
  host: settings.db.host,
  database: settings.db.db_name,
  password: settings.db.mdp,
});

module.exports = connection;
