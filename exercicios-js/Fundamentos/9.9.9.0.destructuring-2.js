// Desestruturação utilizando arrays

const [a] = [10];
console.log(a); // Resultado = 10

// Criando constantes recebendo cada valor na mesma seguencia do array 
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

console.log('n1  =' + n1); // Resultado = 10
console.log('n3 ' + n3); // Resultado = 9
console.log('n5 ' + n5); // Resultado = undefined (fora do array)
console.log('n6 ' + n6); // Resultado = 0 (valor default)


// Desestruturando um array onde um elemento do array tambem é um array
const [, [, nota]] = [1, [4, 10], 5];

console.log(nota); // Resultado = 10

// Desestruturando um array onde um elemento do array tambem é um array
const [, [, teste]] = [[, 8, 8], [9, 6, 8], [10, 4]];

console.log(teste); // Resultado = 6