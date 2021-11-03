"use strict"

const prompt = require ("prompt-sync")();
const {Players} = require ("./Players");
class Human1 extends Players {
    
constructor (){ 
    console.log ("Please enter players name")
    let playerName1 = prompt();
    let playerName2 = prompt();
    super(playerName1, playerName2);

    }      
}
module.exports = {
    Human1: Human1

}