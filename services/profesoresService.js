// services/profesorService.js
const db = require('./db'); // Ajusta según tu configuración de base de datos

async function buscarProfesores(filtro) {
    const {
        id,
        nif,
        nombre,
        apellido1,
        apellido2,
        ciudad,
        direccion,
        telefono,
        fecha_nacimiento,
        sexo,
        id_departamento,
    } = filtro;

    let query = 'SELECT * FROM profesores WHERE 1=1'; // "1=1" para permitir filtros dinámicos
    const params = [];

    if (id) {
        query += ' AND id = ?';
        params.push(id);
    }
    if (nif) {
        query += ' AND nif = ?';
        params.push(nif);
    }
    if (nombre) {
        query += ' AND nombre LIKE ?';
        params.push(`%${nombre}%`); // Filtra parcialmente por nombre
    }
    if (apellido1) {
        query += ' AND apellido1 LIKE ?';
        params.push(`%${apellido1}%`);
    }
    if (apellido2) {
        query += ' AND apellido2 LIKE ?';
        params.push(`%${apellido2}%`);
    }
    if (ciudad) {
        query += ' AND ciudad LIKE ?';
        params.push(`%${ciudad}%`);
    }
    if (direccion) {
        query += ' AND direccion LIKE ?';
        params.push(`%${direccion}%`);
    }
    if (telefono) {
        query += ' AND telefono = ?';
        params.push(telefono);
    }
    if (fecha_nacimiento) {
        query += ' AND fecha_nacimiento = ?';
        params.push(fecha_nacimiento);
    }
    if (sexo) {
        query += ' AND sexo = ?';
        params.push(sexo);
    }
    if (id_departamento) {
        query += ' AND id_departamento = ?';
        params.push(id_departamento);
    }

    return db.query(query, params);
}

module.exports = { buscarProfesores };
