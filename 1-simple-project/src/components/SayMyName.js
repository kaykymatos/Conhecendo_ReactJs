import style from './SayMyName.module.css';
function SayMyName({ name }) {
  return (
    <div>
      <h1 className={style.title_style}>Say My Name:</h1>
      <p className={style.text_style}>Hello, how are you {name}?</p>
    </div>
  );
}

export default SayMyName;
