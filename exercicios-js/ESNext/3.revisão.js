// ES8 Object.values e Object.entries

const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(Object.values(obj)); // [1,2,3,4] => Irá pegar todos os valores de cada atributo e armazenar em um array

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// Melhorias na notação literal de objetos

const nome = "Carla";

const pessoa = {
  nome,
  ola() {
    console.log("Oi meu nome é Carla");
  }
};

// Pessoa = { nome: Carla, ola: [Function: ola] }

console.log(pessoa);

pessoa.ola(); // "Oi meu nome é Carla"

// Usando Class

class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au au au au!!";
  }
}

const cachorro = new Cachorro();
console.log(cachorro.falar()); // Au au au au!!
