// Concat => Concatenar varios arrays em um único array

const filhas = ["Valeskah", "Cibalena"];

const filhos = ["Uoxiton", "Uescley"];

const todos = filhas.concat(filhos);

// Resultado => [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley' ]
console.log(todos); 

// concatenando dois arrays e adicioando um novo elemento
const novo = filhas.concat(filhos, "Vinicius");

// Resultado => [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley', 'Vinicius' ]
console.log(novo); 

// Resultado => [ 1, 2, 3, 4, 5, 6, 'Valeskah', 'Cibalena', 'Uoxiton', 'Uescley' ]
console.log([].concat([1, 2], [3, 4], [5, 6], filhas, filhos)); 
