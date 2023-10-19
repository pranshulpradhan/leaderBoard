let players = [
    { name: "Ankit Singh", score: 100 },
    { name: "Raksh Gupta", score: 180 },
    { name: "Pranshul Pradhan", score: 120 }
];


function refreshTable() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Actions</th>
        </tr>
    `;
    
   
    players.sort((a, b) => b.score - a.score);
    
    players.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>
                <button class="add-5" data-index="${players.indexOf(player)}">+5</button>
                <button class="subtract-5" data-index="${players.indexOf(player)}">-5</button>
                <button class="delete" data-index="${players.indexOf(player)}">Delete</button>
            </td>
        `;
        scoreboard.appendChild(row);
    });
    
    
    const add5Buttons = document.querySelectorAll(".add-5");
    add5Buttons.forEach(button => {
        button.addEventListener("click", () => {
            players[button.getAttribute("data-index")].score += 5;
            refreshTable();
        });
    });

    const subtract5Buttons = document.querySelectorAll(".subtract-5");
    subtract5Buttons.forEach(button => {
        button.addEventListener("click", () => {
            players[button.getAttribute("data-index")].score -= 5;
            refreshTable();
        });
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            players.splice(button.getAttribute("data-index"), 1);
            refreshTable();
        });
    });
}


document.getElementById("add-player").addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value;
    const startingScore = parseInt(document.getElementById("starting-score").value);

    if (playerName && !isNaN(startingScore)) {
        players.push({ name: playerName, score: startingScore });
        document.getElementById("player-name").value = "";
        document.getElementById("starting-score").value = "";
        refreshTable();
    }
});

refreshTable();
