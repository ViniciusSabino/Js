// Objetos => Coleção dinamica de pares chave/valor

const produto = {} // Criando um novo objeto
produto.nome = 'Cadeira' // Adicionando um atributo ao objeto
produto.preco = 2.10

console.log(produto.nome) // Acessando o valor do atributo

delete produto.preco // Deletando um atributo de um objeto

console.log(produto) // Resultado = { nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    dono: {
        nome: 'Vinicius',
        idade: 23,
        endereco: {
            rua: 'Tereza Cristina'
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 24
    },
    {
        nome: 'Pedro',
        idade: 30
    }]
}

carro.condutores.push({ nome: "Joaquim", idade: 10 })

console.log(carro)

console.log(carro.dono.nome); // Notação Ponto (Importante quandno você já sabe o nome do atributo)

console.log(carro['dono']['nome']); // Notação Colchete

delete carro.dono

console.log(carro);

