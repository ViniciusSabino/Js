const objeto = { nome: 'Vinicius', idade: 23, a: 1, b: 3, c: 3, soma: () => a + b + c }

var json = JSON.stringify(objeto)
// Convertendo um objeto do JavScript em um JSON, as funções são ignoradas


console.log(json); // Resultado = JSON

console.log(JSON.parse(json)); // Resultado = Object 
// Convertendo um JSON em um objeto do JavaScript

