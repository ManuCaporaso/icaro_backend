document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            alert('Inicio de sesión exitoso');
            window.location.href = 'index.html'; // Redirige al usuario después de iniciar sesión
        } else {
            alert('Error al iniciar sesión: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión: ' + error.message);
    });
});
