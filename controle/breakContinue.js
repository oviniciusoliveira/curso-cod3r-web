const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // age em for, while e switch
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // age em for e while
    }
    console.log (`y = ${nums[y]}`)   
}

externo:  // Não usar rótulos por deixarem o código desorganizado. Utilizar outras formas
    for (a in nums) {   
        for (b in nums) {
            if (a == 2 && b == 3) {
                break externo
            }
            console.log(`Par = ${a},${b}`)
        }
    }
console.log('Fim!')
