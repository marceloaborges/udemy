var clienteModel = require('../models/clienteModel')();


module.exports.index = function(req,res){
    clienteModel.all(function (erro, resultado) {
        //res.render('home', { clientes: resultado });
        //Adiconando validação de erros enviando objeto vazio no momento de carregar a página

        //res.render('home', { clientes: resultado, erros:{}, dados:{} });

        
        res.format({
            html: function(){
                res.render('home', { clientes: resultado, erros:{}, dados:{} });
            },
            json: function(){
                console.log('Retornando json');
            }
        })
    });
};

module.exports.store = function (req,res) {
    var dados = req.body;
    
    req.assert('nome','O campo Nome é de preencimento obrigatório !').notEmpty();
    req.assert('nome', 'O campo Nome deve conter pelo menos 3 caracteres').len(3, 20);
    req.assert('nome','O campo E-mail é de preencimento obrigatório !').notEmpty();
    req.assert('email','E-mail inválido').isEmail();
    


    var validacaoErros = req.validationErrors();
    if(validacaoErros){
        /* console.log(validacaoErros);
        return; */
        clienteModel.all(function (erro, resultado) {
            res.render('home', { clientes: resultado, erros:validacaoErros, dados:dados });
        });
        return;
    }

    

    clienteModel.save(dados, function(erro, resultado){
        if (!erro) {
            res.redirect('/');
        } else {
            console.log("Erro ao adicionar o registro !");            
            res.send("Erro ao adicionar o registro");
        }
    });
};

module.exports.show = function (req,res) {
    clienteModel.find(req.params.id, function(erro,resultado){
        //Verifica se houve resultado para o item pesquisado
        if(resultado[0] && !erro){
            //Retorna o primeiro registro -> indice 0
            res.render('detalheCliente', { cliente: resultado[0] });
        }else{
            console.log("Nada foi encontrado nesta pesquisa !");
            //Redireciona para outra página
            //res.redirect('/');
            res.send("Esta pesquisa retornou 0 resultados");
        }
        
    });
};