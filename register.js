document.getElementById('registerForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm').value;
    const gender = document.getElementById('gender').value;

    if (password !== confirmPassword) {
        alert("Passwords doesnt match, Please recheck the passwords.");
        return; 
    }

    const userData = {
        name: fullName,
        email: email,
        username: username,
        password: password, 
        gender: gender
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert("Registration successful! THANK YOU!! :)");

    window.location.href = "login.html"; 
});

