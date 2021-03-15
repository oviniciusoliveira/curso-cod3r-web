const a = 1
const b = 2
const c = 3


const objeto1 = { a: a, b: b, c: c } // Caso queira efetuar mudança
// Versão nova do Objeto1
const objeto2 = { a, b, c } // Caso queira apenas atribuir
console.log(objeto1, objeto2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const objeto3 = {}
objeto3[nomeAtributo] = valorAtributo
console.log(objeto3)

// Versão nova do Objeto3
const objeto4 = {[nomeAtributo]: valorAtributo}
console.log(objeto4)

const objeto5 = {
    funcao1: function() {
        // ...
    },
    // Versão nova de declaracao de funcao no objetoda ES6(2015)
    funcao2() {
        // ...
    }
}

console.log(objeto5)