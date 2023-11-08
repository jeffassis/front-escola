import React, { useState } from "react";
import styles from './Turma.module.css'
import { Link } from 'react-router-dom';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton'
import api from '../../components/services/api'
import { useNavigate } from 'react-router-dom';


function Turma() {
    // Recuperar token
    const token = localStorage.getItem('token');

   // const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [serie, setSerie] = useState('');
    const [turno, setTurno] = useState('');
    const [ano, setAno] = useState('');

    const navigate = useNavigate();

    async function cadastrarTurma(e) {
        e.preventDefault();

        const data = {
            nome,
            serie,
            turno,
            ano
        };

        try {
            await api.post('/turmas', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/turmas');
        } catch (error) {
            alert('Error ao cadastrar!')
        }
    }


    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Cadastrar Turma</h1>
                <Link className={styles.button} to="/turmas" >
                    <button type='button' >
                        Lista de Turma
                    </button>
                </Link>
            </div>
            <div>
                <form className={styles.formulario_cadastro} onSubmit={cadastrarTurma}>
                    <Input
                        type="text"
                        text="Turma"
                        name="turma"
                        placeholder="Digite a turma..."
                        handleOnChange={e => setNome(e.target.value)}
                        value={nome}
                    />
                    <Input
                        type="text"
                        text="Série"
                        name="serie"
                        placeholder="Digite a serie..."
                        handleOnChange={e => setSerie(e.target.value)}
                        value={serie}
                    />

                    <div className={styles.combo_ano}>
                        <label>Ano:</label>
                        <select className={styles.ano} value={ano} onChange={e => setAno(e.target.value)}>
                            <option>Selecione</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                        </select>
                    </div>

                    <div className={styles.combo_turno}>
                        <label>Turno:</label>
                        <select className={styles.turno} value={turno} onChange={e => setTurno(e.target.value)}>
                            <option>Selecione</option>
                            <option>MANHÃ</option>
                            <option>TARDE</option>
                        </select>
                    </div>

                    <SubmitButton type='submit' text='Cadastrar' />
                </form>
            </div>
        </div>
    )
}

export default Turma;