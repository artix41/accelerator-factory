import {SimulationState} from "./states/simulationState.js";
import {GameState} from "./states/gameState.js";
import {Component} from "components";

var game = new Phaser.Game($(window).width(), $(window).height(), Phaser.AUTO, "game");
game.state.add("SimulationState", SimulationState);
game.state.add("GameState", GameState);
game.state.start("GameState");
