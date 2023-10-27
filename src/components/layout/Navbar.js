import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'
import logo from '../../assets/logoEscola.png'

import Container from './Container'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/home">
                    <img src={logo} alt="Imagem" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/professores">Professores</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/professor">Professor</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}