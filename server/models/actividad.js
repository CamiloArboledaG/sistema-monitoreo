const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    tipo_actividad: { type: String, required: true },
    insumos_utilizados: { type: String, required: true },
    duracion: { type: Number, required: true },
    parcela_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcela', required: true }
});

module.exports = mongoose.model('Actividad', actividadSchema);
