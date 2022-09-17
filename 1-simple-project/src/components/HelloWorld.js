import style from "./HelloWorld.module.css";
function HelloWorld() {
  return (
    <div>
      <h1 className={style.title_style}>Hello:</h1>
      <p className={style.text_style}>Hello World</p>
    </div>
  );
}

export default HelloWorld;
