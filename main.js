let config = {
    "deleteIDs": true,
    "deleteWords": true,
    "logging": true
}

let blacklistedIDs = [ // IDs to get removed
    "1278035280", // warrior cats roleplay
    "648454481", // grand piece
    "943733974", // bitcoin miner
    "1686885941", // brook heaven
    "383310974", // adopt me
    "994732206", // blox fruits
    "1720936166", // all star power
    "1016936714", // your bizarre adventure
    "321778215", // royale high
    "140239261", // meep city
    "380704901", // ro-ghoul
    "1511883870", // Shindo
    "2404080894", // funky friday
    "2331157949", // super evolution
    "1663370770", // mighty omega
    "2047210140", // ttd 3
    "590359607", // boku no roblox
    "1268927906", // muscle legends
    "2422985977", // fnf
]

let blacklistedWords = [ // keywords to get removed
    "Obby",
    "obby",
    "Simulator",
    "simulator",
    "Tycoon",
    "tycoon",
    "TYCOON",
    "wolfves",
    "clicker",
    "Clicker",
    "Piece",
    "Anime",
    "admin",
    "Admin",
    "ADMIN",
    "Tycoon",
    "Escape",
    "escape"
]

function main() {
    let cards = document.getElementsByClassName("game-card-container"); // get all game cards
    for (let i = 0; i < cards.length; i++) // loop through all cards
    {
        for (let x = 0; x < blacklistedIDs.length; x++) // loop thorugh all IDs
        {
            if (cards[i].firstChild.id == blacklistedIDs[x] && config.deleteIDs == true) // if the ID of the game, is in the list of blacklisted IDs
            {
                if (config.logging == true) {
                    console.log("Found: " + blacklistedIDs[x]);
                }
                cards[i].remove()
            }
        }
        for (let x = 0; x < blacklistedWords.length; x++) // loop through all blacklisted words
        {
            if (cards[i].firstChild.children[1].title.includes(blacklistedWords[x]) && config.deleteWords == true) // if the name of the game contains one of the blacklisted keywords
            {
                if (config.logging == true) {
                    console.log("Found: " + blacklistedWords[x])
                }
                cards[i].remove()
            }
        }
    }
}

setInterval(main, 1000); // run the code every 1000 milisecond (1 second)