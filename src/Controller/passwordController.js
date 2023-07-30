const Password = require("../Models/Password.js");

module.exports = {
  findAll: async function (req, res) {
    try {
      const list = await Password.find();
      return res.status(200).json({ items: list });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  findById: async function (req, res) {
    try {
      const paswfound = await Password.findById(req.params.id);
      if (!paswfound) {
        res.status(400).json({ msg: ["Esta contraseña no existe"] });
      }
      res.status(200).json({ paswfound });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  add: async function (req, res) {
    try {
      const { nombre, descrpcion, valor, etiquetas } = req.body;
      const newpsw = new Etiqueta({ nombre, descrpcion, valor });
      const foundEtiquetas = await Rol.find({ nombre: { $in: etiquetas } });
      newpsw.roles = foundEtiquetas.map((etiqueta) => etiqueta._id);
      const pswsaved = await newpsw.save();
      res.status(200).json({
        msg: "Contraseña agregada satisfactoriamente",
        id: pswsaved._id,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  update: async function (req, res) {
    try {
      const etiquetafound = await Etiqueta.findById(req.params.id);
      if (!etiquetafound) {
        res.status(400).json({ msg: ["Esta etiqueta no existe"] });
      }
      const { nombre, descripcion, valor, etiquetas } = req.body;
      const foundEtiquetas = await Rol.find({ nombre: { $in: etiquetas } });
      let finaletiquetas = foundEtiquetas.map((etiqueta) => etiqueta._id);
      await Etiqueta.findByIdAndUpdate(req.params.id, {
        nomnbre,
        descripcion,
        valor,
        finaletiquetas,
      });
      res.status(200).json({ msg: "Etiqueta actualizada satisfactoriamente" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
  delete: async function (req, res) {
    try {
      await Etiqueta.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Contraseña eliminada satisfactoriamente" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: ["Ocurrió un error"] });
    }
  },
};
