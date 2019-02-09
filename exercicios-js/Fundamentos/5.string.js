const nome = "Vinicius";

// caractere na posição 4 da string = charAt(int)
console.log(nome.charAt(4));

// valor da posição 3 da string mas com base na ASCII = String.charCodeAt(int)
console.log(nome.charCodeAt(3));

// posição do caractere que está como parametro = String.indexOf(string)
console.log(nome.indexOf("u"));

// irá mostrar a string da posição 1 até o final = String.substring(int)
console.log(nome.substring(1));

// irá mostrar a string da posição 1 até a 5 - mas sem incluir o 5 = String.substring(int, int)
console.log(nome.substring(1, 5));

// Função que concatena uma ou mais strings = String.concat(string);
console.log("Nome".concat(nome));

// Subistui o trecho da string 'Vini' por 'Teste' = String.replace(string, string)
console.log(nome.replace("Vini", "Teste"));

// Separa os elementos por uma , e devolve um array => [] String.split(",")
console.log("Ana,Vinicius,Pedro".split(","));
