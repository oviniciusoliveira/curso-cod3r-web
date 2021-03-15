// Não prático
/* const prod1 = {
    nome: 'Cama',
    preco: '1700'
}
const prod2 = {
    nome: 'Televisao',
    preco: '2000'
}
 */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())