const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

if (currentUser) {
    document.getElementById("profilePic").src = currentUser.profilePic;
    document.getElementById("profileName").textContent = currentUser.username;

    const registerNav = document.getElementById("registerNav");

    if (registerNav) {
        registerNav.style.display = "none";
    }
}