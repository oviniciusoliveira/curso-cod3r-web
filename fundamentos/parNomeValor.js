// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vinicius',
    idade: 21,
    peso: 60,
    endereco: {
        logradouro: 'Rua General Porfírio da Paz',
        numero: 1350
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)