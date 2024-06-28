const Finca = require('../models/finca');
const Parcela = require('../models/parcela');

exports.getParcelas = async (req, res) => {
    try {
        // Obtener las fincas del usuario actual
        const fincasUsuario = await Finca.find({ usuario_id: req.user.id });

        // Obtener los IDs de las fincas del usuario actual
        const idsFincasUsuario = fincasUsuario.map(finca => finca._id);

        // Obtener las parcelas que pertenecen a las fincas del usuario actual
        const parcelas = await Parcela.find({ finca_id: { $in: idsFincasUsuario } });

        res.json(parcelas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createParcela = async (req, res) => {
    let parcelaBody = req.body;

    // Verificar que la finca_id pertenece al usuario actual
    try {
        const finca = await Finca.findOne({ _id: parcelaBody.finca_id, usuario_id: req.user.id });
        if (!finca) {
            return res.status(404).json({ message: 'No se encontró la finca o no tienes permiso para acceder a ella.' });
        }

        // Crear la parcela si la verificación es exitosa
        const parcela = new Parcela(parcelaBody);
        const newParcela = await parcela.save();
        res.status(201).json(newParcela);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Agrega las funciones para update y delete aquí
