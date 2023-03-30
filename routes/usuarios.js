/* Ruta: /api/usuarios */

const { Router } = require("express");
const usuario = require("../controllers/usuarios");
const { validarCampos } = require("../middlewares/validar-campos");
const { body } = require('express-validator');
const router = Router();

router.get('/',
   [
      body('usuario', 'El usuario es obligatorio').not().isEmpty(),
      validarCampos
   ], usuario.getUsuario);

module.exports = router;