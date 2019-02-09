const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')


const funcionarios = axios.get(url).then(resp => {

    let funcionarios = resp.data

    const funcChinenesAndMulheres = (pessoa) => pessoa.pais == 'China' && pessoa.genero == 'F'
    const MenorSalario = (funcionario, funcionarioAtual) => funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual

    const chineses = funcionarios.filter(funcChinenesAndMulheres).reduce(MenorSalario)

    console.log(chineses)
})

// Desafio da Aula 124

// Encontrar na resposta dessa requisição, a mulher chinesa com o menos salario 

// 1 - Todo mundo que é da china
