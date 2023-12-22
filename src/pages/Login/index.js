import React, { useState } from 'react';
import './login.css';

import { MdEmail, MdVpnKey } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className='login'>
            <div className='login-logo'>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/295/295128.png" 
                alt="Login App" 
                />
            </div>

            <div className="login-right">
                <h1>Acessar App</h1>

                <div className="login-loginInputEmail">
                <MdEmail />
                    <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                <MdVpnKey />
                    <input
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <div className='login-eye'>
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
                    Entrar
                </button>

                <h4>Não tenho conta!</h4>

                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default Login