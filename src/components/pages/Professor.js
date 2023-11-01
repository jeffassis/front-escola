import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './Professor.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import logoEscola from '../../assets/logoEscola.png'

export default function Professor() {
    return (
        <div className='new-professor-container'>
            <header>
                <img src={logoEscola} alt='Logo' />
                <span>Bem vindo, <strong>Jefferson</strong>!</span>
                <Link className='back-link' to="/professores">
                    <FiArrowLeft size={16} color='#251FC5' />
                    Lista de Professores
                </Link>
            </header>

            <div className='content'>
                <form>
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
                        text="Telefone"
                        name="telefone"
                        placeholder="Digite o telefone..."
                    />
                    <input type='date' />

                    <SubmitButton type='submit' text='Cadastrar' />
                </form>
            </div>
        </div>
    );
}