const Finca = require('../models/finca');

exports.getFincas = async (req, res) => {
    try {
        const fincas = await Finca.find({ usuario_id: req.user.id });
        res.json(fincas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFinca = async (req, res) => {
    let fincaBody = req.body
    fincaBody.usuario_id = req.user.id
    const finca = new Finca(fincaBody);
    try {
        const newFinca = await finca.save();
        res.status(201).json(newFinca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Agrega las funciones para update y delete aquí
