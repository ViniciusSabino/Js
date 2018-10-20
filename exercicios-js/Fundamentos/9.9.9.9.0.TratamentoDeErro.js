function imprimirNomeGritado(obj) {
    try {

        console.log(obj.name.toUpperCase() + '!!!!')
    }
    catch (e) {
        tratarErro(e)
    }
    finally {
        console.log("Vou executar independente se deu erro ou não!")
    }
}

function tratarErro(erro) {
    throw new Error('... Erro!')
}

const obj = { name: 'Viniciussssss' }

imprimirNomeGritado(obj);


// try = (Tentar) {} => Dentro do bloco do try, você implementa um código que pode ocasionar em um erro na aplicação

// catch = {} => Dentro do bloco do cath, você pode implementar um tratamento caso aconteça um erro no bloco do try

// finally = {} => O bloco do finally sempre será executado, independente se ocorreu erro ou não 

// parametro e no catch => referece ao erro que foi capturado, o erro possui alguns atributos

// Throw => é o gatilho  que dispara a exceção, ou seja, ela irá lançar a exceção