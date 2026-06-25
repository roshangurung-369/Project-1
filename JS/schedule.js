const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthNames = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        document.getElementById("monthYear").innerText =
            monthNames[month] + " " + year;

        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        let html = "<tr>";

        for (let i = 0; i < firstDay; i++) {
            html += "<td></td>";
        }

        for (let day = 1; day <= totalDays; day++) {
            if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
                html += "</tr><tr>";
            }
            html += `<td>${day}</td>`;
        }

        html += "</tr>";

        document.getElementById("calendarBody").innerHTML = html;