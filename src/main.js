import {SimulationState} from "./states/simulationState.js";
import {GameState} from "./states/gameState.js";
import {AchievementsState} from "./states/achievementsState.js";
import {ShopState} from "./states/shopState.js";
import {EmptyState} from "./states/emptyState.js";

var game = new Phaser.Game($(window).width(), $(window).height(), Phaser.AUTO, "game");

game.state.add("GameState",GameState);
game.state.add("SimulationState",SimulationState);
game.state.add("ShopState",ShopState);
game.state.add("AchievementsState",AchievementsState);
game.state.add("EmptyState", EmptyState);
game.state.start("GameState");
