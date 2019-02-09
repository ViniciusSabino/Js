// ---------------------------------------Funções Construtoras

function Produto(nome, preco, desconto) {

    // Atributo público
    this.nome = nome

    // Preco só será visivel usando essa função pública
    this.getPrecoComDesconto = () => preco * (1 - desconto)

}

// Instancias do objeto Produto
const p1 = new Produto('Caneta', 7.99, 1.00);
const p2 = new Produto('Caderno', 10, 2);


console.log(p2)


// ------------------------------------ Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

// ---------------------------------- Object.create

const filha = Object.create(null)
filha.nome = "Rayza"
console.log(filha)

// ----------------------- Função famosa que transforma JSON em um objeto

const fromJson = JSON.parse('{"info": "Sou um JSON"}');

console.log(fromJson.info) // Resultado = "Sou um JSON"