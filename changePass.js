const changeButton = document.getElementById("changeButton");
const newPasswordInput = document.getElementById("newPassword");
const messageElement = document.getElementById("message");

changeButton.addEventListener("click", () => {
    const newPassword = newPasswordInput.value;

    if (newPassword.trim() !== "") {
        messageElement.textContent = "Your password has been changed.";
        messageElement.style.color = "green";
        newPasswordInput.value = ""; 
    } else {
        messageElement.textContent = "Please enter a new password.";
        messageElement.style.color = "red";
    }
});