const pessoa = {
  nome: "Vinicius",
  idade: 20,
  peso: 40
};

console.log(Object.keys(pessoa)); // Retorna um array com os nomes de todos os atributos (chave) do objeto
console.log(Object.values(pessoa)); // Retorna um array com os valores do objeto
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Vinicius' ], [ 'idade', 20 ], [ 'peso', 40 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Função usada para definir propriedades, mas podendo colocar certas restriçoes
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // Pode ser listada usando o método keys
  writable: false, // Esse atributo pode ser modificado?
  value: "01/01/2019" // Definindo já um valor para o objeto
});

console.log(pessoa);

// Funçao - Object.assign (ECMAScript 2015)

const destino = { a: 1 };

const origem = { b: 2 };

const origem2 = { c: 3, a: 4 };

const novoObjeto = Object.assign(destino, origem, origem2);
// Irá fazer com que todos os atributos dos tres objetos estejam presentes
// no objeto que recebera o resultado dessa função, no caso o atributo a que já
// existe no objeto "destino" irá ter o seu valor sobrescrito para 4, ou seja
// os valores do ultimo objeto do parametro serão os valores do novo objeto
// caso aconteca uma sobrescrita

Object.freeze(novoObjeto); // Faz com que o objeto passado pelo parametro fique
// congelado e não podendo ser alterado

console.log(novoObjeto);
