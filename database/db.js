const mysql = require("mysql");
const settings = require("../config");
const fs = require("fs");

const connection = new mysql.createConnection({
  user: settings.db.user,
  host: settings.db.host,
  database: settings.db.db_name,
  password: settings.db.mdp,
  ssl: {
    ca : fs.readFileSync(__dirname + '/ca-certificate.crt')
  },
  port: settings.db.port,
});

module.exports = connection;
