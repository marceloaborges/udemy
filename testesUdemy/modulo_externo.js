/* Exportanto meus módulos, pode ser exportado variáveis, funçoes, entre outros */

/* 
var teste = "Minha string usando módulo externo";
module.exports = teste; 
*/

/* Exportando uma função */
module.exports = function(){
    var teste = "Minha string usando módulo externo";
    return teste;
};