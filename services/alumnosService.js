const mysql = require('mysql');



async function buscarIdNif(id) {
    
    const rows = await db.query(`SELECT * FROM alumnos WHERE id=` + id + ';')
    
    const data = helper.emptyOrRows(rows);

    return data;
}

async function buscarNombre(nombre) {
    
    const rows = await db.query(`SELECT * FROM alumnos WHERE nombre=` + nombre + ';')
    
    const data = helper.emptyOrRows(rows);

    return data;
}

async function obtenerAsignaturas(id) {
    const [rows] = await pool.query('SELECT * FROM asignaturas WHERE id_alumno = ?', [id]);
    return rows;
}

module.exports = {
    buscarIdNif,
    buscarNombre,
    obtenerAsignaturas
};