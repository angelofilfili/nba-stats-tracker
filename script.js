const player = document.getElementById("player-search") // This is the input in our html
const button = document.getElementById("search-btn") // This our button from HTML
const playerHeading = document.getElementById("player-name") // header for displaying player name

const playerPts = document.getElementById("player-pts")
const playerAst = document.getElementById("player-ast")
const playerReb = document.getElementById("player-reb")
// Display text for pts, reb, ast

const nbaPlayers = 
[{ name: "LeBron James", pts: 30, reb: 10, ast: 8},
{ name: "Kevin Durant", pts: 35, reb: 5, ast: 4},
{ name: "Shai Gilgeous-Alexander", pts: 40, reb: 10, ast: 8}];

function resetStats() // Using this function to allow us to reset text
{
    playerPts.textContent = "--";
    playerAst.textContent = "--";
    playerReb.textContent = "--";
}

function displayPlayer(player)
{
    playerHeading.textContent = player.name;
    playerPts.textContent = player.pts;
    playerAst.textContent = player.ast;
    playerReb.textContent = player.reb;
}

button.addEventListener("click", function()
{
    const input_value = player.value.trim();
    if (input_value === "")
    {
        playerHeading.textContent = "Please enter a player name";
        resetStats();
        return;
    }

    const foundPlayer = nbaPlayers.find(function(p)
    {
        return p.name.toLowerCase() === input_value.toLowerCase();
    });

    if (foundPlayer === undefined)
    {
        playerHeading.textContent = "Player not found!";
        resetStats();
    }

    else
    {
        displayPlayer(foundPlayer);
    }
});

player.addEventListener("keydown", function(event)
{
    if (event.key === "Enter")
    {
        button.click();
    }
});
