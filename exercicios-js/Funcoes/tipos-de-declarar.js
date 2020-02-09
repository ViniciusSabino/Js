// --------------------------------------------------- function declaration

console.log(soma(4, 5)) // Resultado = 9 
// (Pois o interpretador javascript primeiro carrega 
// as funções, deixa tudo preparado e depois o código é executado


function soma(x, y) {
    return x + y
}

// ------------------------------------------------- function expression
const sub = function (x, y) {
    return x - y
}

// ------------------------------------------- named function expression (pouco usada)
const mult = function mult(x, y) {
    return x + y
}


