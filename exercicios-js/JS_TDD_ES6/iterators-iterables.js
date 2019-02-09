// Iterables => Elementos que eu posso iterar, passar de um item para o outro

const array = [1, 2, 3, 4, 5, 6];

const texto = "Barcelona"; // Iterable
const iterator = texto[Symbol.iterator](); // Iterator

console.log(iterator.next()); // { value: 'B', done: false }  => done = ainda existem itens para iterar
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// { value: 'a', done: false }
// { value: 'r', done: false }
// { value: 'c', done: false }
// { value: 'e', done: false }
// { value: 'l', done: false }
// { value: 'o', done: false }
// { value: 'n', done: false }
// { value: 'a', done: false }
// { value: undefined, done: true }

// Segundo exemplo

for (letra of texto) {
  console.log(letra);
  if (letra == "l") break;
}

// B
// a
// r
// c
// e
// l
