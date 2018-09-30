const nome = "Vinicus Sabino";

// Forma de concatenar variaveis com textos
const template_string = `Ola ${nome}!`;

console.log(template_string);


// Transforma a string em maiuscula = String.toUpperCase()
const up = texto => texto.toUpperCase();

// É possivel chamar uma função dentro de um template string
console.log(`Ei.... ${up("cuidado")}`);
