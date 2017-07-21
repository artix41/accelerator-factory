import {GameState} from "./states/gameState.js";

var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");

game.state.add("GameState",GameState);
game.state.start("GameState");
