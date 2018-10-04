//Teste importando dados de clienteModel
//Importando global
var clientes = require('../models/clienteModel')();


module.exports = function(app){

    app.get('/', function (req, res) {

        //console.log(clientes.all());
        var listaClientes = clientes.all();
        //local/nome da pagina
        res.render('site/home',{clientes:listaClientes});
    });

    app.get('/contato', function (req, res) {
        //local/nome da pagina
        res.render('site/contato');
    });

};