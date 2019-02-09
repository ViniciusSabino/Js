// Igual
console.log('(1) ', '1' == 1); // Resultado = true

// Extritamente Igual
console.log('(2) ', '1' === 1); // Resultado = false (Além de verificar o valor, támbem verifica o tipo)


// Diferente
console.log('(3) ', '3' != 3); // Resultado = false

// Extritamente Diferente
console.log('(4) ', '3' !== 3); // Resultado = false

const d1 = new Date(0);
const d2 = new Date(0);

console.log('(5)', d1 == d2); // Resultado = false (compara endereço de memoria)

console.log('(6)', d1.getTime() == d2.getTime()); // Resultado = true (compara os valores)

// OUTRAS COMPARAÇÕES

// undefined == null => resultado true
// undefined === null => resultado false