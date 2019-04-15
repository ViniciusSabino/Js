// Callback => Chamar de Volta

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  //console.log(`${indice + 1}. ${nome}`);
}

// Ideia do Callback = você passar uma função como parametro para uma determinada função
// e quanto determinado evento acontecer dentro da função que tem o callback, esse callback ser chamado de volta (pode ser varias ou uma vez)

fabricantes.forEach(imprimir);
// 1. Mercedes
// 2. Audi
// 3. BMW

fabricantes.forEach(fabricante => console.log(fabricante)); // Retornar o valor em cada posição do array
// Mercedes
// Audi
// BMW

// Resumindo, para cada evento (iteracao feita pela função forEach)
// um evento foi chamado (callback = printar na tela o valor em cada posição do array)

/// ------------------------------------- EXEMPLO 2 de calbaack

const funcaoInicio = nome => idade => nacionalidade => {
  console.log("Teste");
  console.log(nome);
  console.log(idade);
  console.log(nacionalidade);

  const mostraTitulos = time => {
    if (time === "spfc")
      return {
        libertadores: 3,
        mundial: 3,
        brasileiro: 6
      };
    else return { libertadores: 0, mundial: 0, libertadores: 6 };
  };

  return mostraTitulos;
};

const f1 = funcaoInicio("Vinicius");

const f2 = f1(21);

const f3 = f2("Brasileiro");

const f4 = f3("spfc");

console.log(f4);

/**
 *  Chamo a funcaoInicio passando o parametro 1 o retorno deverá ser uma nova função onde será utilizado o parametro 2
 *  e novamente o Retorno será uma função mas dessa vez utilizando o parametro 3
 */
