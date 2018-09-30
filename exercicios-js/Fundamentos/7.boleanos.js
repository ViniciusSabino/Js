let isAtivo = false;

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!1); // Resultado = True
console.log(!1); // Resultado = False

// Tipos que são verdadeiros
console.log("Valores Verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!"Teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log((isAtivo = true));

// Tipos que são falsos
console.log("Valores Falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log((isAtivo = false));
