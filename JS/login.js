document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    const savedDataString = localStorage.getItem('registeredUser');

    if (!savedDataString) {
        alert("No registered user found! Please register an account first.");
        window.location.href = "register.html"; 
    }

    const userData = JSON.parse(savedDataString);

    
    if (emailInput === userData.email && passwordInput === userData.password) {
       
        alert("Login successful! Welcome back, " + userData.name + "!");
        
        sessionStorage.setItem('isLoggedIn', 'true');
        
        window.location.href = "home.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
});