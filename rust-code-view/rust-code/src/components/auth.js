// src/auth.js
import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('autharization/token/', {
            username,
            password
        });

    
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};


axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {  // Токен истек
            try {
                const refresh = localStorage.getItem('refresh_token');
                const refreshResponse = await axios.post('autharization/token/refresh/', { refresh });

              
                localStorage.setItem('access_token', refreshResponse.data.access);

             
                error.config.headers['Authorization'] = `Bearer ${refreshResponse.data.access}`;
                return axios(error.config);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
            }
        }
        return Promise.reject(error);
    }
);