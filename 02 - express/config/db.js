var mysql = require('mysql');

var minhaConexao = function () {

    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'Saadmin',
        database: 'udemy'
    });
}


module.exports = minhaConexao;