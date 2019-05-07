<p align="center">
  <img src="./JS.png" width="100">
</p>

# Código Limpo, versão JavaScript

Repositório criado com todo o conteúdo relacionado ao artigo "https://medium.com/trainingcenter/c%C3%B3digo-limpo-vers%C3%A3o-javascript-80adecafdbec"

## Summary

1. [Variáveis](#variaveis)
1. [Funções](#funcoes)

<a name="variaveis"></a>

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

<a name="funcoes"></a>

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

Remove códgo duplicado

Faça absolutamente seu melhor para evitar código duplicado. Código duplicado quer dizer que existe mais de um lugar onde você deverá alterar algo se precisar mudar alguma lógica.

Imagine que você é dono de um restaurante e você toma conta do seu estoque: todos os seus tomates, cebolas, alhos, temperos, etc. Se você tem multiplas listas onde guarda estas informações, então você terá que atualizar todas elas quando servir um prato que tenha tomates. Se você tivesse apenas uma lista, teria apenas um lugar para atualizar!

Frequentemente, você possui código duplicado porque você tem duas ou mais coisas levemente diferentes, que possuem muito em comum, mas suas diferenças lhe forçam a ter mais duas ou três funções que fazem muito das mesmas coisas. Remover código duplicado significa criar uma abstração que seja capaz de lidar com este conjunto de coisas diferentes com apenas uma função/módulo/classe.

Conseguir a abstração correta é crítico, por isso que você deveria seguir os princípios SOLID descritos na seção Classes. Abstrações ruins podem ser piores do que código duplicado, então tome cuidado! Dito isto, se você puder fazer uma boa abstração, faça-a! Não repita a si mesmo, caso contrário você se pegará atualizando muitos lugares toda vez que precisar mudar qualquer coisinha.

```javascript
// Bad

function showDeleporList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const expirience = developer.getExpirence();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      expirience,
      githubLink
    };
    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };
    render(data);
  });
}

// Good

function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const data = {
      expectedSalary,
      experience
    };
    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }
    render(data);
  });
}
```

Defina (set) objetos padrões com Object.assign

```javascript
// Bad

const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// Good

const menuConfig = {
  title: "Order"
  // Usuário não incluiu a chave 'body'
  buttonText: 'Send',
  cancellable: true
};

function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar'
    buttonText: 'Baz'
    cancellable: true

  }, config);

  // OU com REST/SPREAD Operador
  config = {
    ...config,
    title: 'Foo',
    body: 'Bar',
    cancellable: true
  }


  // Configuraçao agora é: {title: 'Order', body: 'Bar', buttonText: 'Send', callable: true}
}

createMenu(menuConfig);

```

Não use flags como parâmetros de funções

Flags falam para o seu usuário que sua função faz mais de uma coisa. Funções devem fazer apenas uma coisa. Divida suas funções se elas estão seguindo caminhos de código diferentes baseadas em um valor boleano.

```javascript
// Bad

function createFile(name, temp) {
  if (temp) {
    fs.createFile(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// Good

function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

Evite Efeitos Colaterais (parte 1)

Uma função produz um efeito colateral se ela faz alguma coisa que não seja receber um valor de entrada e retornar outro(s) valor(es). Um efeito colateral pode ser escrever em um arquivo, modificar uma variável global, ou acidentalmente transferir todo seu dinheiro para um estranho.

Agora, você precisa de efeitos colaterais ocasionalmente no seu programa. Como no exemplo anterior, você pode precisar escrever em um arquivo. O que você quer fazer é centralizar aonde está fazendo isto. Não tenha diversas funções e classes que escrevam para uma arquivo em particular. Tenha um serviço que faça isso. Um e apenas um.

O ponto principal é evitar armadilhas como compartilhar o estado entre objetos sem nenhuma estrutura, usando tipos de dados mutáveis que podem ser escritos por qualquer coisa, e não centralizando onde seu efeito colateral acontece. Se você conseguir fazer isto, você será muito mais feliz que a grande maioria dos outros programadores.

```javascript
// Bad

// Variável global referenciada pela função seguinte
// Se tivéssemos outra função que usa esse nome, então seria um vetor (array) e poderia quebrar seu código
let name = "Ryan McDermott";
function splitIntoFirstAndLastName() {
  name = name.split(" ");
}
splitIntoFirstAndLastName();
console.log(name); // ['Ryan', 'McDermott'];

// Good

function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const name = "Ryan McDermott";
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];
```

Evite Efeitos Colaterais (parte 2)

Em JavaScript, tipos primitivos são passados por valor e objetos/vetores são passados por referência. No caso de objetos e vetores, se sua função faz uma mudança em um vetor de um carrinho de compras, por exemplo, adicionando um item para ser comprado, então qualquer outra função que use o vetor cart também será afetada por essa adição. Isso pode ser ótimo, mas também pode ser ruim. Vamos imaginar uma situação ruim:

O usuário clica no botão “Comprar”, botão que invoca a função purchase que dispara uma série de requisições e manda o vetor cart para o servidor. Devido a uma conexão ruim de internet, a função purchase precisa fazer novamente a requisição. Agora, imagine que nesse meio tempo o usuário acidentalmente clique no botão Adicionar ao carrinho em um produto que ele não queria antes da requisição começar. Se isto acontecer e a requisição for enviada novamente, então a função purchase irá enviar acidentalmente o vetor com o novo produto adicionado porque existe uma referência para o vetor cart que a função addItemToCart modificou adicionando um produto indesejado.

Uma ótima solução seria que a função addCartToItem sempre clonasse o vetor cart, editasse-o, e então retornasse seu clone. Isso garante que nenhuma outra função que possua uma referência para o carrinho de compras seja afetada por qualquer mudança feita.

Duas ressalvas desta abordagem:

Podem haver casos onde você realmente quer mudar o objeto de entrada, mas quando você adota este tipo de programação, você vai descobrir que estes casos são bastante raros. A maioria das coisas podem ser refatoradas para não terem efeitos colaterais.
Clonar objetos grandes pode ser bastante caro em termos de desempenho. Com sorte, na prática isso não é um problema, porque existem ótimas bibliotecas que permitem que este tipo de programação seja rápida e não seja tão intensa no uso de memória quanto seria se você clonasse manualmente objetos e vetores.

```javascript
// Bad

const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// Good

const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
```
