// Concat => Concatenar varios arrays em um único array

const filhas = ["Valeskah", "Cibalena"];

const filhos = ["Uoxiton", "Uescley"];

const todos = filhas.concat(filhos);

console.log(todos); // Resultado => [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley' ]

// concatenando dois arrays e adicioando um novo elemento
const novo = filhas.concat(filhos, "Vinicius");

console.log(novo); // Resultado => [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley', 'Vinicius' ]

console.log([].concat([1, 2], [3, 4], [5, 6], filhas, filhos)); // Resultado => [ 1, 2, 3, 4, 5, 6, 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley' ]
