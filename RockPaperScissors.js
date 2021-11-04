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
        console.log(`Which player do you choose to play? \n 1 - ${this.player1.name} vs ${this.player2.name}`);
        this.player1 = new Human1();
        this.player2 = new Human1();
    }
    runGamePlay(){
        console.log(`Let the game between ${this.player1} and ${this.player2} Begin!!`);
        
        
      
    }
}

module.exports = {
    rockPaperScissors: rockPaperScissors
}
