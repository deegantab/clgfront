function login() {
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (ensure values are not empty)
    if (!username || !password) {
        document.getElementById('error-message').innerText = 'Please fill out all fields.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Dummy validation (you should replace this with actual authentication logic)
    if (username === 'admin' && password === 'password123') {
        window.location.href = 'dashboard.html'; // Redirect to a different page after successful login
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';
        document.getElementById('error-message').style.display = 'block';
    }
}
