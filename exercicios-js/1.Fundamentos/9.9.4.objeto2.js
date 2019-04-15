console.log(typeof Object) // Resultado = function

console.log(typeof new Object()) // Resultado = object 


// Function

const Cliente = function () { };
console.log(typeof Cliente); // Resultado = function

console.log(typeof new Cliente()) // Resultado = object


// Classe, é a implementação de uma função, internamente

class Produto { } // ES 2015 - ES6
console.log(typeof Produto); // Resultado = function

console.log(typeof new Produto()) // Resultado = object
