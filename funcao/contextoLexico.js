const valor = 'Global'

function minhaFuncao() { // A função carrega consigo o contexto no qual ela foi declarada
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()