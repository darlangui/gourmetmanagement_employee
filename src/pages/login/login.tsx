import React, { useState, useEffect  } from 'react';
import { getAuthToken, setAuthHeader } from '../../services/api';
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;