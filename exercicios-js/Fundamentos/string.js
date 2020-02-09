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

// Retorna o comprimento da string 
console.log("Vinicius".length);

// Retorna true ou false se uma string é encontrada dentro de outra string 
console.log("Vinicius".includes('Vini')); // true

// Determina se uma string termina com os caracteres de outra string 
console.log("Vinicius".endsWith('cius'));

// Retorna o indice dentro do objeto String chamado da primeira ocorrencia 
// do valor especificado, ou -1 se não encontrado.
console.log('Vinícius'.indexOf('vin'))

// lastIndexOf => Uma ocorrencia

// Usado para combinar uma expressão regular com uma string 
console.log('Vinícius'.match())

// Retorna uma string consistindo elementos do objeto repetido pelas vezes definidas
console.log('spfc'.repeat(2))

// o método string.serch(regexp) executa uma busca de uma expressão regular nesse objeto String

// retorna o índice no string do primeiro trecho que satisfez a expressão regular; se não 
// for encontrado então retorna -1.

