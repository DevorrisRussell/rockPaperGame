"use strict"

const prompt = require("prompt-sync")();
const {Human1} = require("./Human1");
const {Ai} = require("./Ai");

class rockPaperScissors{
    constructor (){
        this.player1;
        this.player2;
    }
    
    displayWelcome(){
        console.log("Let's Play A Game of Rock, Paper, Scissors!");
        console.log("Chose your player name");
        this.player1 = new Human1();
        this.player2 = new Ai;
     }

    runGamePlay(){
        console.log(`Let the game between ${this.player1.name} and ${this.player2.name} Begin!!`);
        while(this.player1 > this.gesture && this.player2 > this.gesture){
            console.log(`press 1 to shoot with ${this.player1.gestures} \npress 2 to shoot with ${this.player2.gestures}`);
            let userChoice = prompt();
            if(userChoice == "1"){
                this.player1.gestures.shoot(this.player2.gestures);
            }
            else if(userChoice == "2"){
                this.player2.gestures(this.player1.gestures);
            }
            else{
                console.log("please choose an option!");
            }
        }
    } 
        declareWinner(){
            if(this.player1.gestures > this.player2.gestures){
                console.log(`This Games Champion Is...${this.player1.name}!!!`);
            } 
            else {
                console.log(`Give it up for ${this.player2.name}!`);
            }
        }
       
    runGame(){
        this.displayWelcome();
        this.runGamePlay();
        this.declareWinner();
    }
}

module.exports = {
    rockPaperScissors: rockPaperScissors
}
