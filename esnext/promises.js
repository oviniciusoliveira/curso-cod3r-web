function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, 'outroParametro')
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then((frase, outroParametro) => {
        console.log(outroParametro) // resolve retorna apenas 1 parâmetro
        return frase.concat('?!?!')
    })
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log('Deu erro. ' + erro ))

console.log('Imprimir assim que possível!')