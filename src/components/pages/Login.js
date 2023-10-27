import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import api from '../../components/services/api'

import logoImage from '../../assets/logoEscola.png'
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

export default function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function efetuarLogin(e) {
        e.preventDefault();
        const data = {
            login,
            senha
        };

        try {
            const response = await api.post('login', data);
            localStorage.setItem('login', login);
            localStorage.setItem('token', response.data.token);

            navigate('/home');
        } catch (error) {
            alert("Falha ao Logar!! Tente novamente!");
        }
    }

    return (
        <div className={styles.login_container}>
            <section className={styles.form}>
                <img src={logoImage} alt='logoEscola' />
                <form onSubmit={efetuarLogin}>
                    <Input
                        type="text"
                        text="Nome usuário"
                        name="login"
                        placeholder="Digite o login..."
                        handleOnChange={e => setLogin(e.target.value)}
                        value={login}
                    />
                    <Input
                        type="password"
                        text="Password"
                        name="senha"
                        placeholder="Digite a senha..."
                        handleOnChange={e => setSenha(e.target.value)}
                        value={senha}
                    />

                    <SubmitButton type='submit' text='Login' />
                </form>
            </section>
        </div>
    );
}
