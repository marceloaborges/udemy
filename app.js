
/*var http = require('http');

var server = http.createServer(function(req,res){
	var pagina = req.url;
	console.log("A página acessada é : " + pagina);
	if(pagina == '/'){
		res.end('Página Home');
	}else if (pagina == '/contato'){
		res.end('Página de Contato');
	}
	
});

console.log('Servidor iniciado');
server.listen(3000);*/

var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Página Home')
});

app.get('/contato', function(req,res){
	res.send('Página de Contato')
});

app.listen(3000, function(){
	console.log('Servidor iniciado com sucesso !!!');
});