const express = require('express');
const router = express.Router();
const cursosService = require('../services/cursosService');

router.get('/curso_escolar', async (req, res) => {
    const { id, anyo_inicio, anyo_fin } = req.query;
    let cursos;
    if (id) {
        cursos = await cursosService.buscarPorId(id);
    } else if (anyo_inicio && anyo_fin) {
        cursos = await cursosService.buscarPorAnyo(anyo_inicio, anyo_fin);
    }
    res.json(cursos);
});

router.get('/curso_escolar/:id/alumnos', async (req, res) => {
    const { id } = req.params;
    const alumnos = await cursosService.obtenerAlumnos(id);
    res.json(alumnos);
});

module.exports = router;

