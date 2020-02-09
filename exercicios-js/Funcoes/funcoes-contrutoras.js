// Funções Construtoras

// No JavaScript => Classes nada mais é do que formas diferentes de fazer uma função

function Carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado (atributo que pertence apenas ao escopo dessa função) (usando let)
    let velocidadeAtual = 0

    // Método publico (usando this)
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    // Método publico (o método devolve o valor do atributo, o atributo não é acessado diretamente)
    this.getVelocidadeAtual = () => velocidadeAtual

}

const uno = new Carro() // Os atributos do uno foram os atributos padrões
uno.acelerar() // Acelerei o uno (mudei o valor da velocidade)

console.log(uno.getVelocidadeAtual()) // Usei o método para acessar o valor da velocidade atual

const ferrari = new Carro(350, 20)
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual())
