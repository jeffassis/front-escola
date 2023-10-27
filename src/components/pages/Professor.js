import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './Professor.module.css';

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
                    <input placeholder='Nome...' />
                    <input placeholder='Rg...' />
                    <input type='date' />
                    <input placeholder='Telefone...' />

                    <button className='button' type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
}