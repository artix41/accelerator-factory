import {listComponents} from "model";

export function ShopState(game){ //Jordan
    this.game = game;
    console.log("Starting ShopState");
};

ShopState.prototype = {
    preload: function(){
        console.log("Preloading");
	var obj = this;
	listComponents.forEach(function(compo) {
		obj.game.load.image(compo.name, '../images/components/' + compo.icon);
	    });
    },
    
    create: function(){
	var obj = this;

	var buyColor = "0x00EE76";
	var buyFont = "30px Arial";
	var wh = $(window).height();
	var ww = $(window).width();
	var fs = ww/1000.;
	var imgS = ww/12;
	var compImages = [];
	var compButtons = [];
	var buyTexts = [];
	var infoTexts = [];
	var titleTexts = [];

	var graphics = this.game.add.graphics(0, 0);
	for(var i = 1; i<=3; i++){
	    for(var j = 1; j<=3; j++){
		graphics.beginFill(buyColor,1);
		graphics.drawRect(i*ww/4., j*wh/4., -imgS, 2*imgS/5.);
	    }
	};

	listComponents.slice(0, 3).forEach(function(compo, i){
	    console.log("Pushing component" + compo.name);
	    compo.upgradeName.forEach(function(upgName, j){
		compImages.push(obj.game.add.sprite(ww/4. + i*ww/4., wh/4. + j*wh/4., compo.name));
		compImages[i*3 + j].anchor.setTo(1.0, 1.0);
		compImages[i*3 + j].width = imgS;
		compImages[i*3 + j].height = imgS;
		compImages[i*3 + j].inputEnabled = true;
		compImages[i*3 + j].events.onInputDown.add(obj.compInfo, {componentID: i});
	    	    
		buyTexts.push(obj.game.add.text( ww/4. + i*ww/4. - imgS/2., wh/4. + j*wh/4., "Buy", {font: (fs*20).toString() + "px Arial", fill: "#000000", fontWeight: "500"}));
		buyTexts[i*3 + j].anchor.setTo(0.5, -0.15);
		buyTexts[i*3 + j].inputEnabled = true;
		buyTexts[i*3 + j].events.onInputDown.add(obj.compBuy, {componentID: i});
		
		infoTexts.push(obj.game.add.text(ww/4. + i*ww/4. + 5, wh/4. + j*wh/4. - imgS + fs*20, "Something very very long to explain the components, and maybe there are even some line breaks: wow check it out. nice.", {font: (fs*10).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "300", wordWrap: true, wordWrapWidth: imgS*1.5 }));
		infoTexts[i*3 + j].inputEnabled = true;
		infoTexts[i*3 + j].events.onInputDown.add(obj.compInfo, {componentID: i});
		
		titleTexts.push(obj.game.add.text(ww/4. + i*ww/4. + 5, wh/4. + j*wh/4. - imgS, compo.name, {font: (fs*16).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "600"}));
		titleTexts[i*3 + j].inputEnabled = true;
		titleTexts[i*3 + j].events.onInputDown.add(obj.compInfo, {componentID: i});
		});
	    });
	//Images
	this.game.stage.backgroundColor = "#0053A1";

	var exitText = obj.game.add.text(ww - 40, 0, "X", {font: (fs*48).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "800"});
	exitText.inputEnabled = true;
        exitText.events.onInputDown.add(obj.exitShop, obj);
    //var exitButton = this.game.add.button(800,50,"exitButton",this.exitShop,this);
    //exitButton.anchor.setTo(0, 1.0);
    },

    exitShop: function(){ //Go back to the main screen
	console.log("Exiting shop state...");
	this.game.state.start("GameState");
    },

    compInfo: function(componentID){ //Go to the specific component state
	//WARNING: NEED TO FIGURE OUT HOW TO PASS ARGUMENT TO STATE
	console.log("Going to info state of component" + componentID.toString());
	this.game.state.start("ComponentState");
    },

    compBuy: function(componentID){
	console.log("Buying component");
	//something something buy the component
    }
};