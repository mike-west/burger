var mysql = require("mysql");
require("dotenv").config();
var keys = require("../config/keys.js")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.MYSQL_USERID,
  password: process.env.MYSQL_PASSWORD,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;