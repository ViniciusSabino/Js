const peso1 = 1.0;
const peso2 = Number('2.0');

// Retorna true ou false se o número é um inteiro => Number.isInteger(int)
console.log(Number.isInteger(peso1));

const numero_float = 10.4029;

// Mostrando apenas 2 números apos a virgula = Number.toFixed(int)
console.log(numero_float.toFixed(2));

// Convertendo o número em uma string = Number.toString()
console.log(numero_float.toString());

// Convertendo o número em uma string e exibindo em binario = Number.toString(2)
console.log(numero_float.toString(2));
// mostrando o tipo da variavel 

// Mostra o tipo da variavel = typeof
console.log(typeof numero_float);
