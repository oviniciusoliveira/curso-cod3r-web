const express = require("express");
const app = express();
const saudacaoMiddleware = require("./saudacaoMiddleware");

app.use(saudacaoMiddleware("Belchior"));

/* use; all */

app.use((req, res, next) => {
  console.log("Chamada do Middleware Antes");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Método GET: Cliente relatório: completo = ${req.query.completo}; ano = ${req.query.ano}`
  );
});

// app.post("/clientes/relatorio", (req, res) => {
//   res.send(
//     `Método POST: Cliente relatório: completo = ${req.query.completo}; ano = ${req.query.ano}`
//   );
// });

// Método Manual (Sem BodyParser)
app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })
    req.on('end', function() {
        res.send(corpo)
    })
})

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/urlteste", (req, res, next) => {
  console.log("Chamada do Middleware Durante");
  // res.send("<h1>Estou bem!</h1><br></br><h2>Tipo é HTML!</h2>")

  // res.json({
  //     name: 'iPad 32gb',
  //     price: 1899.00,
  //     discount: 0.12
  // })

  res.json({
    data: [
      { id: 7, nome: "Ana", position: 1 },
      { id: 34, nome: "Bia", position: 2 },
      { id: 73, nome: "Carlos", position: 3 },
    ],
    count: 3,
    skip: 0,
    limit: 3,
    status: 200,
  });

  next();
});

app.use("/urlteste", (req, res) => {
  console.log("Chamada do Middleware Depois");
});

app.listen(3000, (req, res) => {
  console.log(`Listening Port: 3000`);
});
