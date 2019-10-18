const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// --------------------------------- Array.pop();

pilotos.pop(); // retirando o último elemento do array

pilotos.push("Hamilton"); // adicionando um elemento na última posição do array

// --------------------------------- Array.shift();

pilotos.shift(); // retirando um elemento da primeira posição do array

// -------------------------------- Array.unshift();

pilotos.unshift("Verstappen"); // adicionando um elemento na primeira posição do array

// ----------------------------- Array.splice()

// 2 => Irá adicionar os dois novos elementos a partir da posição 2 do array
// 0 => Ninguem será removido
// 'Bottas', 'Massa' => os novos elementos que serão adicionados
pilotos.splice(2, 0, "Bottas", "Massa");

// 3 => a partir do elemento três, contanto com ele
// 1 => 1 elemento será removido do array
pilotos.splice(3, 1);

// --------------------------------- Array.slice()

const algunsPilotos = pilotos.slice(2); // Irá criar um novo array com base nesse array mas apenas a partir do elemento 2

const algunsPilotos2 = pilotos.slice(0, 2); // Irá criar um novo array a partir do elemento 0 até o elemento 2 (sem contar o elemento 2)

console.log(algunsPilotos2); // [Verstappen, Alonso]

// ---------------------------------- Array.flat()

const array1 = [1, 2, 3, 4, [5, 6]]; // Um novo array com os elementos sub-array concatenados nele.

array1.flat(); // Resultado = [1,2,3,4,5,6]

var array2 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

array2.flat(); // Resultado = [1,2,3,4,5,6,7,8,[9,10,11]]

var array3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

array3.flat(2); // Resultado = [1,2,3,4,5,6,7,8,9,10,11]

// --------------------------------- Array.includes()

[1, 2, 3, 4, 5].includes(2); // true -> retorna um true ou false se o elemento existe no array
[1, 2, 3].includes(4); // false

[1, 2, 3, 4].includes(3, 2); // verificando se existe o '3' no array e iniciando pela posição 2, iniciando em 0

// ------------------------------------- Array.indexOf()

[1, 2, 3, 4].indexOf(2); // 1 => Retorna o indice do array relacionado ao elemento que estou procurando
[1, 2, 4, 5].indexOf(6); // -1 => Não existe no array

// ---------------------------------------- Array.join()

// Exemplo 1 - juntando todos os elementos de um array de string em uma uníca string mas separado por algum caractere

const elementos = ["São Paulo", "Corinhians", "Palmeiras"];

elementos.join(","); // São Paulo,Corinthians,Palmeiras

// ---------------------------------------- Array.reverse()

// Inverte os itens do array, o item que era o primeiro passa a ser o último

const array = ["one", "two", "three"];

array.reverse(); // ['three','two','one']

// ------------------------------------------ Array.sort()

["cherries", "apples", "bananas"].sort(); // ['apples','bananas',''cherries]

[1, 10, 2, 21].sort(); // [1,10,2,21]

// ordernando de forma correta um array de inteiros

const arrayOrdenar = [1, 4, 7, 18, 19, 45, 11];

const arrayOrdenado = arrayOrdenar.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
});

console.log(arrayOrdenado); // [1,4,7,11,18,19,45]

// ----------------------------------------- Array.toString()

["Jan", "Fev", "Mar", "Abr"].toString(); // 'Jan,Fev,Mar,Abr'
