// com promise...
const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

/* let nomes = [];
// Callback Hell D:
getTurma("A").then((alunos) => {
    //  console.log(alunos[0].nome)
  nomes = nomes.concat(alunos.map((aluno) => `A: ${aluno.nome}`));
  getTurma("B").then((alunos) => {
    nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`));
    getTurma("C").then((alunos) => {
      nomes = nomes.concat(alunos.map((aluno) => `C: ${aluno.nome}`));
      console.log(nomes);
    });
  });
}); */

// Maneira mais inteligente do que callbacks aninhadas
// Quando todas as promises forem resolvidas, chamar a cadeia .then
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  // Todas as turmas em arrays separados
  // .then(x => console.log(x))

  .then((turmas) => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message))

  // Testando uma situação de erro
  getTurma("D").catch(e => console.log(e.message))  