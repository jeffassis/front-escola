import React, { useEffect, useState } from "react";
import styles from './Turmas.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import api from '../../components/services/api'

function Turmas() {
    // Recuperar token
    const token = localStorage.getItem('token');

    const [turmas, setTurmas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('turmas', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                page: 0,
                limit: 5,
                direction: 'asc'
            }
        }).then(response => {
            setTurmas(response.data.content)
        })
    }, []);

    async function editarTurma(id) {        
        try {
            navigate(`/turma/${id}`)
        } catch (error) {
            alert('Houve uma falha ao Editar!')
        }
    }

    async function deleteTurma(id) {
        try {
            await api.delete(`turmas/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setTurmas(turmas.filter(turma => turma.id !== id))
        } catch (error) {
            alert('Houve uma falha ao Excluir!')
        }
    }

    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Lista de Turmas</h1>
                <Link className={styles.button} to="/turma/0" >
                    <button type='button' >
                        Add Turma
                    </button>
                </Link>
            </div>
            <div>
                <table border={2} className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Turma</th>
                            <th>Série</th>
                            <th>Turno</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            turmas.map((turma, indice) => (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td>{turma.nome}</td>
                                    <td>{turma.serie}</td>
                                    <td>{turma.turno}</td>
                                    <td>{turma.ano}</td>
                                    <td>
                                        <button onClick={() => editarTurma(turma.id)} type="button">
                                            <FiEdit size={17} />
                                        </button>
                                        <button onClick={() => deleteTurma(turma.id)} type="button">
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
    )
}

export default Turmas;