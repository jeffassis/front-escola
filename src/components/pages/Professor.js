import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import styles from './Professor.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import logoEscola from '../../assets/logoEscola.png'

export default function Professor() {
    return (
        <div className={styles.Container}>
            <div className={styles.form}>
                <h1>Cadastrar Professores</h1>
                <Link className={styles.button} to="/professores" >
                    <button type='button' >
                        Lista de Professores
                    </button>
                </Link>
            </div>

            <div>
                <form className={styles.formulario_cadastro}>
                    <Input
                        type="text"
                        text="Nome"
                        name="nome"
                        placeholder="Digite o nome..."
                    />
                    <Input
                        type="text"
                        text="RG"
                        name="rg"
                        placeholder="Digite o rg..."
                    />
                    <Input
                        type="text"
                        text="CPF"
                        name="cpf"
                        placeholder="Digite o cpf..."
                    />
                    <Input
                        type="text"
                        text="Email"
                        name="email"
                        placeholder="Digite o email..."
                    />
                    <Input
                        type="text"
                        text="Telefone"
                        name="telefone"
                        placeholder="Digite o telefone..."
                    />
                    <div className={styles.combo_sangue}>
                        <label>Sangue:</label>
                        <select className={styles.sangue}>
                            <option>Selecione</option>
                            <option>Tipo A+</option>
                            <option>Tipo A-</option>
                            <option>Tipo B+</option>
                            <option>Tipo B-</option>
                        </select>
                    </div>

                    <Input
                        type="text"
                        text="Logradouro"
                        name="logradouro"
                        placeholder="Digite o logradouro..."
                    />
                    <Input
                        type="text"
                        text="CEP"
                        name="cep"
                        placeholder="Digite o cep..."
                    />
                    <Input
                        type="text"
                        text="Cidade"
                        name="cidade"
                        placeholder="Digite o cidade..."
                    />
                    <Input
                        type="text"
                        text="Bairro"
                        name="bairro"
                        placeholder="Digite o bairro..."
                    />

                    <div className={styles.combo_uf}>
                        <label>UF:</label>
                        <select className={styles.uf}>
                            <option>RJ</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </select>
                    </div>

                    <Input
                        type="text"
                        text="Numero"
                        name="numero"
                        placeholder="Digite o numero..."
                    />
                    <SubmitButton type='submit' text='Cadastrar' />
                </form>
            </div>
        </div>
    );
}