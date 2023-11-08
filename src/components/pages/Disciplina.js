import React, { useEffect, useState } from "react";

import styles from './Disciplina.module.css'
import api from '../../components/services/api'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'

function Disciplina() {
    // Recuperar token
    const token = localStorage.getItem('token');

    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');

    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        api.get('disciplinas', {
            headers: {
                Authorization: `Bearer ${token}`
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

    async function alterar(e) {
        e.preventDefault();
        const data = {
            nome,
        }
        try {
            data.id = id;
            await api.put('/disciplinas', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Atualizado com sucesso!');
            window.location.reload(true);
        } catch (error) {
            alert('Erro ao atualizar!');
        }
    }

    async function editar(id) {
        try {
            const response = await api.get(`/disciplinas/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setId(response.data.id);
            setNome(response.data.nome);
            setBtnCadastrar(false);
        } catch (err) {
            alert('Error ao editar disciplina!');
        }
    }

    async function deleteDisciplina(id) {
        try {
            await api.delete(`disciplinas/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setDisciplinas(disciplinas.filter(disciplina => disciplina.id !== id))
            alert('Excluido com');
            window.location.reload(true);
        } catch (error) {
            alert('Houve uma falha ao Excluir!')
        }
    }

    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Lista de Disciplina</h1>
                <form onSubmit={btnCadastrar === true ? cadastrar : alterar}>
                    <Input
                        type="text"
                        text="Disciplina"
                        name="nome"
                        placeholder="Digite a disciplina..."
                        handleOnChange={e => setNome(e.target.value)}
                        value={nome}
                    />
                    {
                        btnCadastrar
                            ?
                            <SubmitButton type='submit' text='Cadastrar' />
                            :
                            <SubmitButton type='submit' text='Alterar' />
                    }
                </form>
            </div>
            <div>
                <table border={2} className={styles.table}>
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
                                    <td>
                                        <button onClick={() => editar(disciplina.id)}
                                            type="button">
                                            <FiCheckSquare size={17} />
                                        </button>
                                        <button onClick={() => deleteDisciplina(disciplina.id)}
                                            type="button">
                                            <FiTrash2 size={17} />
                                        </button>
                                    </td>
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