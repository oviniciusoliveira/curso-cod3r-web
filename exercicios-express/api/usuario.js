function salvar(req, res) {
  res.send("Usuario > Salvar");
}

function obter(req, res) {
    res.send('Usuário > Obter')
}

module.exports = { salvar, obter }