const config = require('../config');
const sql = require('mysql');

const connect = sql.createConnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "root",
    database: "chat_app"
})

module.exports = connect;