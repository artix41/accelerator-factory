export function GameState(game){
    console.log("Starting the game");
};

var shopBackground;
var click = 0;

GameState.prototype = {
    preload: function(){
        console.log("Preloading");
    },
    create: function(){
        console.log("Creating");
        this.game.stage.backgroundColor = "#0053A1";
      	var graphics = this.game.add.graphics(0, 0);
    	graphics.beginFill("#000000",1);
    	graphics.drawRect(0, 0, $(window).width(), 30);
    	graphics.beginFill("#000000",0.4);
    	graphics.drawRect(0, 30, 275, $(window).height());         //left big rectangle
		graphics.drawRect($(window).width() - 250, 80, 230, 500);  //right big rectangle
		graphics.beginFill(0xFFFF00, 1);
		graphics.drawRect(0, 550, 275, 100);
		graphics.beginFill(0xFF0000, 1);
		graphics.drawRect($(window).width() - 250, 480, 230, 100);
		graphics.beginFill(0x00FF00, 1);
		graphics.drawRect($(window).width() - 250, 380, 230, 100);


    	window.graphics = graphics;

    	//Shop Button
		var text = this.game.add.text(90, 585, "SHOP", { font: "30px Arial", fill: "#000000", align: "center", fontWeight: "900"});
	    text.inputEnabled = true;
	    text.events.onInputDown.add(downShop, this);

	    //RUN Button
		var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: "30px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});
	    text.inputEnabled = true;
	    text.events.onInputDown.add(downRun, this);

	    //SIMULATE Button
		var text = this.game.add.text($(window).width() - 215, 415, "SIMULATE", { font: "30px Arial", fill: "#000000", align: "center", fontWeight: "900"});
	    text.inputEnabled = true;
	    text.events.onInputDown.add(downSimulate, this);

	    //Inventory Text
	    var text = this.game.add.text(10, 40, "Inventory", { font: "30px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});

	    //Center-of-Mass energy
	    var text = this.game.add.text($(window).width() - 240, 90, "Center-of-Mass\nenergy", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

	    //Peak luminosity
	    var text = this.game.add.text($(window).width() - 240, 190, "Peak luminosity", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

	    //Last particle found at
	    var text = this.game.add.text($(window).width() - 240, 270, "Last particle\nfound at", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

	    //Text For Top Menu bar
	    var text = this.game.add.text(15,8, "TRIAL", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "700"});
	    var text = this.game.add.text(130,8, "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900"});


    },
    
    update: function(){
    }
};


function downShop(item) {

    item.text = "clicked";

}

function downRun(item) {

    item.text = "clicked";

}

function downSimulate(item) {

    item.text = "clicked ";

}