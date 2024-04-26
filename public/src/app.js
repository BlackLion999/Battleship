let model = {
    boardSize: 7,
    numShips: 3,
    ship3Length: 3,
    shipsSunk: 0,

    ships: [
        { locations: ["06", "16", "26",], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] },
    ],

    fire: function (guess) {
        for (i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hits";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function (ship) {
        for (i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }

};

let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },
};


// let randomLoc = Math.floor(Math.random() * 5);
// let location1 = randomLoc;
// let location2 = 4;
// let location3 = 5;
// let guess;
// let hits = 0;
// let guesses = 0;
// let isSunk = false;
// while (isSunk == false) {
//     guess = //prompt("Ready, aim, fire! (enter a number 0-6):");
//     if (guess < 0 || guess > 6) {
//         //alert("Please enter a valid cell number!");
//     } else {
//         guesses += 1;
//         if ((guess == location1) || (guess == location2) || (guess == location3)) {
//             //alert("HIT!");
//             hits += 1;
//             if (hits == 3) {
//                 isSunk = true;
//                 //alert("You sank my battleship!");
//             }
//         } else {
//             ///alert("MISS!");
//         }
//     }
// }
// let status = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
// //alert(status);
