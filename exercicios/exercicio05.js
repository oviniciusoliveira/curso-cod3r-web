function formatarDecimal (decimal) {
    return (`R$${decimal.toFixed(2).toString().replace('.', ',')}`)
}
console.log(formatarDecimal(3.578))
