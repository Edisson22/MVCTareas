const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TareasSchema = new Schema({
    titulo: String,
    estado: Boolean,
    items: [{
        titulo: Mixed,
        descripcion: String
    }],
    descripcion: String
});

module.export = TareasSchema