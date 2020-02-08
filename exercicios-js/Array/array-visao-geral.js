// -------------- Array - Visão Geral

let aprovados = ["Vinicius", "Denis", "Maria", "Lucas"];

// Resultado = Maria
console.log(aprovados[2]); 

// Adicionando valores ao array ou modificando os valores caso já exista elemento nessa posição
aprovados[4] = "João"; 

// Adicionando dois elementos no final do array
aprovados.push("Ana", "Conceição"); 

console.log(aprovados[4]); // João
console.log(aprovados[6]); // Conceição

// Ordenando o array em ordem crescente
aprovados.sort(); 

// Deletando o elemento do array, o elemento de indice 1 será igual a undefined
delete aprovados[1]; 

// Irá excluir o elemento da posição 1 até o elemento da posição 2
aprovados.splice(1, 2); 

console.log(aprovados);

// Array até o momento => //[ 'Ana', 'João', 'Lucas', 'Maria', 'Vinicius' ]
// Deletando elementos da Posição 1 até a posição 4 e támbem adicionando novos elementos
aprovados.splice(1, 4, "Lays", "Taciana", "Ster"); 

// Resultado = ['Ana', 'Lays','Taciana','Ster']
console.log(aprovados); 
