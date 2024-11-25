const express = require('express');
const router = express.Router();
const matriculacionController = require('../controllers/matriculacionController');

// Ruta para crear una matriculación
router.post('/matricular', matriculacionController.matricular);

module.exports = router;
