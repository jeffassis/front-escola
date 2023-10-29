import React from 'react';
import styles from './Home.module.css';
import Fundo from '../../assets/img-1.jpg'

export default function Home() {
    return (
        <>
            <div className={styles.home_container}>
                <img src={Fundo} alt='Logo' />
            </div>
        </>
    )
}