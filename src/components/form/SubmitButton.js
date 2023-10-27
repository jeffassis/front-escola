import styles from './SubmitButton.module.css'

function SubmitButton({ text, type }) {
    return (
        <div>
            <button
                type={type}
                className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton;