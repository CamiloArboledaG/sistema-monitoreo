// src/views/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
    Paper
} from '@mui/material';
import { login } from '../services/authService';

const Login = () => {
    const navigate = useNavigate(); // Usa useNavigate para la navegación

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await login(email, password);

            if (response.success) {
                localStorage.setItem('token', response.token);

                navigate('/actividades');
            } else {
                setError(response.message);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
        }
    };

    return (
        <Container
            maxWidth="sm"
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Iniciar sesión
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                        >
                            Iniciar sesión
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Login;
