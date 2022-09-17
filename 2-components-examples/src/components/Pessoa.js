function Pessoa({ imageUrl, name, job, address }) {
  return (
    <div>
        <h1>Person</h1>
      <img src={imageUrl} alt={name} />
      <ul>
        <li>
          <label /> Name: {name}
        </li>
        <li>
          <label /> job: {job}
        </li>
        <li>
          <label /> Address: {address}
        </li>
      </ul>
    </div>
  );
}

export default Pessoa;
