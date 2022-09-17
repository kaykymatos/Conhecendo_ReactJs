import styles from "./Form.module.css";
import React, { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`O usuário foi cadastrado com sucesso:
        Nome: ${name}
        Senha: ${password}`)
        
    console.log("Uusário cadastrado")
  }
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className={styles.alignCenter}>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
export default Form;
