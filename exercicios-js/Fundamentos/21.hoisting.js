a = 30 // Mesmo que a variavel tenha sido declarado lá em baixo, no console.log() abaixo, irá retornar o valor de 30

console.log('a = ' + a) // undefined 

var a = 2;

console.log('a = ' + a); // 2

// Mesmo a variavel tendo sido declarado abaixo do primeiro console.log
// O Resultado de cima é um valor undefined, ou seja no primeiro console.log(), ele já sabia que a variavel a tinha sido declarada e retornou o valor dela 

// Mover a declaração da variavel para o topo


// Não utilizar, apenas curiosidade da linguagem