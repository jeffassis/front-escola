import React, { useEffect, useState } from "react";
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Disciplina.module.css'
import api from '../../components/services/api'

function Disciplina() {
    // Recuperar token
    const token = localStorage.getItem('token');

    const [disciplinas, setDisciplinas] = useState([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        api.get('disciplinas', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                page: 0,
                limit: 5,
                direction: 'asc'
            }
        }).then(response => {
            setDisciplinas(response.data.content)
        })
    }, []);

    async function cadastrar(e) {
        e.preventDefault();
        const data = {
            nome,
        }
        try {
            await api.post('/disciplinas', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar!');
        }
    }

    return (
        <div>
            <div className={styles.Container}>
                <h1>Cadastro de Disciplina</h1>
                <form className={styles.form} onSubmit={cadastrar}>
                    <Input
                        type="text"
                        text="Disciplina"
                        name="nome"
                        placeholder="Digite a disciplina..."
                        handleOnChange={e => setNome(e.target.value)}
                        value={nome}
                    />
                    <SubmitButton type='submit' text='Cadastrar' />
                </form>
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Disciplina</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            disciplinas.map((disciplina, indice) => (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td>{disciplina.nome}</td>
                                    <td><button>Selecionar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Disciplina;