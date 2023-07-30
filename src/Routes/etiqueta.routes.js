const express = require("express");
const router = express.Router();
const etiquetaController = require("../Controller/etiquetaController");
router.get("/ex", function (req, res) {
  res.json("funciona");
});
router.get("/", etiquetaController.findAll);
router.get("/:id", etiquetaController.findById);
router.post("/", etiquetaController.add);
router.put("/:id", etiquetaController.update);
router.delete("/:id", etiquetaController.delete);

module.exports = router;
