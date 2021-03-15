// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            console.log(JSON.parse(resultado))
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
// Callback Hell D:
getTurma('A', alunos => {
/*     console.log(alunos[0].nome) */
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map( aluno => `B: ${aluno.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map ( aluno => `C: ${aluno.nome }`))
            console.log(nomes)
        })
    })
})