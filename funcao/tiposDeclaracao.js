console.log(soma(3, 4)) // O interpretador do JS, inicia o carregamento pelas funções
// console.log(sub(3, 4)) Erro!
// console.log(mult(3, 4)) Erro!

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression: pouco usada
const mult = function mult (x, y) { // vantagem: hora de debuggar, aparece o nome da função no tracestack
    return x * y
}
console.log(mult(3, 4))
