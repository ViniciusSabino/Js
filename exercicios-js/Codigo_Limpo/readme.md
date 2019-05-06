> **_ Variáveis _**

Use nome de variavéis que tenham significado e sejam pronunciáveis

```javascript
// Bad
const yyyymmmmdstr = moment().format("YYYY/MM/DD");

// Good
const currentDate = moment().format("YYYY/MM/DD");
```

Use o mesmo vocabulário para o mesmo tipo de variável

```javascript
// Bad
getUserInfo();
getClientData();
getCustomerRecord();

// Good
getUser();
```

Use nomes pesquisáveis

Nós iremos ler mais código que escrever. É importante que o código que escrevemos seja legível e pesquisável. Não dando nomes em variáveis que sejam significativos para entender nosso programa, machucamos nossos leitores. Torne seus nomes pesquisáveis. Ferramentas como buddy.js e ESLint podem ajudar a identificar constantes sem nome.

```javascript
// Bad
// Para que diabos serve 86400000?
setTimeout(blastOff, 86400000);

// Good
// Declare-as como `const` global em letras maiúsculas.
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

Use variáveis explicativas

```javascript
// Bad
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

// Good
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

Eveite Mapeamento Mental

Explicito é melhor que implícito

```javascript
// Bad
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Espera, para que serve o `l` mesmo?
  dispatch(l);
});

// Good
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

Não adicione contextos desnecessários

Se o nome de sua classe/objeto já lhe diz alguma coisa, não as repita nos nomes de suas variáveis

```javascript
// Bad
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};
function paintCar(car) {
  car.carColor = "Red";
}

// Good
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
function paintCar(car) {
  car.color = "Red";
}
```

Use argumentos padrões ao invés de curto circuitar ou usar condicionais

Argumentos padrões são geralmente mais limpos do que curto circuitos.
Esteja ciente que se você usá-los, sua função irá fornecer valores padrões para argumentos udefined. Outros valores "falsos" como '', "", false, null,
0, e NaN, não serão substituídos por valores padrões.

```javascript
// Bad
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}

// Good
function createMicrobrewery(breweryName = "Hipster Brew Co.") {
  // ...
}
```

> **_ Funções _**

Argumentos de funções (idealmente 2 ou menos)

Limitar a quantidade de parâmetros de uma função é incrivelmente importante porque torna mais fácil testá-la. Ter mais que três leva a uma explosão combinatória onde você tem que testar muitos casos diferentes com cada argumento separadamente.

Um ou dois argumentos é o caso ideal, e três devem ser evitados se possível. Qualquer coisa a mais que isso deve ser consolidada. Geralmente, se você tem mais que dois argumentos então sua função está tentando fazer muitas coisas. Nos casos em que não está, na maioria das vezes um objeto é suficiente como argumento.

Já que JavaScript lhe permite criar objetos instantaneamente, sem ter que escrever muita coisa, você pode usar um objeto se você se pegar precisando usar muitos argumentos.

Para tornar mais óbvio quais as propriedades que as funções esperam, você pode usar a sintaxe de desestruturação (destructuring) do ES2015/ES6. Ela possui algumas vantagens:

Quando alguém olha para a assinatura de uma função, fica imediatamente claro quais propriedades são usadas.
Desestruturação também clona os valores primitivos específicos do objeto passado como argumento para a função. Isso pode ajudar a evitar efeitos colaterais. Nota: objetos e vetores que são desestruturados a partir do objeto passado por argumento NÃO são clonados.
Linters podem te alertar sobre propriedades não utilizadas, o que seria impossível sem usar desestruturação.

```javascript
// Bad
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

// Good
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}
createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

Funções devem fazer uma coisa

Essa é de longe a regra mais importante em engenharia de software. Quando funções fazem mais que uma coisa, elas se tornam difíceis de serem compostas, testadas e raciocinadas. Quando você pode isolar uma função para realizar apenas uma ação, elas podem ser refatoradas facilmente e seu código ficará muito mais limpo. Se você não levar mais nada desse guia além disso, você já estará na frente de muitos desenvolvedores.

```javascript
// Bad
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// Good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}
function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

Nomes de funções devem dizer o que elas fazem

```javascript
// Bad
function addToDate(date, month) {
  // ...
}
const date = new Date();
// É difícil dizer pelo nome da função o que é adicionado
addToDate(date, 1);

// Good
function addMonthToDate(month, date) {
  // ...
}
const date = new Date();
addMonthToDate(1, date);
```

Funções devem ter apenas um nível de abstração

Quando você tem mais de um nível de abstração sua função provavelmente esta fazendo coisas demais. Dividir suas funções leva a reutilização e testes mais fáceis.

```javascript
// Bad
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];
  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      // ...
    });
  });
  const ast = [];
  tokens.forEach(token => {
    // lex...
  });
  ast.forEach(node => {
    // parse...
  });
}

// Good
function tokenize(code) {
  const REGEXES = [
    // ...
  ];
  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push(/* ... */);
    });
  });
  return tokens;
}
function lexer(tokens) {
  const ast = [];
  tokens.forEach(token => {
    ast.push(/* ... */);
  });
  return ast;
}
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach(node => {
    // parse...
  });
}
```
