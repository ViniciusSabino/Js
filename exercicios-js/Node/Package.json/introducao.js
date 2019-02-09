// ------------------------- depencencies 

// exemplo 

// "axios": "^0.17.1" -> Indica que a dependencia não pode ser alterada para a versão 1 apenas para 0.{QualquerValor}.{QualquerValor}
// "axios": "~0.17.1" -> A dependencia pode ser atualizada até no máximo á 0.17.9 (No caso desse exemplo)
// "axios": "0.17.1" -> Indica que a dependencia irá permanecer na versão fixa 

// npm-install --save-dev axios@0.17.1 -E 

// npm-install -> Instalando uma dependencia 
// --save => Salva a dependencia no package.json 
// -dev => Indica que é uma dependencia apenas de desenvolvimento 
// axios@0.17.1 => Pacote que será instalado 
// -E => Irá baixar o pacote e irá salvar no package.json com a versão fixa


// Package.lock => Descreve de forma mais precisa, todos as dependencias que foram instaladas em seu projeto