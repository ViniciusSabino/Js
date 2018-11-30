Principais comandos do NPM

**Npm init** => exibe um miniquestionario para auxiliar na criação e descrição do package.json em seu projeto.

**Npm install nome_do_modulo** => instala um modulo em seu projeto

**Npm install -g nome_do_modulo** => Instala um modulo global

**npm install nome_do_modulo --save** => Instala o módulo e adiciona-o no arquivo package.json, dentro do atributo "dependencies"

**npm install nome_do_modulo --save-dev** =>Instala o modulo e adiciona-o no arquivo package.json, dentro do atributo "devDependencies"

**npm list** => Lista todos os módulos que foram instalados em seu projeto

**npm list -g** => Lista todos os módulos globais que foram instalados

**npm remove nome_do_modulo** => Desinstala um modulo do projeto

**npm remove -g nome-do_modulo** => Desinstala um modulo global

**npm remove nome_do_modulo --save** => Desinstala um modulo do projeto, removendo também do atributo "dependencies" do package.json

**npm remove nome_do_modulo --save-dev** => Desinstala um modulo do projeto, removendo também do atributo "devDependencies" do package.json

**npm update nome_do_modulo** => Atualiza a versão de um modulo do projeto

**npm update -g nome_do_modulo** => Atualiza a versão de um modulo global

**npm adduser nome_do_usuario** => Cria um usuário no site https://npmjs.org

**npm whoami** => exibe detalhes do seu perfil público NPM do usuário (é necessário criar um usuário utilizando o comando anterior)

**npm publish** => publica um módulo no https://npmjs.org (É necessário ter uma conta ativa primeiro)

**npm help** => Exibe detalhes de todos os comandos
