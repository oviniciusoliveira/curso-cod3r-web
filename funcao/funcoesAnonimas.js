const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa!')
    },
    falar2() {
        console.log('Eba!')
    }
}

pessoa.falar()
pessoa.falar2()

// Testando Arrow Function
const olamundo = _ => {
    console.log(`Hello World, ${_}!`)
}

olamundo('Vinícius')
