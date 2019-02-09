const sequencia = {
  _valor: 1, // convenção (pretendido usar internamente dentro do objeto)

  get valor() {
    return this._valor++; // Pode ser realizada uma manipulação ou validação qualquer em cima desse atributo antes de retornalo
  },

  set valor(valor) {
    if (valor > this._valor) this._valor = valor; // Realizando uma validação antes de modificar o atributo interno
  }
};

console.log(sequencia.valor); // Resultado = 1

console.log(sequencia.valor); // Resultado = 2 (Passou pelo método GET e retornou o valor somando mais 1)

sequencia.valor = 100;

console.log(sequencia.valor); // Resultado = 100

console.log(sequencia.valor); // Resultado = 101

sequencia.valor = 20;

console.log(sequencia.valor);

console.log(sequencia.valor);
