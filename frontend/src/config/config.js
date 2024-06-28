import axios from 'axios';

const apiUrl = 'http://localhost:5000'; // Ajusta la URL base de tu API

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000, // Tiempo de espera de 10 segundos
    headers: {
        'Content-Type': 'application/json',
    },
});

// Función para configurar el token JWT en las cabeceras de Axios
const setAuthToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

export { axiosInstance, setAuthToken };
