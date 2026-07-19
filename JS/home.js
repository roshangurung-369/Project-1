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

        modalTitle.textContent = sport + " Registration";

        if (type === "team") {

            dynamicFields.innerHTML = `
                <input type="text" placeholder="Team Name" required>

                <input type="text" placeholder="Captain Name" required>

                <input type="text" placeholder="Contact Number" required>
            `;

        }

        else {

            dynamicFields.innerHTML = `
                <input type="text" placeholder="Player Name" required>

                <input type="text" placeholder="Contact Number" required>
            `;

        }

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});