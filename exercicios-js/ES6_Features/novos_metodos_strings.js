// -------------------- Novos métodos de string -----------------

const nome = "Vinicius Sabino da Rocha";
const time = "São Paulo Futebol Clube";

// String.startWith() - Verifica se a constante nome começa com determinada string

console.log(nome.startsWith("São")); // false
console.log(nome.startsWith("Vin")); // true
console.log(time.startsWith("Paulo", 4)); // true (Indico a partir de qual caractere devo iniciar a busca)
console.log(time.startsWith("Paulo", 5)); // false

// String.endsWith() - Verifica se a constante termina com determinada string

console.log(nome.endsWith("Vin")); // false
console.log(nome.endsWith("Rocha")); // true
console.log(time.endsWith("Paulo")); // false
console.log(time.endsWith("Paulo", 9)); // true (Indico até qual caractere ele deve contar)

// String.repeat() - Repete uma determina string

console.log("Vinne".repeat(3)); // VInneVinneVinne

// String.includes() -  Verifica se uma string existe dentro de outra string

console.log(nome.includes("Sabino")); // true
console.log(time.includes("Palmeiras")); // false
