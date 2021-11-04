"use strict"
class Player {
    constructor(name){
    this.name = name;
    this.score = 0;
    this.selectedGesture = "";
    this.gestures = ["Rock", "Paper", "Scissors", "Lizzard", "Spock"];
        }
        shoot(opposingPlayer){
            opposingPlayer.gestures = opposingPlayer.gestures - this.gestures;
            console.log(`The shoot did ${this.selectedGesture} NICE!`)
        }
}
module.exports = {
    Player: Player
}