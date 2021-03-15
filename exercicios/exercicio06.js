function jurosSimples (capitalInicial, taxaJuros, tempo) {
    montante = capitalInicial + (capitalInicial * taxaJuros * tempo)
    return montante
}

function jurosCompostos (capitalInicial, taxaJuros, tempo) {
    montante = capitalInicial * (1 + taxaJuros) ** tempo
    return montante
}

console.log(jurosSimples(1000, 0.5, 10))
console.log(jurosCompostos(1000, 0.5, 10))
