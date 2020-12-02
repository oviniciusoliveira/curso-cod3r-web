import React from "react";
import ReactDOM from "react-dom";

import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho"

ReactDOM.render(
  <div>
    <Pai nome="Antonio" sobrenome="Belchior">
        <Filho nome="Pedro" />
        <Filho nome="Carlos" />
        <Filho nome="Eduarda" />
    </Pai>
  </div>,
  document.getElementById("root")
);
