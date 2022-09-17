function Pessoa({nome,urlFoto,idade,profissao}) {
  return (
    <div>
      <img src={urlFoto} alt={nome}></img>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
}
export default Pessoa;
