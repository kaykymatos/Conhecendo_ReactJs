import React from "react";

function Hello({ nome }) {
  function generateHello(anyName) {
    return `Olá ${anyName} tudo bem?`;
  }
  return <>{nome && <p>{generateHello(nome)}</p>}</>;
}

export default Hello;
