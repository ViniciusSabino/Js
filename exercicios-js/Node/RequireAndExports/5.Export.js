// console.log(module.exports == this) // Resultado = true
// console.log(module.exports == exports) // Resultado = true

// 3 maneiras diferentes que exportar essa variavel para fora desse arquivo

// this.a = 1

// exports.b = 2

// module.exports.c = 3


/////////////////////// Melhor forma de exportar


module.exports = {
    nome: 'Vinicius',
    idade: 22,
    email: 'vnc.chelsea@gmail.com'
}
