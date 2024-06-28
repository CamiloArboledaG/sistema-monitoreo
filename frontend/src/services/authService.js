import { axiosInstance, setAuthToken } from '../config/config';

const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', { email, password });
        const { token } = response.data;

        // Guardar el token en localStorage
        localStorage.setItem('token', token);

        // Configurar el token en las cabeceras de Axios
        setAuthToken(token);

        return response.data; // Podrías devolver cualquier otro dato necesario del usuario
    } catch (error) {
        throw error.response.data;
    }
};

const logout = () => {
    // Eliminar el token del localStorage y de las cabeceras de Axios
    localStorage.removeItem('token');
    setAuthToken(null); // Eliminar el token de las cabeceras de Axios
};

export { login, logout };
