
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    //local/nome da pagina
    res.render('site/home');
});

app.get('/contato', function(req, res){
    //local/nome da pagina
    res.render('site/contato');
});

app.listen(3000, function(req, res){
    console.log('Servidor iniciado com sucesso !');
});
