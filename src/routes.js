import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Professores from './components/pages/Professores';
import Professor from './components/pages/Professor';
import Navbar from './components/layout/Navbar'
import ShowNavbar from './components/layout/ShowNavbar'
import Disciplina from './components/pages/Disciplina'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ShowNavbar>
                <Navbar />
            </ShowNavbar>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/professores' element={<Professores />} />
                <Route path='/professor' element={<Professor />} />
                <Route path='/disciplinas' element={<Disciplina />} />                

            </Routes>
        </BrowserRouter>
    )
}