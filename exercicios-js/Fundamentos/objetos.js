// JSON != object

// Declarando um novo Array
const prod = [];

// Declarando um novo Objeto
const obj = {};

// Adicionando atributos e valores a um objeto criado
obj.nome = "Vinicius";
obj.preco = 4.239;
obj["teste"] = "Notação por chave";

const atributo = "idade";

obj[atributo] = 21;

console.log(obj);

//Atributo do Objeto sendo um novo Objeto
obj.novo = {
  t1: "Outro Objeto"
};

console.log(obj);
