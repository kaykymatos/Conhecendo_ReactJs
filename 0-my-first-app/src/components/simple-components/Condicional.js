import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
  
    function enviarEmail() {
      setUserEmail(email)
    }
  
    function limparEmail() {
      setUserEmail('')
      document.getElementById("emailId").value = "";
    }
  
    return (
      <div>
        <h2>Cadastre seu email:</h2>
        <input
          type="email"
          placeholder="Insira seu e-mail..." id="emailId"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar e-mail</button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </div>
    )
  }

export default Condicional;
