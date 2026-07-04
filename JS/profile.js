const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const profileArea = document.getElementById("profileArea");
const profileMenu = document.getElementById("profileMenu");
const dropdownMenu = document.getElementById("dropdownMenu");
const registerNav = document.getElementById("registerNav");

if(currentUser){

    profileArea.style.display = "block";

    document.getElementById("profilePic").src = currentUser.profilePic;
    document.getElementById("profileName").textContent = currentUser.username;

    if(registerNav){
        registerNav.style.display = "none";
    }

    profileMenu.onclick = function(){

        if(dropdownMenu.style.display === "block"){
            dropdownMenu.style.display = "none";
        }
        else{
            dropdownMenu.style.display = "block";
        }

    };

    document.getElementById("logoutBtn").onclick = function(){

        sessionStorage.removeItem("currentUser");

        window.location.href = "register.html";

    };

}