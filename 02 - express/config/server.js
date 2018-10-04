/* var express = require('express');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Importando função das rotas
//require('../app/routes/web')(app);
// Outra maneira de importar a função, importa e depois executa
var rotas = require('../app/routes/web');
rotas(app);


//Exportando app
//module.exports = app; */

// Exportando tudo como uma função
module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.json()); //Support json encoded bodies
    app.use(bodyParser.urlencoded({extended:true})); //support encoded bodies
    app.use(expressValidator());

    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(3000, function (req, res) {
        console.log('Servidor iniciado com sucesso !');
    });

};