const { Schema, model } = require("mongoose");

const etiquetaSchema = new Schema({
  nombre: { type: String, required: true },
});

module.exports = model("Etiqueta", etiquetaSchema);
