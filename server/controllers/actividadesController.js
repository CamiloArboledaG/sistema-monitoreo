const Actividad = require('../models/actividad');
const Finca = require('../models/finca');
const Parcela = require('../models/parcela');

exports.getActividades = async (req, res) => {
    try {
        // Obtener las fincas del usuario actual
        const fincasUsuario = await Finca.find({ usuario_id: req.user.id });

        // Obtener los IDs de las fincas del usuario actual
        const idsFincas = fincasUsuario.map(finca => finca._id);

        // Obtener todas las parcelas que pertenecen a las fincas del usuario actual
        const parcelas = await Parcela.find({ finca_id: { $in: idsFincas } });

        // Obtener los IDs de las parcelas del usuario actual
        const idsParcelas = parcelas.map(parcela => parcela._id);

        // Obtener las actividades que pertenecen a las parcelas del usuario actual
        const actividades = await Actividad.find({ parcela_id: { $in: idsParcelas } });

        res.json(actividades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createActividad = async (req, res) => {
    const actividad = new Actividad(req.body);

    try {
        // Obtener las fincas del usuario actual
        const fincasUsuario = await Finca.find({ usuario_id: req.user.id });

        // Obtener los IDs de las fincas del usuario actual
        const idsFincasUsuario = fincasUsuario.map(finca => finca._id.toString());

        // Obtener todas las parcelas asociadas a las fincas del usuario actual
        const parcelasUsuario = await Parcela.find({ finca_id: { $in: idsFincasUsuario } });

        // Obtener los IDs de las parcelas del usuario actual
        const idsParcelasUsuario = parcelasUsuario.map(parcela => parcela._id.toString());

        // Verificar que la parcela_id de la actividad esté entre las parcelas del usuario actual
        if (!idsParcelasUsuario.includes(actividad.parcela_id.toString())) {
            return res.status(404).json({ message: 'La parcela especificada no pertenece al usuario actual.' });
        }

        // Guardar la actividad si la verificación es exitosa
        const newActividad = await actividad.save();
        res.status(201).json(newActividad);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Agrega las funciones para update y delete aquí
