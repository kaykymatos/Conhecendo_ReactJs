function Lista({ itens }) {
  return (
    <>
      <h3>Minha lista</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p> Não tem nada na lista</p>
      )}
    </>
  );
}

export default Lista;
