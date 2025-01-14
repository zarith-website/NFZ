const deleteAccountForm = document.querySelector('form');

deleteAccountForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('userAddress');
    alert('Account deleted successfully!');

    window.location.href = 'login.html';
});
