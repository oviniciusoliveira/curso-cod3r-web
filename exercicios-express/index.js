const express = require("express");
const app = express();
const saudacaoMiddleware = require('./saudacaoMiddleware')

app.use(saudacaoMiddleware('Belchior'))

/* use; all */

app.use((req, res, next) => {
  console.log("Chamada do Middleware Antes");
  next();
});

app.get("/opa", (req, res, next) => {
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

  next()
});

app.use("/opa", (req, res) => {
  console.log("Chamada do Middleware Depois");
});

app.listen(3000, (req, res) => {
  console.log(`Listening Port: 3000`);
});