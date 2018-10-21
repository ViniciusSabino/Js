const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log(pilotos)

pilotos.pop() // retirando o último elemento do array

console.log(pilotos)

pilotos.push('Hamilton') // adicionando um elemento na última posição do array

console.log(pilotos)

pilotos.shift();  // retirando um elemento da primeira posição do array

console.log(pilotos)

pilotos.unshift('Verstappen') // adicionando um elemento na primeira posição do array

console.log(pilotos)

// 2 => Irá adicionar os dois novos elementos a partir da posição 2 do array
// 0 => Ninguem será removido
// 'Bottas', 'Massa' => os novos elementos que serão adicionados
pilotos.splice(2, 0, 'Bottas', 'Massa')

console.log(pilotos)

// 3 => a partir do elemento três, contanto com ele
// 1 => 1 elemento será removido do array
pilotos.splice(3, 1)

console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Irá criar um novo array a partir do elemento 2 

console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(0, 2) // Irá criar um novo array a partir do elemento 0 até o elemento 2 (sem contar o elemento 2)
// [Verstappen, Alonso]

console.log(algunsPilotos2)