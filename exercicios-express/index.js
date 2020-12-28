const express = require("express");
const app = express();

/* use; all */

app.get("/opa", (req, res) => {
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
    status: 200
  });
});

app.listen(3000, () => {
  console.log(`Listening Port: 3000`);
});
