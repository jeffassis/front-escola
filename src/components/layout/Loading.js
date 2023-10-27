
import styles from './Loading.module.css'
import loading from '../../assets/loading.svg'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='logo' />
        </div>
    )
}

export default Loading;