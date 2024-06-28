const express = require('express');
const router = express.Router();
const fincasController = require('../controllers/fincasController');

router.get('/', fincasController.getFincas);
router.post('/', fincasController.createFinca);

// Agrega las rutas para update y delete aquí

module.exports = router;
