const Etiqueta = require("../Models/Etiqueta");

module.exports = {
  findAll: async function (req, res) {
    try {
      const list = await Etiqueta.find();
      return res.status(200).json({ items: list });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  findById: async function (req, res) {
    try {
      const etiquetafound = await Etiqueta.findById(req.params.id);
      if (!etiquetafound) {
        res.status(400).json({ msg: ["Esta etiqueta no existe"] });
      }
      res.status(200).json({ etiquetafound });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  add: async function (req, res) {
    try {
      const { nombre } = req.body;
      const newetiqueta = new Etiqueta({ nombre });
      const etiquetasaved = await newetiqueta.save();
      res.status(200).json({
        msg: "Eqtiqueta agregada satisfactoriamente",
        id: etiquetasaved._id,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  update: async function (req, res) {
    try {
      const { nombre } = req.body;
      const etiquetafound = await Etiqueta.findById(req.params.id);
      if (!etiquetafound) {
        res.status(400).json({ msg: ["Esta etiqueta no existe"] });
      }
      let payload = {};
      if (nombre !== etiquetafound.nombre) payload.nombre = nombre;
      if (payload === {}) res.status(200).json({ msg: "No hay cambios" });
      else {
        await Etiqueta.findByIdAndUpdate(req.params.id, payload);
        return res
          .status(200)
          .json({ msg: "Etiqueta actualizada satisfactoriamente" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  delete: async function (req, res) {
    try {
      await Etiqueta.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Etiqueta eliminada satisfactoriamente" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
};
