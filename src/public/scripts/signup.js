document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener los valores del formulario
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validar los datos del formulario
        if (!username || !email || !password) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        try {
            // Enviar los datos al servidor
            const response = await fetch('http://localhost:3000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                // Si la respuesta del servidor no es exitosa, lanzar un error
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en la respuesta del servidor');
            }

            const result = await response.json();
            alert('Usuario registrado correctamente.');
            form.reset(); // Limpiar el formulario

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            alert('Error al registrar el usuario: ' + error.message);
        }
    });
});
