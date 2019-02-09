// Uma factory => fabrica de objetos (Retorna um novo objeto)

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}