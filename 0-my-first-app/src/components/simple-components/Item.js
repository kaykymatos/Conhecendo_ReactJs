import PropTypes from "prop-types";

function Item({ marca, modelo, nome, ano }) {
  return (
    <>
      <li>Nome: {nome}</li>
      <li>Marca: {marca}</li>
      <li>Modelo: {modelo}</li>
      <li>Ano: {ano}</li>
    </>
  );
}
Item.propTypes = {
  nome: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
};
Item.defaultProps = {
  marca: "Nao informada",
  ano: 1000,
};
export default Item;
