// Filter => Gerar um novo array com base em um determinado filtro

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Celular', preco: 4499, fragil: true },
    { nome: 'Carro', preco: 52499, fragil: false },
    { nome: 'Caderno', preco: 20, fragil: true },
    { nome: 'Lampada', preco: 11, fragil: true },
    { nome: 'Mesa', preco: 120, fragil: false },
    { nome: 'Cadeira', preco: 99, fragil: false },
    { nome: 'Video Game', preco: 1999, fragil: true },
    { nome: 'Mouse', preco: 30, fragil: true },
    { nome: 'Teclado', preco: 40, fragil: true },
]

// Resultado é um novo array onde todos os produtos tem o atributo fragil igual á false
console.log(produtos.filter(produto => !produto.fragil))

// Resultado é um novo array onde todos os produtos tem o atributo nome igual á 'Celular'
console.log(produtos.filter(produto => produto.nome == 'Celular'))

