const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const profileArea = document.getElementById("profileArea");
const profileMenu = document.getElementById("profileMenu");
const dropdownMenu = document.getElementById("dropdownMenu");
const registerNav = document.getElementById("registerNav");
const logoutBtn = document.getElementById("logoutBtn");

if (currentUser) {

    profileArea.style.display = "block";

    document.getElementById("profilePic").src = currentUser.profilePic;
    document.getElementById("profileName").textContent = currentUser.username;

    if (registerNav) {
        registerNav.style.display = "none";
    }

    profileMenu.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        sessionStorage.removeItem("currentUser");

        window.location.href = "register.html";
    });

}