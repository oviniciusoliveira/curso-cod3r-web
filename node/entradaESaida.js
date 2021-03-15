const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

//stdout : standard output
//stdin : standard input

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    // Evento quando algo é digitado e após pressionado enter
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}   