import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logoEscola.png'

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

            navigate('/professores');
        } catch (error) {
            alert("Falha ao Logar!! Tente novamente!");
        }
    };

    return (
        <div className='login-container'>
            <section className='form'>
                <img src={logoImage} alt='logoEscola' />
                <form onSubmit={efetuarLogin}>
                    <h1> Login... </h1>
                    <input
                        placeholder='Username'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input
                        type='password' placeholder='Password'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className='button' type='submit'>Login</button>
                </form>
            </section>
        </div>
    );
}