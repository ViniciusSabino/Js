// Array.find()

const arraySimples = [4, -5, 0, -3, 11, 5];

const menor0 = arraySimples.find(x => x < 0); // find() - retorna o primeiro elemento do array com base na expressão

console.log(menor0); // -5

// Array.findIndex()

const objeto = [
  {
    nome: "Vinicius",
    idade: 23,
    cidade: "Hortolândia"
  },
  {
    nome: "Rayza",
    idade: 4,
    cidade: "Hortolândia"
  }
];

const indexObjetoRayza = objeto.findIndex(a => a.nome == "Rayza");

console.log(indexObjetoRayza); // 1

const objetoVinicius = objeto.find(a => a.cidade == "Hortolândia");

console.log(objetoVinicius); // { nome: 'Vinicius', idade: 23, cidade: 'Hortolândia' }
