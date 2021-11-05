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
        console.log("please choose your shoot sign between 5 options"[""]); 
        this.player1 = new Human1();
        this.player2 = new Ai();
        }
    runGamePlay(){
        console.log(`Let the game between ${this.player1} and ${this.player2} Begin!!`);
        if (this.gesture == this.gesture) {
            console.log("its a tie!");
        }else if 
            (this.player1 < this.player2) {
            console.log("you got smashed");
        }else {
            console.log("you win");
        }
    while(this.player1.score > this.gesture && this.player2.score > this.gesture){
        console.log(`press 1 to shoot with ${this.player1.gesture} \npress 2 to shoot with ${this.player2.gesture}`);
        }
        let userChoice = prompt();
        if(userChoice == "1"){
            this.player1.gesture.shoot(this.player2.gesture);
        }
        else if(userChoice == "2"){
            this.player2.gestures(this.player1.gesture);
        }else {
            console.log("please choose an option!");
        }
        }
    signPowerRock(){
        
        if(userChoice == "Rock" && userChoice == "Scissors"){
            console.log("Rock Wins");
        }else if(userChoice == "Paper"){
                console.log("paper Wins");
        }else if(userChoice == "Lizard"){
                console.log("Rock Wins");
        }else {
                console.log("Spock Wins");
        }
        }
    signPowerPaper(){
        
        if(userChoice == "Paper" && userChoice == "Rock"){
            console.log("Paper Wins");
        } else if(userChoice == "Scissors"){
            console.log("Scissors Wins");
        }else if(userChoice == "Lizard"){
            console.log("Lizard Wins");
        }else if (userChoice == "Spock"){
            console.log("Paper Wins");
        }
        }
    signPowerScissors(){
        
        if(userChoice == "Scissors" && userChoice == "Rock"){
            console.log("Rock Wins");
        } else if(userChoice == "Paper"){
            console.log("Scissors Wins");
        }else if(userChoice == "Lizard"){
            console.log("Scissors Wins");
        }else if (userChoice == "Spock"){
            console.log("Spock Wins");
        }
        }
    signPowerLizard(){
        
        if(userChoice == "Lizard" && userChoice == "Rock"){
            console.log("Rock Wins");
        } else if(userChoice == "Scissors"){
            console.log("Scissors Wins");
        }else if(userChoice == "Paper"){               
            console.log("Lizard Wins");
        }else if (userChoice == "Spock"){
            console.log("Spock Wins");
            }
            }      
    signPowerSpock(){
        
        if(userChoice == "Spock" && userChoice == "Rock"){
            console.log("Rock Wins");
        } else if(userChoice == "Scissors"){
            console.log("Spock Wins");
        }else if(userChoice == "Paper"){               
            console.log("Paper Wins");
        }else if (userChoice == "Lizard"){
            console.log("Lizard Wins");
        }
        }            
     //you can add some of the stuff about the score here
      // if(this.player1.score < 3 && this.player2.score > 3){
            // console.log("you lose");     
           
        
    declareWinner(){
        if(this.player1.gesture > this.player2.gesture){
            console.log(`This Games Champion Is...${this.player1.name}!!!`);
        } else {
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
