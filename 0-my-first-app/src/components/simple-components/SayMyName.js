import styles from './SayMyName.module.css'

function SayMyName(props) {
    return(
        <div className={styles.bg_dark}>
            <p className={styles.bg_dark}>Olá {props.nome} tudo bem?</p>
        </div>
    )
}
export default SayMyName