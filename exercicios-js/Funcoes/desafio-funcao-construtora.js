// Função construtora responsável por instanciar novos objetos

function Pessoa(nome) {
  this.nome = nome;

  this.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new Pessoa("Vinicius");
p1.falar();

// Formar de criar objetos

// 1 - Criar a partir de uma Classe
// 2 - Criar a partir de uma Factory
// 3 - Criar a partir de uma Função Construtora
