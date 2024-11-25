const matriculacionService = require('../services/matriculacionService');

exports.matricular = (req, res) => {
  const { studentId, degree, year, subjects } = req.body;

  // Llamada al servicio para procesar la matriculación
  matriculacionService.matricularAlumno(studentId, degree, year, subjects)
    .then(result => {
      res.status(200).json({
        message: `¡Matriculación exitosa! El alumno se ha matriculado en ${result.length} asignaturas.`,
        matriculaciones: result
      });
    })
    .catch(err => {
      res.status(500).json({ message: 'Hubo un error al matricular al alumno.', error: err });
    });
};
