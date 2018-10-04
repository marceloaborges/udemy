var db = require('../../config/db');


module.exports = function(){

    /* this.all = function(){       

        return [
            {nome:"Nome01", email:"email01@email.com"},
            {nome:"Nome02", email:"email02@email.com"},
            {nome:"Nome03", email:"email03@email.com"},
            {nome:"Nome04", email:"email04@email.com"},
            {nome:"Nome05", email:"email05@email.com"},
            {nome:"Nome06", email:"email06@email.com"}
        ];
    }; */

    this.all = function(retorno){
        var conexao = db();
        return conexao.query('SELECT * FROM clientes', retorno);
    }

    this.find = function(id, retorno){
        var conexao = db();
        return conexao.query('SELECT * FROM clientes WHERE id = ?', id,retorno)
    }

    this.save = function(dados,retorno){
        var conexao = db();
        return conexao.query('INSERT INTO clientes SET ?', dados, retorno);
    }

    return this;

};