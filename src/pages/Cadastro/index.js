import React, { useState } from 'react';
import './cadastro.css';

import { useNavigate } from 'react-router-dom'

import { MdEmail, MdVpnKey, MdOutlinePeople } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Cadastro = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    const handleLogin = () => {
       navigate('/')
    }

    return (
        <div className='cadastro'>
            <div className='cadastro-logo'>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/295/295128.png" 
                alt="Login App" 
                />
            </div>

            <div className="cadastro-right">
                <h1>Cadastre-se</h1>

                <div className="cadastro-cadastroInputNome">
                <MdOutlinePeople />
                    <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div className="cadastro-cadastroInputEmail">
                <MdEmail />
                    <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="cadastro-cadastroInputPassword">
                <MdVpnKey />
                    <input
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <div className='cadastro-eye'>
                        {show ? (
                            <HiEye 
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff 
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>
                </div>

                <button type="submit">
                    Cadastrar
                </button>

                <h4>Já tenho uma conta!</h4>

                <button 
                onClick={handleLogin}
                type="submit"
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default Cadastro