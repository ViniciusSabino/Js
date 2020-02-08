const nome = "VInicius";
const idade = 23;

// Modo comum de fazer
const pessoa = {
  nome: nome,
  idade: idade,

  hello: () => {
    console.log(`Olâ meu nome é ${this.nome}`);
  }
};

pessoa.hello();

// usando Shorthand Properties para propriedades e também para funções/métodos
const pessoa2 = {
  nome,
  idade,
  
  hello() {
    console.log(`Olâ meu nome é ${this.nome}`);
  }
};

pessoa2.hello();

// Se a constante tem o mesmo valor da propriedade do objeto então posso 
// colocar dessa forma
