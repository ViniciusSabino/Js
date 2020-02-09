// --------------------- Criando um objeto a partir de uma classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Vinícius");
p1.falar();

// ----------------------- Criando um objeto a partir de uma Factory

const criarPessoa = nome => {
  return { falar: () => console.log(`Meu Nome é ${nome}`) };
  // não é necessário acessar a variavél nome usando o this,
  // por que esse objeto tem ciencia do contexto léxico no qual ele foi declarado
  // portando o this não irá variar
};

const p2 = criarPessoa("Rocha");
p2.falar();
