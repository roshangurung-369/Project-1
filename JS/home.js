const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
        console.log("No user is currently logged in.");
    }

let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

function saveRegistrations() {
                localStorage.setItem("registrations", JSON.stringify(registrations));
            }

const SPORTS = {

                    Football: {
                        minPlayers: 11,
                        maxSubs: 5
                    },
                
                    Basketball: {
                        minPlayers: 5,
                        maxSubs: 7
                    },
                
                    Volleyball: {
                        minPlayers: 6,
                        maxSubs: 6
                    },
                
                    "Relay Race": {
                        minPlayers: 4,
                        maxSubs: 0
                    },
                
                    Badminton: {
                        minPlayers: 1,
                        maxSubs: 0
                    },
                
                    "Table Tennis": {
                        minPlayers: 1,
                        maxSubs: 0
                    },
                
                    Athletics: {
                        minPlayers: 1,
                        maxSubs: 0
                    },
                
                    Chess: {
                        minPlayers: 1,
                        maxSubs: 0
                    }
                
                };

const modal = document.getElementById("registrationModal");
const modalTitle = document.getElementById("modalTitle");
const dynamicFields = document.getElementById("dynamicFields");
const closeModal = document.getElementById("closeModal");

const participateButtons = document.querySelectorAll(".participate-btn");

participateButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const sport = card.dataset.sport;
        const type = card.dataset.type;

        if (!currentUser) {
            alert("Please login or create an account before participating.");
            window.location.href = "register.html";
            return;
        }

        modalTitle.textContent = sport + " Registration";

        if (type === "team") {

            const totalPlayers = SPORTS[sport].minPlayers;
        
            let html = `
                <label>Team Name</label>
                <input type="text" id="teamName" placeholder="Enter Team Name" required>
        
                <h3>👑 Captain (Player 1)</h3>
        
                <input
                    type="text"
                    id="captainName"
                    value="${currentUser.name}"
                    readonly
                >
        
                <h3>Team Members</h3>
            `;
        
            html += `
                <div id="teamMembers">
            
                    <input
                        type="text"
                        class="teamMember"
                        placeholder="Player 2"
                        required
                    >
            
                </div>
            
                <button
                    type="button"
                    id="addPlayer"
                >
                    + Add Player (2/${totalPlayers})
                </button>
            `;
                    
            html += `
                <label>Contact Number</label>
        
                <input
                    type="tel"
                    id="contactNumber"
                    placeholder="98XXXXXXXX"
                    required
                >
            `;
        
            if (SPORTS[sport].maxSubs > 0) {
        
                html += `
        
                    <h3>Substitute Players</h3>
        
                    <div id="substituteContainer"></div>
        
                    <button
                        type="button"
                        id="addSubstitute"
                    >
                        + Add Substitute
                    </button>
        
                `;
        
            }
        
            dynamicFields.innerHTML = html;

            const addPlayerBtn = document.getElementById("addPlayer");

        if (addPlayerBtn) {
        
            let currentPlayers = 2;
        
            addPlayerBtn.addEventListener("click", function () {
            
                if (currentPlayers >= totalPlayers) {
                    return;
                }
            
                currentPlayers++;
            
                const input = document.createElement("input");
            
                input.type = "text";
                input.className = "teamMember";
                input.placeholder = `Player ${currentPlayers}`;
                input.required = true;
            
                document
                    .getElementById("teamMembers")
                    .appendChild(input);
            
                addPlayerBtn.textContent =
                    `+ Add Player (${currentPlayers}/${totalPlayers})`;
            
                if (currentPlayers === totalPlayers) {
                
                    addPlayerBtn.disabled = true;
                    addPlayerBtn.textContent = "All Players Added";
                
                }
            
            });
        
        }
        
        }

        else {

            dynamicFields.innerHTML = `
                <input type="text" placeholder="Player Name" required>

                <input type="text" placeholder="Contact Number" required>
            `;

        }

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";

    });

});

closeModal.addEventListener("click", function () {

    modal.style.display = "none";
    document.body.style.overflow = "auto";

});

window.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";
        document.body.style.overflow = "auto";

    }

});

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const sport = modalTitle.textContent.replace(" Registration", "");

    const teamName = document.getElementById("teamName")?.value.trim() || "";

    const contact = document.getElementById("contactNumber")?.value.trim() || "";

    if (teamName === "") {
        alert("Please enter a team name.");
        return;
    }

    if (contact === "") {
        alert("Please enter a contact number.");
        return;
    }

    const players = [];

    players.push(currentUser.name);

    document.querySelectorAll(".teamMember").forEach(player => {

        if (player.value.trim() !== "") {
            players.push(player.value.trim());
        }

    });

    const substitutes = [];

    document.querySelectorAll(".substitutePlayer").forEach(player => {

        if (player.value.trim() !== "") {
            substitutes.push(player.value.trim());
        }

    });

    const registration = {

        username: currentUser.username,
        sport: sport,
        teamName: teamName,
        captain: currentUser.name,
        contact: contact,
        players: players,
        substitutes: substitutes

    };

    registrations.push(registration);

    saveRegistrations();

    alert("Registration Successful!");

    modal.style.display = "none";
    document.body.style.overflow = "auto";

    registrationForm.reset();

});
