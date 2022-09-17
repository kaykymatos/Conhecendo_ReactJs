import Worlds from './Worlds'
import styles from './SayMyName.module.css'
function HelloWorld(){
return (
    <div className={styles.bg_dark}>
        <Worlds/>
        <h1>HelloWorld</h1>
        This is a title of this page
    </div>
)
}
export default HelloWorld