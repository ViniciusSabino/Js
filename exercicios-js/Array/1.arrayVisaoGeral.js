// Array - Visão Geral

let aprovados = ["Vinicius", "Denis", "Maria", "Lucas"];

console.log(aprovados[2]); // Resultado = Maria

aprovados[4] = "João"; // Adicionando valores ao array ou modificando os valores caso já exista elemento nessa posição
aprovados.push("Ana", "Conceição"); // Adicionando dois elementos no final do array

console.log(aprovados[4]); // João
console.log(aprovados[6]); // Conceição

aprovados.sort(); // Ordenando o array em ordem crescente

delete aprovados[1]; // Deletando o elemento do array, o elemento de indice 1 será igual a undefined

aprovados.splice(1, 2); // Irá excluir o elemento da posição 1 até o elemento da posição 2
console.log(aprovados);

// Array até o momento => //[ 'Ana', 'João', 'Lucas', 'Maria', 'Vinicius' ]
aprovados.splice(1, 4, "Lays", "Taciana", "Ster"); // Deletando ou não elementos e támbem adicionando novos elementos

console.log(aprovados); // Resultado = ['Ana', 'Lays','Taciana','Ster']
