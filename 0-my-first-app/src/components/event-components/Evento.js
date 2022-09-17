import Button from "./Button"

function Evento({frase}) {
    function meuEvento() {
      console.log(`Frase escolhida ${frase}`)
    }
  
    return (
      <div>
        <p>Clique para disparar o evento:</p>
        <Button event={meuEvento} text="Primeiro evento"/>
      </div>
    )
  }
  
  export default Evento