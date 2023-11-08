import React, { useState } from 'react';
import styles from './Alunos.module.css'
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi'

function Alunos() {
    // Recuperar token
    const token = localStorage.getItem('token');

    const [alunos, setAlunos] = useState([]);

    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Lista de Alunos</h1>
                <Link className={styles.button} to="/aluno" >
                    <button type='button' >
                        Add Aluno
                    </button>
                </Link>
            </div>
            <div>
                <table border={2} className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Alunos</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alunos.map((aluno, indice) => (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.telefone}</td>
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

export default Alunos;