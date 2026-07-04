document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const foundUser = users.find(user =>
        user.email === emailInput &&
        user.password === passwordInput
    );

    if(foundUser){

        alert("Login Successful! Welcome " + foundUser.name + "!");

        sessionStorage.setItem("isLoggedIn", "true");

        sessionStorage.setItem("currentUser", JSON.stringify(foundUser));

        window.location.href = "home.html";

    }else{

        alert("Invalid Email or Password.");

    }

});