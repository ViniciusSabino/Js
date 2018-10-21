// middleware pattens (chain of responsability) - (cadeia de responsabilidades)

// ctx => (contexto) -> Objeto que vai ser passado de um passo para outro / de um middleware para outro
// next => função que cando chamado irá disparar o proximo passo na cadeia de responsabilidades 
const passo1 = (ctx, next) => { // Middleware 1
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => { // Middleware 1
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' // Middleware 1

// [...middlewares] -> Indica que a função recebera um número variado de parametros e dentro da função tudo estará dentro de um array
const exec = (ctx, ...middlewares) => {
    const execPassos = indice => {
        middlewares && indice < middlewares.length
            && middlewares[indice](ctx, () => execPassos(indice + 1))

    }
    execPassos(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)