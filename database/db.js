const mysql = require("mysql");
const settings = require("../config");
const fs = require("fs");

const connection = new mysql.createConnection({
  user: settings.db.user,
  host: settings.db.host,
  database: settings.db.db_name,
  password: settings.db.mdp,
  ssl: {
    // Remove these
    ca: fs.readFileSync(__dirname + "/ca-certificate.crt"), // three lines if
  }, // you don't need ssl.
  port: settings.db.port,
});

module.exports = connection;
