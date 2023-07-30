const { Schema, model } = require("mongoose");

const contraseñaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  valor: { type: String, required: true },
  etiquetas: [
    {
      ref: "Etiqueta",
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
});

module.exports = model("Password", contraseñaSchema);
