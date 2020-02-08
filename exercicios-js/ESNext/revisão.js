// ------------------ Arrow Functions

const soma = (a, b) => a + b; // dois parametros
const soma2 = _ => 1 + 2; // Sem parametros

console.log(soma(2, 3)); // 5
console.log(soma2()); // 3

// -------------------- Arrow Function (this)

const lexico1 = _ => console.log(this == exports); // True => this == exports ou module.exports

lexico1();

// --------------------- Parametro default

function log(texto = "Node") {
  console.log(texto);
}

log("React"); // Resultado = React
log(); // Resultado = Node

// ------------------------- Operador Rest

// Irá agrupar todos os parametros da função em uma estrutura do tipo array
function total(...numeros) {
  
  let total = 0;
  
  console.log(numeros.length); // Igual a 4
  
  numeros.forEach(n => (total += n));
  
  return total; // Total = 14
}

console.log(total(2, 3, 4, 5));
