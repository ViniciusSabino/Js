const array = new Array(20); // Definindo um array de tamanho 20

array.fill("Vinícius");

console.log(array);
// [
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius",
//   "Vinícius"
// ];

const novoArray = new Array(10);

novoArray.fill(2, 5, 9);

// parametro 1 => o valor que irá ser colocado nas posições do array
// parametro 2 => a partir de determinada posição
// parametro 3 => até que posição irá ser preenchido

console.log(novoArray);

// [ <5 empty items>, 2, 2, 2, 2, <1 empty item> ]

// 5 primeiras posições do array estão vazias
// da posição 5 até 8 estão preenchidas com o valor 2
// a posição 9 está vazia
