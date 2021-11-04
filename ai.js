"use strict"

const prompt = require ("prompt-sync")();
const {Player}= require ("./Player");
class Ai extends Player {
    constructor() {
        console.log("Prepare to face your Destroyer");
        
        
        super(aiName);
    }

    aiRandomSelect(aiRandomGestures){
     this.aiRandomSelect = Math.floor(Math.random()  * 5); 
      console.log(this.gestures);
        
    }    
    
}

module.exports = {
    Ai: Ai
}