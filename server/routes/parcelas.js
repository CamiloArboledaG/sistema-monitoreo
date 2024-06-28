const express = require('express');
const router = express.Router();
const parcelasController = require('../controllers/parcelasController');

router.get('/', parcelasController.getParcelas);
router.post('/', parcelasController.createParcela);

// Agrega las rutas para update y delete aquí

module.exports = router;
