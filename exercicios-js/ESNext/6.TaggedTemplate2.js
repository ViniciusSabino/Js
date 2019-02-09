// Tagged Template 2

const nome = "Vinícius";
const idade = 23;
const cidade = "Hortolândia";

function exemplo(template, ...values) {
  console.log(template); // [ 'Olâ meu nome é ', ' tenho ', ' anos e moro em ', '!' ] = array com 3 strings
  console.log(...values); // Vinícius 23 Hortolândia

  return template.reduce((acumulador, valorAtual, indiceAtual) => {
    console.log(`iteração ${indiceAtual}`);
    console.log(`acumulador = ${acumulador}`);
    console.log(`valor do array = ${values[indiceAtual - 1]}`);
    console.log(`valorAtual = ${valorAtual}`);
    console.log(`___________________________________`);
    return `${acumulador}
     ${values[indiceAtual - 1]}
      ${valorAtual}`; // Retorna o valor que será o proximo valor para o acumulador
  });
}

// Reduce Iterações

// iteracao 1
// acumulador = Olâ meu nome é (Primeiro item do array que está usando o reduce)
// valor do array = Vinicius (com base no indice atual)
// valorAtual = tenho (o valor é o proximo valor depois do primeiro item do acumulador)

// iteracao 2
// acumulador = Olâ meu nome é Vinicius tenho
// valor do array = 23
// valor atual = anos e moro em

// iteração 3
// acumulador = Olâ meu nome é VInicius tenho 23 anos e moro em
// valor do array = Hortolandia
// valor atual = !

const frase = exemplo`Olâ meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}!`;

// Reduce

// parametro 1 - a string que irá acumular formando a frase, irá ficar concatenando sempre
// parametro 2 - parte que o reduce irá estar trabalhando naquele momento
// parametro 3 - uma váriavel contadora
