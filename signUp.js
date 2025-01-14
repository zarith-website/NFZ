document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password,
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
});