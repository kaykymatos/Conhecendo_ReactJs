import PropTypes from "prop-types";

function Item({ nome, marca, modelo, ano }) {
  return (
    <div>
      <h1>Item</h1>
      <li>Nome: {nome}</li>
      <li>Marca: {marca}</li>
      <li>Modelo: {modelo}</li>
      <li>Ano: {ano}</li>
    </div>
  );
}

Item.propTypes = {
  nome: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
};
Item.defaultProps = {
  ano: 1000,
};

export default Item;
