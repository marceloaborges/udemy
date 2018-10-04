//Teste importando dados de clienteModel
//Importando global
//var clientes = require('../models/clienteModel')();

var clienteController = require('../controllers/clienteController');


module.exports = function(app){

    app.get('/', function (req,res) {
        
        //local/nome da pagina
        //res.render('home', { clientes: listaClientes });

        //console.log(clientes.all());
        // var listaClientes = clientes.all();

        /* clientes.all(function (erro, resultado){
            res.render('home', { clientes: resultado });
        }); */

        clienteController.index(req,res);
        
    });

    app.get('/detalhe/:id', function(req,res){
        //console.log(req.params.id);
        clienteController.show(req,res);        
    });

    app.post('/', function(req,res){
        clienteController.store(req,res);
    });



    app.get('/contato', function (req, res) {
        //local/nome da pagina
        res.render('contato');
    });

};