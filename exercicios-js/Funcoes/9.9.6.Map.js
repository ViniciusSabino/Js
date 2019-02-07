const soma = () => 20 + 20;

const multiplicacao = () => 2 * 2;

const objectMap = new Map([["soma", soma], ["multiplicacao", multiplicacao]]);

// chamando a função de soma

console.log(objectMap.get("soma")()); // 40

console.log(objectMap.get("multiplicacao")()); // 4
