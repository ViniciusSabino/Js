function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.getPreco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco
};

// Formas de executar a função getPreco()

//----------  1
(global.preco = 20), (global.desc = 0.1);
console.log(getPreco());

// --------- 2
console.log(produto.getPreco());

// 3 - Usando Call e Apply
const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro, 0.17, "R$"));
console.log(getPreco.apply(carro, [0.17, "R$"]));

// Nesse exemplo

// call => função que indicará qual o contexto que a função que está chamando 
// irá utilizar, os demais parametros são os parametros da função "getPreco"

// apply => basicamente é a mesma função que o "call", 
// mas os parametros da função getPreco() são passados dentro de um array como o segundo argumento
