"use strict"

const prompt = require ("prompt-sync")();
const {Player} = require ("./Player");
class Human1 extends Player {
    
constructor (){ 
    console.log ("Please enter players name")
    let john = prompt();
    
    super(john);

    }    
    chooseGesture(){
        console.log(this.gestures);
        let userChoice = prompt("Choose which gesture you want \n 1 - Rock \n 2 - Paper \n 3 - Scissors \n 4 - Lizard \n 5 - Spock" );
        switch (userChoice) {
            case "1":
                this.gesture = "Rock"
                break;
            case "2":
                this.gesture = "Paper"
                break;
            case "3":
                this.gesture = "Scissors"
                break;
            case "4":
                this.gesture = "Lizard"
            case "5":
                this.gesture = "Spock"
            default:
                break;
        }
        }  
}
module.exports = {
    Human1: Human1

}