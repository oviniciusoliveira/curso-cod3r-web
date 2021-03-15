const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // Mulher chinesa com menor salário ?  
    const chinesaMenorSalario = funcionarios
    .filter(chineses)
    .filter(feminino)
    .reduce(menorSalario)

    console.log(chinesaMenorSalario)
})

const chineses = funcionario => funcionario.pais === 'China'
const feminino = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}