import React from "react";

function YourName({ setNome }) {
  return (
    <div>
      <h1>Your Name</h1>
      <p>Digite seu nome</p>
      <input
        type="text"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}

export default YourName;
