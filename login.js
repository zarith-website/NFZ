document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!registeredUser) {
        alert('You must register first. Redirecting to Sign Up page.');
        window.location.href = 'signUp.html';
        return;
    }

    if (registeredUser.username !== username || registeredUser.password !== password) {
        alert('Invalid username or password.');
        return;
    }

    const userDetails = {
        username: registeredUser.username,
        email: registeredUser.email,
        phone: registeredUser.phone || '012-3456789',
        address: registeredUser.address || 'No address available',
    };

    localStorage.setItem('loggedInUser', JSON.stringify(userDetails));

    window.location.href = 'index.html';
});
