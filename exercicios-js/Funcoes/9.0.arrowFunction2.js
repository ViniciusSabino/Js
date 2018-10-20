function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
        // Irá mostrar o valor do atributo idade de "Pessoa", pois o this usado dentro de uma arrow function
        // faz com que o this.idade seja apontado para o lugar onde a função arrow foi criada, ou seja dentro do Objeto Pessoa

    }, 1000)
}

Pessoa()