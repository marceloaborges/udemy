var db = require('../../config/db');


module.exports = function(){

    this.all = function(){
        var conexao = db();
        conexao.query('SELECT * FROM clientes', function(erro, resultado){
            console.log(resultado);
        });

        /* return [
            {nome:"Nome01", email:"email01@email.com"},
            {nome:"Nome02", email:"email02@email.com"},
            {nome:"Nome03", email:"email03@email.com"},
            {nome:"Nome04", email:"email04@email.com"},
            {nome:"Nome05", email:"email05@email.com"},
            {nome:"Nome06", email:"email06@email.com"}
        ]; */
    };


    return this;

};