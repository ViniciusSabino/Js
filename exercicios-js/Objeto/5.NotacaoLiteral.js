const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };

// Ostou criado um objeto onde o nome dos atributos já serão a,b,c com seus respectivos valores
// sem precisar especificar como no exemplo de cima.
const obj2 = { a, b, c };

// Os dois objetos são exatamente iguais
console.log(obj1);
console.log(obj2);

const nomeAtributo = "Nota";
const valorAtributo = "9";

const objeto3 = {};
objeto3[nomeAtributo] = valorAtributo; // Resultado = {Nota: '9'}

console.log(objeto3);

const objeto4 = { [nomeAtributo]: valorAtributo };

console.log(objeto4); // Resultado = {Nota: '9'}

const objeto5 = {
  funcao1: function() {
    // ...
  },
  funcao2() {
    // ... ES2015 (Forma mais nova de colocar uma função como atributo de um objeto)
  }
};
