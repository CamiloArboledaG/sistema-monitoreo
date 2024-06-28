const mongoose = require('mongoose');

const parcelaSchema = new mongoose.Schema({
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
    tamaño: { type: Number, required: true },
    tipo_cultivo: { type: String, required: true },
    finca_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Finca', required: true }
});

module.exports = mongoose.model('Parcela', parcelaSchema);
