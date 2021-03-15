const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//Procura direto no node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Procura por padrão dentro da pasta o arquivo index
const c = require('./pastaC')
console.log(c.ola2)

/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)  */