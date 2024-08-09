document.getElementById('listarCampeonatoBtn').addEventListener('click', function() {
    fetch('http://localhost:3000/api/campeonato') // Reemplaza con tu URL de API
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#campeonatoTable tbody');
            tableBody.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos

            data.forEach(record => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${record.id}</td>
                    <td>${record.posicion}</td>
                    <td><img src="${record.piloto}" alt="${record.nombre}" class="image-cell"></td>
                    <td>${record.numero_auto}</td>
                    <td>${record.nombre_apellido}</td>
                    <td><img src="${record.marca}" alt="Marca" class="image-cell"></td>
                    <td>${record.puntos}</td>
                    <td>
                        <button class="edit-btn" onclick="editRecord(${record.id})">Editar</button>
                        <button class="delete-btn" onclick="deleteRecord(${record.id})">Eliminar</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error al listar los registros: ' + error.message);
        });
});

document.getElementById('campeonato-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    const id = data.id;

    // Validar que todos los campos estén llenos
    if (!data.posicion || !data.piloto || !data.numero_auto || !data.nombre_apellido || !data.marca || !data.puntos) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:3000/api/campeonato/${id}` : 'http://localhost:3000/api/campeonato';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(id ? 'Registro actualizado correctamente.' : 'Registro creado correctamente.');
        console.log(result);
        // Limpiar el formulario
        document.getElementById('campeonato-form').reset();
        document.getElementById('id').value = '';
        // Listar los registros después de la actualización
        document.getElementById('listarCampeonatoBtn').click();
    })
    .catch(error => {
        console.error('Error saving data:', error);
        alert('Error al guardar el registro: ' + error.message);
    });
});

function editRecord(id) {
    fetch(`http://localhost:3000/api/campeonato/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('id').value = data.id;
            document.getElementById('posicion').value = data.posicion;
            document.getElementById('piloto').value = data.piloto;
            document.getElementById('numero_auto').value = data.numero_auto;
            document.getElementById('nombre_apellido').value = data.nombre_apellido;
            document.getElementById('marca').value = data.marca;
            document.getElementById('puntos').value = data.puntos;
        })
        .catch(error => {
            console.error('Error fetching record:', error);
            alert('Error al cargar el registro: ' + error.message);
        });
}

function deleteRecord(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
        fetch(`http://localhost:3000/api/campeonato/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            alert('Registro eliminado correctamente.');
            console.log(result);
            // Listar los registros después de la eliminación
            document.getElementById('listarCampeonatoBtn').click();
        })
        .catch(error => {
            console.error('Error deleting record:', error);
            alert('Error al eliminar el registro: ' + error.message);
        });
    }
}
