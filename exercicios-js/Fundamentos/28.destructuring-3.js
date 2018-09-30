// Utilizando destructuring em um parametro de função


// Quando a função receber um objeto como parametro, já irá desestruturar e tirar os atributos "min" e "max" do objeto passado, para usar dentro da função
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

const object = {
    max: 50,
    min: 40
}

console.log(rand(object)); // Resultado precisa ser um número entre 40 e 50;