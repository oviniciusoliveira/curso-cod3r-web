const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
console.log(caminho)

// Síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
    
// Assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Por conta de não ser arquivo .js
// É preciso especificar a extensão
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da Pasta...')
    console.log(arquivos)
})