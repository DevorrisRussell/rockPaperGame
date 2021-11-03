"use strict"

const prompt = require ("prompt-sync")();
const {Player}= require ("./Player");
class Ai extends Player {
    constructor() {
        console.log("Prepare to face your Destroyer");
        let aiName = prompt("Terminal Illness");
        this.aiRandomSelect = Math.floor(Math.random()  * 5); 
        super(aiName);
    }

    /*aiRandomSelect(aiRandomGestures){
        
    }    
    */
}
module.exports = {
    aiName: aiName
}