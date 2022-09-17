import style from './ImageTest.module.css';
function ImageTst({image, name}) {
    return (  <div>
        <h1 className={style.title_style}>Image Test</h1>
        <img className={style.image_style} src={image} alt={name} />
    </div>)
}

export default ImageTst;