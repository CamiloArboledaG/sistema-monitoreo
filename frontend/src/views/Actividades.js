// src/views/Actividades.js
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { getActividades } from '../services/actividadService'; // Ajusta la importación según tu estructura de archivos

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDataGrid-root': {
      backgroundColor: '#fff',
      borderRadius: 8,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    '& .MuiDataGrid-cell': {
      color: theme.palette.text.primary,
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  container: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const columns = [
  { field: '_id', headerName: 'ID', width: 150 },
  { field: 'fecha', headerName: 'Fecha', width: 200 },
  { field: 'tipo_actividad', headerName: 'Tipo de Actividad', width: 250 },
  { field: 'insumos_utilizados', headerName: 'Insumos Utilizados', width: 250 },
  { field: 'duracion', headerName: 'Duración', width: 150 },
  { field: 'parcela_id', headerName: 'Parcela ID', width: 150 },
];

const Actividades = () => {
  const classes = useStyles();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActividades();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Actividades
      </Typography>
      <Box className={classes.root} width="100%">
        <DataGrid rows={activities} columns={columns} pageSize={10} autoHeight />
      </Box>
    </Container>
  );
};

export default Actividades;
