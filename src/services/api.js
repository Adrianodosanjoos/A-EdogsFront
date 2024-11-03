import axios from 'axios';

export const api = axios.create({
     
   //baseURL: 'https://a-e-dogs-main-atuazizado.vercel.app'
        
    baseURL: ' http://localhost:3001'
});


api.interceptors.request.use( (config) => {
    const userData = localStorage.getItem('a&edogs:userData');

    const token = userData && JSON.parse(userData).token;

    config.headers.authorization = `Bearer ${token}`;

    return config;
});