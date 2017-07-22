import {GameState} from "./states/gameState.js";
import {SimulationState} from "./states/simulationState.js"
import {Component} from "./components/component.js";

var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
var RF = new Component(0,0);
console.log(RF);

game.state.add("GameState",GameState);
game.state.add("SimulationState",SimulationState)
game.state.start("GameState");
