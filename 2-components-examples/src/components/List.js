import Item from "./Item.js";
function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item
          modelo="Modelo novo ai"
          nome="Algum nome de carro ou produto"
        />
      </ul>
    </>
  );
}
export default List;
