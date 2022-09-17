import "./App.css";
import Pessoa from "./components/Pessoa";
import Item from "./components/Item";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pessoa
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHsNEJWrCMTrzXaY9ydfo2SG9q_sg870zMw&usqp=CAU"
          name="Jhon"
          job="Developer"
          address="Street one"
        />
        <Item marca="teste marca" modelo="N/A" nome="Fiesta" ano={1000} />
        <List/>
      </header>
    </div>
  );
}

export default App;
