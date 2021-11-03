"use strict"

const prompt = require("prompt-sync")();
const {Human1} = require("./Human1");
const {Ai} = require("./Ai");
class rockPaperScissors{
    constructor (){
        this.Player1;
        this.Player2;

    }
    
    displayWelcome(){
        console.log("Let's Play A Game of Rock, Paper, Scissors!");
        console.log(`Which player do you choose to play? \n 1 - ${this.player1.name} vs ${this.player2.name} \n 2 - ${this.player1.name} vs ${this.ai.name}`);
        this.player1 = new Human1();
        this.player2 = new Ai();
    }
}

module.exports = {
    rockPaperScissors: rockPaperScissors
}
