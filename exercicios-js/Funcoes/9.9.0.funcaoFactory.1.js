// Função Factory = Função que retorna um objeto (Fabrica de instanciar um novo objeto)

// Factory simples
function criarPessoa() {
  return {
    nome: "Vinicius",
    sobrenome: "Rocha"
  };
}

console.log(criarPessoa());
