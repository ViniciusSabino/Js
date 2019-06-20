// Exemplo 1 - utilizando - export default

// export default => sempre irá exportar apenas um elemento por padrão, seja uma string ou um objeto

// -------- importando

import modulo1 from "./modulo1"; // pode ser importado com qualquer nome

modulo1.funcao1();
modulo1.nome;

// exportando

const funcao1 = () => console.log("Olá Mundo");
const nome = "Vinícius Rocha";

export default { nome, funcao1 };

// -------- export => poderá exportar vários elementos/funcoes por modulo

// ------- importando

import * as modulo2 from "modulo2"; // faz com que os elementos exportados sejam acessados a partir do nome modulo2

modulo2.funcao2();
modulo2.nome;

import { funcao2, nome } from "modulo2"; // faz com que os elementos sejam importados um a um (o nome do elemento precisa ser o mesmo)

funcao2();
console.log(nome);

import { funcao2 as novoNomeFuncao2, nome as novoNome } from "module2"; // exportando os elementos um a um mas trocando a nome para então chama-los

novoNomeFuncao2();
console.log(novoNome);

// ------- exportando

const funcao2 = () => console.log("Olá Mundo");
const nome = "Vinicius Sabino";

export { funcao2, nome };
