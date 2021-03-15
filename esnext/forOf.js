// for in intera em cima de indices
// for of intera em cima de valores

for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let indice in assuntosEcma) {
    console.log(indice)
}
for (let assunto of assuntosEcma) {
    console.log(assunto)
}
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
for (let [chave, valor] of assuntosMap.entries()) { // Maneira Explícita
    console.log(chave, valor)
}
for (let [chave, valor] of assuntosMap) {
    console.log(chave, valor)
}
const listaSet = new Set(['a', 'b', 'c'])
for (let letra of listaSet) {
    console.log(letra)
}