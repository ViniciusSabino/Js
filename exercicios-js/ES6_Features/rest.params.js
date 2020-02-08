// Exemplo 1
// Realiza a multiplicação do valor de 'multi' em cada argumento passado apos o multi e os resultados
// armazena em um array

// Forma mais complexa
function multiplicacao(multi, arg1, arg2, arg3) {
  let array = [];
  
  array.push(multi * arg1);
  array.push(multi * arg2);
  array.push(multi * arg3);
  
  return array;
}

console.log(multiplicacao(2, 1, 2, 3)); // [2, 4, 6]

// Forma mais comum (ES6)
function multiplicacao2(multi, ...args) {
  return args.map(arg => arg * multi);
}

console.log(multiplicacao2(2, 1, 2, 3, 4)); // [2, 4, 6, 8]

// ..args => no exemplo significa que a partir do segundo argumento eu terei diversos argumentos 
// e com isso args será um array 
