import React, { useEffect, useState } from "react";
import styles from './Turmas.module.css'
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import api from '../../components/services/api'

function Turmas() {
    // Recuperar token
    const token = localStorage.getItem('token');

    const [turmas, setTurmas] = useState([]);

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

    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Lista de Turmas</h1>
                <Link className={styles.button} to="/turma" >
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
                                        <button><FiEdit size={17} /></button>
                                        <button><FiTrash2 size={17} /></button>
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