function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
             reject("Ocorreu um erro!")
        } else {
            resolve(valor)
        }
    })
} 

funcionarOuNao('Testando...', 0.4)
    .then(valor => `Valor: ${valor}`)
    .then(console.log)
    .then(v => consol.log(v), err => console.log(`Erro específico: ${err}`))
    .then(() => console.log("Quase Fim!"))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log("Fim!"))