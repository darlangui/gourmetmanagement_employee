import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.jacson.com.br/',
});

const getAuthToken = async (username: string, password: string) => {
    try {
        const response = await api.post('/api/token/', { username, password });
        const token = response.data.access;
        return token;
    } catch (error) {
        console.error('Erro ao obter token de autenticação:', error);
        throw error;
    }
};

const setAuthHeader = (token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export { api, getAuthToken, setAuthHeader };