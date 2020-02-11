require("dotenv").config("../");
const mysql = require("mysql");
let connnection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: process.env.PSWD,
        database: "burgers_db"
    });
}

connection.connect();
module.exports = connection;