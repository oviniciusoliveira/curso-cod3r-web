let dobro = function (a) {
    return 2 * a
}

// Função arrow sempre é uma função anônima
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui apenas um parâmetro (pode ser ignorado)
console.log(ola())