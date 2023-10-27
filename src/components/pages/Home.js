import React, { useEffect } from 'react';

import './Home.module.css';
import Loading from '../layout/Loading';

export default function Home() {

    useEffect(() => {
        setTimeout(() => {

        }, 3000)
    })

    return (
        <div className='home-container'>
            <Loading />
        </div>
    );
}