"use strict"
class Player {
    constructor(name){
    this.name = name;
    this.score = 0;
    this.selectedGesture = "";
    this.gestures = ["Rock", "Paper", "Scissors", "Lizzard", "Spock"];
        }
        chooseGesture(){
            console.log(this.gestures);
}
}




module.exports = {
    Player: Player
}