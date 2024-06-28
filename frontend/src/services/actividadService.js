// services/actividadesService.js
import { axiosInstance } from '../config/config'; // Ajusta la importación según tu estructura de archivos

export const getActividades = async () => {
    try {
      const response = await axiosInstance.get('/api/actividades'); // Ruta para obtener actividades desde el backend
      const actividades = response.data.map(actividad => ({
        ...actividad,
        id: actividad._id // Renombra _id a id
      }));
      return actividades; // Devuelve los datos de las actividades con el campo id en lugar de _id
    } catch (error) {
      console.error('Error al obtener actividades:', error);
      throw error; // Lanza el error para manejarlo en el componente que haga la llamada
    }
  };
