// IIFE - Immediately Invoked Function Expression

// Expressão de uma função imediatamente invocada

(function() {
  console.log("Será executado na hora que ela ser invocada!");
  console.log("Foge do escopo mais abrangente!");
})();

// Cria uma função anonima obrigatóriamente dentro de parenteses, e com isso ela será imediatamente invocada

// Da mesma forma que ->

console.log("Será executado na hora támbem");
console.log("Mais tudo estára sendo feito dentro do escopo global");
