(() => {

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "login.html";
}

document.getElementById("bigProfilePic").src = currentUser.profilePic;
document.getElementById("fullName").textContent = currentUser.name;
document.getElementById("username").textContent = "@" + currentUser.username;
document.getElementById("gender").textContent =
    currentUser.gender.charAt(0).toUpperCase() + currentUser.gender.slice(1);

document.getElementById("email").textContent = hideEmail(currentUser.email);

function hideEmail(email) {

    const parts = email.split("@");

    const name = parts[0];
    const domain = parts[1];

    if (name.length <= 4) {
        return name + "****@" + domain;
    }

    const visible = name.substring(0, 4);
    const hidden = "*".repeat(name.length - 4);

    return visible + hidden + "@" + domain;
}

const logoutProfileBtn = document.getElementById("logoutProfileBtn");

logoutProfileBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        sessionStorage.removeItem("currentUser");
        window.location.href = "register.html";
    }

});

})();