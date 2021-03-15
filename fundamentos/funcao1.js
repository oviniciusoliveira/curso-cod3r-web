// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(5, 6, 7, 8, 9, 10)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 5))
console.log(soma(2))
console.log(soma())