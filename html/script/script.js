async function buscar() {
  // Seleccionamos el botón y el formulario
const searchButton = document.getElementById("searchButton");
const searchForm = document.getElementById("searchForm");

// Añadimos un evento al botón
searchButton.addEventListener("click", function() {
    // Alternamos la clase 'hidden' para mostrar/ocultar el formulario
    searchForm.classList.toggle("hidden");
});


        const tbody = document.querySelector('#alumnos tbody');

        function renderTable() {
            tbody.innerHTML = '';
            alumnos.forEach(alumno => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${alumno.id}</td>
                    <td>${alumno.nif}</td>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.apellido1}</td>
                    <td>${alumno.apellido2 || ''}</td>
                    <td>${alumno.ciudad}</td>
                    <td>${alumno.direccion}</td>
                    <td>${alumno.telefono || ''}</td>
                    <td>${alumno.fecha_nacimiento}</td>
                    <td>${alumno.sexo}</td>
                    <td class="acciones">
                        <button onclick="editar(${alumno.id})">Editar</button>
                        <button onclick="copiar(${alumno.id})">Copiar</button>
                        <button onclick="borrar(${alumno.id})">Borrar</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        window.editar = function(id) {
            alert(`Editar alumno con ID: ${id}`);
            // Aquí puedes agregar la lógica para editar el alumno
        };

        window.copiar = function(id) {
            const alumno = alumnos.find(a => a.id === id);
            const nuevoAlumno = { ...alumno, id: alumnos.length + 1 };
            alumnos.push(nuevoAlumno);
            renderTable();
        };

        window.borrar = function(id) {
            const index = alumnos.findIndex(a => a.id === id);
            if (index !== -1) {
                alumnos.splice(index, 1);
                renderTable();
            }
        };

        renderTable();
    }
