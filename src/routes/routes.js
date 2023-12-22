import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

function Router() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                </Routes>
            </BrowserRouter>
    )
}

export default Router