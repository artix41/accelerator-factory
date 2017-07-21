export function GameState(game){
    console.log("Starting the game");
};

GameState.prototype = {
    preload: function(){
        console.log("Preloading");
    },
    create: function(){
        console.log("Creating");
    }
};
