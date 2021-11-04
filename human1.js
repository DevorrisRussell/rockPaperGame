"use strict"

const prompt = require ("prompt-sync")();
const {Player} = require ("./Player");
class Human1 extends Player {
    
constructor (){ 
    console.log ("Please enter players name")
    let playerName1 = prompt();
    let playerName2 = prompt();
    super(playerName1, playerName2);

    }    
    chooseGesture(){
        console.log(this.gestures);
        let userInput = prompt("Choose which gesture you want \n 1 - Rock \n 2 - Paper \n 3 - Scissors \n 4 - Lizard \n 5 - Spock" );

        }  
}
module.exports = {
    Human1: Human1

}