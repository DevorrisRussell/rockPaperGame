"use strict"

const prompt = require ("prompt-sync")();
const {Player}= require ("./Player");

class Ai extends Player {

    constructor() {
        console.log("Prepare to face your Destroyer");
<<<<<<< HEAD
        
        
        super(aiName);
    }

    aiRandomSelect(aiRandomGestures){
     this.aiRandomSelect = Math.floor(Math.random()  * 5); 
      console.log(this.gestures);
        
    }    
    
=======
        let computer = "Terminal Illness";
        let selectedGesture = Math.floor(Math.random()  * 5); 
        super(computer, selectedGesture);
    }
>>>>>>> 480cf4e3ac53e5011dd98fa712c5058ea0e1eb36
}

module.exports = {
    Ai: Ai
}