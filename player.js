"use strict"

const Human1 = require("./Human1");

class Player {
    constructor(name){
    this.gesture;
    this.name = name;
    this.score = 0;
    this.selectedGesture = "";
    this.gestures = ["Rock", "Paper", "Scissors", "Lizzard", "Spock"];
        }
        shoot(opposingPlayer){
            opposingPlayer.gestures = opposingPlayer.gestures - [""];
            console.log(`The shoot did ${this.selectedGesture} NICE!`)
        }
}
module.exports = {
    Player: Player
}