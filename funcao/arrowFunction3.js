let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // True - Contexto do Node.js
comparaComThis(this) // False

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // False
comparaComThis(obj) // True

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // False
comparaComThisArrow(module.exports) // True
comparaComThisArrow(this) // True

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // False
comparaComThisArrow(module.exports) // True