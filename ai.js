"use strict"

const prompt = require ("prompt-sync")();
const {Player}= require ("./Player");

class Ai extends Player {

    constructor() {
        console.log("Prepare to face your Destroyer")
        let computer = "Terminal Illness";
        let selectedGesture = Math.floor(Math.random() * 5);
        super(computer, selectedGesture);
    }

        
    }    
    


module.exports = {
    Ai: Ai
}