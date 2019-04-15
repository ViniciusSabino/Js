// MAP => Use o map() quando é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores

// Algunas Regras

// ¹ - O array novo terá o mesmo número de elementos do que do outro array, mas com os dados transformados
// ² - Transformar um array em outro, mas com os dados transformados

const nums = [1, 2, 3, 4, 5];

// For que irá percorrer todo o array de 6 posições chamado "nums", onde cada elemento será adicionado em um novo array,
// mas com o valor multiplicado por 10
const dobro = nums.map(valor => valor * 2);

console.log(dobro);

// Realizando 3 transformações no array nums para no final gerar um novo array
const soma10 = elemento => elemento + 10;
const triplo = elemento => elemento * 3;
const paraDinheiro = elemento =>
  `R$ ${parseFloat(elemento)
    .toFixed(2)
    .replace(".", ",")}`;

const novoArray = nums
  .map(soma10)
  .map(triplo)
  .map(paraDinheiro);

console.log(novoArray);
