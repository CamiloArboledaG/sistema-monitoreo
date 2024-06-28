const mongoose = require('mongoose');

const fincaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Finca', fincaSchema);
