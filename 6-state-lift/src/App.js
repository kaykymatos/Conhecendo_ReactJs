import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import YourName from "./components/YourName";

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <YourName setNome={setNome} />
        <Hello nome={nome} />
        {nome}
      </header>
    </div>
  );
}

export default App;
