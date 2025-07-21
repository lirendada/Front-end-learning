document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!usernameInput.value.trim()) {
            showError(usernameInput, 'Username is required');
            return;
        }

        if (!passwordInput.value.trim()) {
            showError(passwordInput, 'Password is required');
            return;
        }

        // Simulate successful login
        console.log('Login submitted:', {
            username: usernameInput.value,
            password: passwordInput.value
        });

        // Show success feedback
        loginForm.reset();
        alert('Login successful! (This is a demo)');
    });

    function showError(input, message) {
        const inputGroup = input.parentElement;
        const errorElement = inputGroup.querySelector('.error-message') || document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.5rem';
        errorElement.textContent = message;
        
        if (!inputGroup.querySelector('.error-message')) {
            inputGroup.appendChild(errorElement);
        }
        
        input.focus();
    }
});