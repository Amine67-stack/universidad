const db = require('./db'); // Asegúrate de que este módulo exista y esté configurado correctamente

async function buscarPorId(id) {
    const rows = await db.query(`SELECT * FROM cursos WHERE id = ?`, [id]);
    return rows;
}

async function buscarPorAnyo(anyo_inicio, anyo_fin) {
    const rows = await db.query(`SELECT * FROM cursos WHERE anyo_inicio = ? AND anyo_fin = ?`, [anyo_inicio, anyo_fin]);
    return rows;
}

async function obtenerAlumnos(id) {
    const rows = await db.query(`SELECT * FROM alumnos WHERE id_curso = ?`, [id]);
    return rows;
}

module.exports = {
    buscarPorId,
    buscarPorAnyo,
    obtenerAlumnos
};
