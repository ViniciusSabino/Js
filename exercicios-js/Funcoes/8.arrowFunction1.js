// Função Normal
let dobro1 = function (a) {
    return 2 * a
}

// Arrow Function menos reduzida => () = parametros da função
dobro2 = (a) => {
    return 2 * a
}


// Arrow Function mais reduzida => 

// dobro = {constante que recebe a função}
// a  {parametros da função}
// => {aponta para o corpo da função ou para um retorno implicito}
// 2 * a = {retorno implicito da função, que no caso é a multiplicacao de 2 com o parametro a}
dobro3 = a => 2 * a

console.log(dobro3(5)) // Resultado = 10

// ------------------------------------------- SEGUNDO EXEMPLO ---------------------------

let ola1 = function () {
    return 'Olá';
}


let ola2 = () => 'Olá'

console.log(ola2()) // Resultado = Olá


// ola3 = {constante que recebe a função}
// _ = {indica que a função irá receber um unico parametro (pode ser ignorado sem problemas)}
// => {apontando para o corpo da função ou para um retorno implicito}
// 'Olá' {O retorno implicito da função}
let ola3 = _ => 'Olá'

console.log(ola3()) // Resultado = Olá