import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav>
            <div>
            <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className='navbar-brand' to={'/professor'}>Cadastro</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">


                            <li className="nav-item dropdown">
                                <Link className='nav-link dropdown-toggle' to={'#'} id="pedagogiaDropdown" role='button' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pedagogia
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="pedagogiaDropdown">
                                    <li>
                                        <Link className='dropdown-item' to={'/login'}>
                                            Teste
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link' to={'/professores'}>Financeiro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/professores'}>Relatorios</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </nav>
    );
}