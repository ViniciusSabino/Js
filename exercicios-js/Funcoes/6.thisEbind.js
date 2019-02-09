const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao); // this => acessando o objeto que está sendo referenciado nesse contexto, no caso "pessoa"
    }
}

pessoa.falar() // Resultado = Bom dia!

const { falar, saudacao } = pessoa

falar() // Resultado = undefined (conflito entre paradigmas: funcional e OO)

// Resultado foi undefined pois o this que está contido no objeto pessoa, não está refenciando mais para o atributo saudação do objeto pessoa, 
// pois a constante falar, recebeu apenas a função

console.log(saudacao); // Resultado = "Bom dia!"

const falar2 = pessoa.falar

falar2() // Resultado = undefined

const falarDePessoa = pessoa.falar.bind(pessoa);

// No bind você passa um objeto no qual você deseja que o "this" seja resolvido 

// Em outras palavras: O Método falarDePessoa() irá tentar acessar um atributo chamado "saudacao" usando o this, o bind nesse caso
// indica que o atributo "suadacao" e outros que estiverem no this irão utilizar o objeto pessoa, pois lá existe um atributo "saudacao"

// bind() => não altera a função, apenas retorna a mesma função mas com o this já resolvido


falarDePessoa() // Resultado = Bom dia!