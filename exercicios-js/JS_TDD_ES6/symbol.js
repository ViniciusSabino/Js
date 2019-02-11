// Symbol é um outro tipo primitivo, assim como o Array por exemplo

// 1 - Imutável (não permite ser alterado)
// 2 - São únicos

// Ideal quando se deseja utilizar uma propriedade que não tenha o risco de dar conflito por nomes

let foo = Symbol("descrição");
let bar = Symbol("descrição");

console.log(foo); // Symbol(descrição)

console.log(foo == bar); // false

let obj = {
  [Symbol("nome")]: "Vinicius",
  [Symbol("idade")]: 23,
  cidade: "Hortolândia"
};

console.log(obj);

// { cidade: 'Hortolândia',
//   [Symbol(nome)]: 'Vinicius',
//   [Symbol(idade)]: 23 }
