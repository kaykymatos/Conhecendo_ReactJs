import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import ImageTst from "./components/ImageTest";

function App() {
  return (
    <div className="App">      
      <body className="App-header">
      
        <HelloWorld />
        <SayMyName name="João" />
        <ImageTst
          name="Imagem teste"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHsNEJWrCMTrzXaY9ydfo2SG9q_sg870zMw&usqp=CAU"
        />
      </body>
    </div>
  );
}

export default App;
