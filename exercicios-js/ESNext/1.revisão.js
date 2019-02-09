// 1 - let e const
{
  var a = 2;
  let b = 3; // Escopo de bloco => a variavel B só é visivel dentro de um bloco de código
}

console.log(a); // 2
//console.log(b); // b is not defined

// 2 - Template String

const produto = "iPad";
console.log(`${produto} é caro`); // iPad é caro

// Destructuring

const [l, e, ...tras] = "Cod3r";

console.log(l); // C
console.log(e); // o
console.log(tras); // ['d', '3', 'r']

const [x, , y] = [1, 2, 3]; // Destruturando um array

console.log(x); // 1
console.log(y); // 3

const { idade: i, nome } = {
  nome: "Vinicius",
  peso: 65,
  idade: 23,
  altura: 1.86
}; // Desestruturando um objeto

console.log(i); // 23
console.log(nome); // Vinicius
