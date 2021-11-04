"use strict"

const prompt = require ("prompt-sync")();
const {Player}= require ("./Player");

class Ai extends Player {

    constructor() {
        console.log("Prepare to face your Destroyer");
        this.Name = "Terminal Illness";
        this.selectedGesture = Math.floor(Math.random()  * 5); 
        super(aiName);
    }
}

module.exports = {
    Ai: Ai
}