// O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto
// arguments e assim por diante), chamando uma função personalizada com instruções a serem 
// executadas para o valor de cada objeto distinto

//------ Sintaxe

/**  for(variavel of iteravel) {

  declaração

} */

// variavel => A cada iteração, um valor de uma propriedade diferente é atribuido à variavel
// iteravel => Objeto cuso atributos serão iterados

// --------- Exemplo 1 - iterando sobre um array

const array = [10,2,3];

for(let value of array) {
  console.log(value);
}

// ----------- Exemplo 2 - iterando sobre um Map

const map = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of map) {
  console.log(entry); // => [a,1] ...
}

//
