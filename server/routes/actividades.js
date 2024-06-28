const express = require('express');
const router = express.Router();
const actividadesController = require('../controllers/actividadesController');

router.get('/', actividadesController.getActividades);
router.post('/', actividadesController.createActividad);

// Agrega las rutas para update y delete aquí

module.exports = router;
