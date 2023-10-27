import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'

import './Professores.module.css'

import logoEscola from '../../assets/logoEscola.png'

export default function Professores() {
    return (
        <div className='professor-container'>
            <header>
                <img src={logoEscola} alt='Logo' />
                <span>Bem vindo, <strong>Jefferson</strong>!</span>
                <Link className='button' to="/professor">Add Professor</Link>
                <button type='button'>
                    <FiPower size={18} color='#251FC5' />
                </button>
            </header>
            <section className='form'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}