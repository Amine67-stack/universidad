const express = require('express');
const router = express.Router();
const alumnosService = require('../services/alumnosService');

router.get('/alumno', async (req, res) => {
    const { idNif, nombre } = req.query;
    let alumnos;
    if (idNif) {
        alumnos = await alumnosService.buscarIdNif(idNif);
    } else if (nombre) {
        alumnos = await alumnosService.buscarPorNombre(nombre);
    }
    res.json(alumnos);
});

router.get('/alumno/:id/asignaturas', async (req, res) => {
    const { id } = req.params;
    const asignaturas = await alumnosService.obtenerAsignaturas(id);
    res.json(asignaturas);
});

module.exports = router;