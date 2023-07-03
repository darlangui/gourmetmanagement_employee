import React, { useState, useEffect  } from 'react';
import { getAuthToken, setAuthHeader } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import * as style from './style';

declare global {
    interface Window {
        localStorage: Storage;
    }
}

const Login: React.FC = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = await getAuthToken(username, password);

            setAuthHeader(token);
            window.localStorage.setItem('authToken', token);

            navigate('/cardapio');
        } catch (error: any) {
            if (error.message === 'InvalidUsernameError') {
                setError('Usuário inválido');
            } else if (error.message === 'InvalidPasswordError') {
                setError('Senha inválida');
            } else {
                setError('Erro ao fazer login');
            }
        }
    };


    return (
        <style.Container>
            <div className="right">
                <div className="ilust_content">
                    <div className="square"></div>
                    <div className="blur"></div>
                    <div className="blur_two"></div>
                </div>
            </div>

            <form onSubmit={handleLogin}>
                <h1>Bem Vindo ao Gourmet Management!</h1>
                <label htmlFor="user">
                    <span>Usuário: </span>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label htmlFor="pass">
                    <span>Senha: </span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </style.Container>
    );
};

export default Login;