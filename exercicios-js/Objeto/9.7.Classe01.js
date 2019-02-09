class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {

        // os valores do objeto serão os mesmos que passados por parametro
        // na hora de contruir o objeto
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // Método que irá receber um array de lançamentos, e dentro dele
    // irá percorrer esse array de lançamentos, pegando cada elemento e adicionando
    // no array que corresponde ao atributo da classe CicloFinanceiro
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // Método que irá percorrer um array de lançmentos e irá 
    // pegar cada valor e irá somar atribuindo tudo a variavel
    // valorConsolidado, no final essa variavel será retornda 
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => valorConsolidado += l.valor);
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento("Luz", -100)

const contas = new CicloFinanceiro(10, 2018)

contas.addLancamentos(salario, contaDeLuz)

// ...lancamentos => Indica que a função pode receber uma 
// quantidade de parametros variados, ou seja no final o que terá 
// dentro da função é um array de parametros, que no caso 
// do exemplo é um array de objetos do tipo "Lançamento"

console.log(contas.sumario())

