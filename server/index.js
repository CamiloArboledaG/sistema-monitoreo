const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const authRoutes = require('./routes/auth');
const actividadesRoutes = require('./routes/actividades');
const parcelasRoutes = require('./routes/parcelas');
const fincasRoutes = require('./routes/fincas');
const usuariosRoutes = require('./routes/usuarios');
const authMiddleware = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes);
app.use('/api/actividades', authMiddleware, actividadesRoutes);
app.use('/api/parcelas', authMiddleware, parcelasRoutes);
app.use('/api/fincas', authMiddleware, fincasRoutes);
app.use('/api/usuarios', authMiddleware, usuariosRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
