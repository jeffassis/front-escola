import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Professores from './pages/professores';
import Professor from './pages/professor';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/professores' element={<Professores />} />
                <Route path='/professor' element={<Professor />} />
            </Routes>
        </BrowserRouter>
    )
}