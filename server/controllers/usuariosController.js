const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Agrega las funciones para login aquí
