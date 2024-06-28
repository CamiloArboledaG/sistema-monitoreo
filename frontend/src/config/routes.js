// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { axiosInstance, setAuthToken } from './config'; // Ajusta la importación según tu estructura de archivos
import Login from '../views/Login';
import Actividades from '../views/Actividades';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    // Configurar el token en Axios para peticiones protegidas
    setAuthToken(token);

    return <Element {...rest} />;
};

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/actividades" element={<PrivateRoute element={Actividades} />} />
                {/* Otras rutas protegidas y componentes */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
