import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Professores from './pages/professores';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/professores' element={<Professores />} />

            </Routes>
        </BrowserRouter>
    )
}