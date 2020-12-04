import React from "react";
import Main from "../template/Main";

const home = (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo Projeto do Capítulo de React"
  >
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <div className="mb-4">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React.
    </div>
  </Main>
);

export default home;
