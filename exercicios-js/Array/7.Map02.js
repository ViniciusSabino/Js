const carrinho = [
  '{"nome": "Borracha", "preco": 3.65 }',
  '{"nome": "Caderno", "preco": 10.65 }',
  '{"nome": "Caneta", "preco": 4.65 }',
  '{"nome": "Lapis", "preco": 1.65 }',
  '{"nome": "Apontador", "preco": 0.65 }',
  '{"nome": "Calculadora", "preco": 21.65 }',
  '{"nome": "Corretivo", "preco": 5.65 }'
];

// Desafio: Retornar um array apenas com os preços
const arrayPrecos = carrinho.map(item => JSON.parse(item).preco);

// Forma feita no curso
const apenasObjeto = json => JSON.parse(json);
const apenasPreco = item => item.preco;

const resultado = carrinho.map(apenasObjeto).map(apenasPreco);

console.log(resultado);
