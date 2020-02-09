function Pessoa() {
    this.idade = 0
    console.log(this) // this = Pessoa {idade: 0}

    // Irá executar a minha função anonina em um intervalo de 1000 milisegundos (1 segundo)
    setInterval(function () {
        this.idade++
        console.log(this) // this = Objeto relacionado ao setInverval e não ao objeto Pessoa
        //console.log(this.idade) 
    }.bind(this), 1000); // this = Pessoa {idade: 0}
}

// a função bind nesse contexto, irá fazer com que o atributo "idade" seja 
// resolvido para o atributo idade de Pessoa e não mais 
// de setInterval()

new Pessoa()

