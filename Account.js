document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
        alert('You need to log in first!');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('user-greeting').textContent = `Hi ${user.username},`;
    document.getElementById('name').value = user.username;
    document.getElementById('contact-number').value = user.contactNumber || '';
    document.getElementById('email').value = user.email;

    const savedAddress = localStorage.getItem('userAddress');
    document.getElementById('address').value = savedAddress || '';

    const personalInfoForm = document.getElementById('personal-info-form');
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const contactNumber = document.getElementById('contact-number').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            if (!name || !contactNumber || !email || !address) {
                alert('Please fill in all fields in the personal information form.');
                return;
            }

            user.username = name;
            user.contactNumber = contactNumber;
            user.email = email;
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            localStorage.setItem('userAddress', address);

            alert('Personal information updated successfully!');
        });
    }

    const changePasswordForm = document.getElementById('change-password-form');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!currentPassword || !newPassword || !confirmPassword) {
                alert('Please fill in all fields in the change password form.');
                return;
            }

            if (newPassword !== confirmPassword) {
                alert('New password and confirm password do not match.');
                return;
            }

            alert('Password changed successfully!');
        });
    }
});
