import "./App.css";
import Lista from "./components/array-components/Lista";


function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  return (
    <div className="App">
      <header className="App-header">
        <h1>Renderização de listas</h1>
        <Lista itens={meusItens} />
        <Lista itens={[]} />
      </header>

    </div>
  );
}

export default App;
