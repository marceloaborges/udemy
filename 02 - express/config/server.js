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
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(3000, function (req, res) {
        console.log('Servidor iniciado com sucesso !');
    });

};