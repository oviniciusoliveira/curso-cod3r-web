console.log(typeof Promise)     

function primeiroElemento(array) {
    return array[0]
}

const primeiraLetra = string => string[0]

let p = new Promise(function(res) {
    res(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    // .then(valor => console.log(v))
    .then(console.log)