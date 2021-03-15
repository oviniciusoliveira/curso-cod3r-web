// Exemplo de callback no browser
// document refere a sua página do browser, (DOM)
document.getElementsByTagName('body')[0].onclick = function (e) { 
    console.log('O evento ocorreu!')
}