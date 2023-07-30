const express = require("express");
const router = express.Router();
const paswC = require("../Controller/passwordController");

router.get("/", paswC.findAll);
router.get("/:id", paswC.findById);
router.post("/", paswC.add);
router.put("/:id", paswC.update);
router.delete("/:id", paswC.delete);

module.exports = router;
