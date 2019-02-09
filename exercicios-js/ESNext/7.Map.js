// Map => Estrutura de Chave Valor

// 1 - Não aceita repetição na chave (Caso a funçã set se repita ela irá substituir o valor e manter a mesma chave, sem repetição)

const tecnologia = new Map();

tecnologia.set("React", { framework: false });
tecnologia.set("Angular", { framework: true });

console.log(tecnologia.React); // undefined

console.log(tecnologia.get("React")); // Resultado = { framework: false }

console.log(tecnologia.get("Angular")); // Resultado = { framework: true }

const chavesVariadas = new Map([
  [function() {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"]
]);

console.log(chavesVariadas); //  Map { [Function] => 'Função', {} => 'Objeto', 123 => 'Numero' }

chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor);
});

// [Function] 'Função
// {} 'Objeto
// 123 'Numero

console.log(chavesVariadas.has(123)); // True => Retornará um booleano indicando se o valor está ou não contido nesse Map

console.log(chavesVariadas.has(1234)); // False

chavesVariadas.delete(123); // Deletando um valor que está contido dentro do Map (Retorna true ou false se conseguiu ou não deletar)

console.log(chavesVariadas);

console.log(chavesVariadas.size); // 2 => Informa quantos elementos estão contidos dentro do Map
