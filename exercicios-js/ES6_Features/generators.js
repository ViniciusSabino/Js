function* getNomes() {
  yield "São Paulo";
  yield "Corinthians";
  yield "Santos";
}

const nomes = getNomes();

console.log(nomes); // Resultado => Object [Generator] {}

console.log(nomes.next()); // { value: 'São Paulo', done: false }
console.log(nomes.next()); // { value: 'Corinthians', done: false }
console.log(nomes.next()); // { value: 'Santos', done: false }

console.log(nomes.next()); // { value: undefined, done: true } 

// done = true, significa que foi concluido
