import React from "react";
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Disciplina.module.css'

function Disciplina() {
    return (
        <div>
            <div className={styles.Container}>
                <h1>Cadastro de Disciplina</h1>
                <form className={styles.form}>
                    <Input
                        type="text"
                        text="Disciplina"
                        name="cadastrar"
                        placeholder="Digite a disciplina..."
                    />
                    <SubmitButton type='submit' text='Cadastrar' />
                </form>
            </div>
        </div>
    );
}

export default Disciplina;