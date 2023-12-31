import React, { useState, useEffect } from 'react';
import styles from './Professores.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import api from '../../components/services/api'

function Professores() {

    // Recuperar token
    const token = localStorage.getItem('token');

    const [professores, setProfessores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('professores', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setProfessores(response.data.content)
        })
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Lista de Professores</h1>
                <Link className={styles.button} to="/professor" >
                    <button type='button' >
                        Add Professor
                    </button>
                </Link>
            </div>
            <div>
                <table border={2} className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Professores</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            professores.map((professor, indice) => (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td>{professor.nome}</td>
                                    <td>{professor.email}</td>
                                    <td>{professor.telefone}</td>
                                    <td>
                                        <button
                                            type="button">
                                            <FiEdit size={17} />
                                        </button>
                                        <button
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

export default Professores;