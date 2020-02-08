const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// ----------------------------- Array.pop();

// Retirando o último elemento do array
pilotos.pop(); 

// Adicionando um elemento na última posição do array
pilotos.push("Hamilton"); 

// ----------------------------Array.shift();

// Retirando um elemento da primeira posição do array
pilotos.shift(); 

// ----------------------- Array.unshift();

pilotos.unshift("Verstappen"); // adicionando um elemento na primeira posição do array

// --------------------------- Array.splice()

// 2 => Irá adicionar os dois novos elementos a partir da posição 2 do array
// 0 => Nenhum item será removido
// 'Bottas', 'Massa' => os novos elementos que serão adicionados
pilotos.splice(2, 0, "Bottas", "Massa");

// valor 3 => a partir do elemento três, contanto com ele
// valor 1 => 1 elemento será removido do array
pilotos.splice(3, 1);

// o segundo argumento define a quantidade de itens que serão removidos

// ------------------------------ Array.slice()

// / Irá criar um novo array com base nesse array mas apenas a partir do elemento 2
const algunsPilotos = pilotos.slice(2); 

// Irá criar um novo array a partir do elemento 0 até o elemento 2 (sem contar o elemento 2)
const algunsPilotos2 = pilotos.slice(0, 2);

// Irá simplesmente fazer uma cópia do array
const arrayCopia = pilotos.slice();

// [Verstappen, Alonso]
console.log(algunsPilotos2); 

// ------------------------------ Array.flat()

// Um novo array com os elementos sub-array concatenados nele.
const array1 = [1, 2, 3, 4, [5, 6]]; 

array1.flat(); // Resultado = [1,2,3,4,5,6]

var array2 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

array2.flat(); // Resultado = [1,2,3,4,5,6,7,8,[9,10,11]]

var array3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

// Especificando um nível de profundidade de 2 
array3.flat(2); // Resultado = [1,2,3,4,5,6,7,8,9,10,11]

// ------------------ Array.includes()

// true -> retorna um true ou false se o elemento existe no array
[1, 2, 3, 4, 5].includes(2); 
[1, 2, 3].includes(4); 

// verificando se existe o '3' no array e iniciando pela posição 2, começa iniciando em 0
[1, 2, 3, 4].includes(3, 2); 

// ---------------- Array.indexOf()

// 1 => Retorna o indice do array relacionado ao elemento que estou procurando
[1, 2, 3, 4].indexOf(2); 

// -1 => Não existe no array
[1, 2, 4, 5].indexOf(6); 

// --------------- Array.lastIndexOf()

//Retorna o último (maior) índice de um elemento dentro da matriz igual ao valor 
// especificado ou -1 se nenhum for encontrado.

// --------------------- Array.join()

// Exemplo 1 - juntando todos os elementos de um array de string em uma uníca string mas separado por algum caractere

const elementos = ["São Paulo", "Corinhians", "Palmeiras"];

elementos.join(","); // São Paulo,Corinthians,Palmeiras

// -------------- Array.reverse()

// Inverte os itens do array, o item que era o primeiro passa a ser o último

const array = ["one", "two", "three"];

array.reverse(); // ['three','two','one']

// ------------------- Array.sort()

["cherries", "apples", "bananas"].sort(); // ['apples','bananas',''cherries]

[1, 10, 2, 21].sort(); // [1,10,2,21]

// Ordernando de forma correta um array de inteiros

const arrayOrdenar = [1, 4, 7, 18, 19, 45, 11];

const arrayOrdenado = arrayOrdenar.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
});

console.log(arrayOrdenado); // [1,4,7,11,18,19,45]

// -------------------------- Array.toString()

["Jan", "Fev", "Mar", "Abr"].toString(); // 'Jan,Fev,Mar,Abr'

// --------------------------- Array.isArray()

// Retorna true se a variável é um array e false caso contrário

// --------------------------- Array.every()

// Retorna true se todos os elementos nessa matriz satisfizerem a função de teste fornecida.

// Exemplo 1: Testando tamanho de todos os elementos do array

// O exemplo a seguir testa se todos os elementos no array são maiores que 10

const isBigEnough = (element, index, array) => element >= 10;

[12,5,8,130,44].every(isBigEnough); // false

[12,54,18,130,44].every(isBigEnough); // true

// OU

[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10);
