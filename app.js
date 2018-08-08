//Importando http 
var http = require('http');

//Criando o servidor
/* 
 * req = requisição
 * res = resposta
*/
var server = http.createServer(function(req, res){
    //Recuperando a url digitada
    var pagina = req.url;
    res.end(pagina);
    console.log(pagina);
});

//Rodando o servidor
server.listen(3000);