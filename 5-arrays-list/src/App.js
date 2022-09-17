import './App.css';
import Lista from './components/Lista';

function App() {
  const listaItens = ['Iten 1','Iten 2','Iten 3','Iten 4','Iten 5']
  return (
    <div className="App">
      <header className="App-header">
       <Lista itens={[]}/>
       <Lista itens={listaItens}/>
      </header>
    </div>
  );
}

export default App;
