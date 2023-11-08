import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Professores from './components/pages/Professores';
import Professor from './components/pages/Professor';
import ShowNavbar from './components/layout/ShowNavbar'
import Disciplina from './components/pages/Disciplina'
import Turmas from './components/pages/Turmas'
import Turma from './components/pages/Turma'

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
                <Route path='/turmas' element={<Turmas />} />
                <Route path='/turma/:turmaId' element={<Turma />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}