// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Function to validate form
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both the username and password.");
        return false;
    }

    // Add any other validations here if needed
    return true;
}

// Button animation on click
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function() {
    loginButton.classList.add('button-clicked');
    
    // Remove the animation after it completes
    setTimeout(function() {
        loginButton.classList.remove('button-clicked');
    }, 300);
});
