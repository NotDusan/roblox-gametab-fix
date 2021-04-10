let ids = [ //id array
    "1278035280", //warrior cats roleplay
    "648454481", //grand piece
    "943733974", //bitcoin miner
    "1686885941", //brook heaven
    "383310974", //adopt me
    "994732206", //blox fruits
    "1720936166", //all star power
    "1016936714", //your bizarre adventure
    "321778215", //royale high
    "140239261", //meep city
    "380704901", //ro-ghoul
    "1511883870", //Shindo
    "2404080894", //funky friday
    "2331157949", //super evolution
    "1663370770", //mighty omega
    "2047210140", //ttd 3
    "590359607", //boku no roblox
    "1268927906", //muscle legends
    "2422985977", //fnf

]
let notWanted = ["Obby","obby","Simulator","simulator", "Tycoon", "tycoon","TYCOON", "wolfves", "clicker", "Clicker", "Piece", "Anime","admin", "Admin", "ADMIN", "Tycoon", "Escape", "escape"] //get keywords to remove 
let timesItRan = 0
let running = setInterval(main, 1000) //run main every 1000ms (1s)
let titles = document.getElementsByClassName("game-card-container") 


function main() {
    console.warn("This code ran " + timesItRan + " times.")
    timesItRan++
    titles = document.getElementsByClassName("game-card-container")//get cards title in an array
     
    for (x=0; x < titles.length;){ //do it till there are titles in list
        try {
            let Title = titles[x].parentNode.title //define title which is equal to the title of the current card(this variable sucks)
            for (y=0; y < notWanted.length; ){ //do it for every item of the array "notWanted"
                if (Title.includes(notWanted[y])){ //if the title includes notWanted lists "y"th string then do
                    console.log(Title + " was removed (" + titles[x].childNodes[0].id + ")" ) //log out the title of the card and id of it that was deleted
                    titles[x].remove() //remove the element we checked because it contains one of the elelments of "notWanted"
                }
                y++;
            }
        }
        catch(e){ //cathc error and print it out
            console.error(e)
        }
        x++;
    }
    let sponsored = document.getElementsByClassName("game-card-native-ad") //get ad cards, to disable this just comment out this whole for loop
    for (z = 0; z < sponsored.length;){ //do it for as many ads as we found
        try {
            console.log("Deleted ad named: " + sponsored[z].parentNode.parentNode.parentNode.title) //print out deleted ad name
            sponsored[z].parentNode.parentNode.remove() //remove it
        }
        catch (e) { //catch and log errors
            console.error(e)

        }
        z++;
    }
    for(i = 0; i < ids.length; ){ //for each one of the ids
    
    try {
        document.getElementById(ids[i]).parentNode.remove() //remove
        console.log( document.getElementById(ids[i]).title + " was removed (" + ids[i] +  ")") //log that it was removed (kinda broken)
    }
    catch (e){ 
        //console.warn("Id not found :/ (" + ids[i] + ")") //if id not found log it (kinda doesn't work)
        //console.log(e) //uncomment for detailed error
    }
    i++ //add 1 ofc
}
}
