const express = require('express');
const router = express.Router();
const profesoresService = require('../services/profesoresService');

router.get('/profesor', async (req, res) => {
    try {
        const filtro = req.query; // Obtiene todos los parámetros de consulta
        const rows = await profesoresService.buscarProfesores(filtro);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.json(rows); // Devuelve los profesores encontrados
    } catch (error) {
        console.error("Error fetching profesores:", error.message);
        res.status(500).json({ error: 'Error al obtener los profesores' });
    }
});

module.exports = router;
