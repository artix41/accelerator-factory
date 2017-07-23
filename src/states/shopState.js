import {listComponents} from "model";

export function ShopState(game){ //Jordan
    this.game = game;
    console.log("Starting ShopState");
};

ShopState.prototype = {
    preload: function(){
        console.log("Preloading");
	var obj = this;
	listComponents.slice(0, 3).forEach(function(compo) {
		obj.game.load.image(compo.name + "img", '../images/shop/' + compo.icon);
		compo.upgradeName.forEach(function(upgName, k){
			obj.game.load.image(upgName + compo.name + "txt", '../images/components/' + compo.texture[k]);
		    });
	    });
    },
    
    create: function(){
	var obj = this;

	var buyColor = "0x00EE76";
	var buyFont = "30px Arial";
	var wh = $(window).height() - 60;
	var ww = $(window).width();
	var fs = ww/1000.;
	var imgS = ww/12;
	var compImages = [];
	var compTextures = [];
	var compButtons = [];
	var buyTexts = [];
	var infoTexts = [];
	var titleTexts = [];
	var categoryTexts = [];

	this.game.stage.backgroundColor = "#0053A1";

	var shopText = obj.game.add.text(fs*50, 0, "Shop", {font: (fs*48).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "800"});

	var exitText = obj.game.add.text(ww - 60, 0, "X", {font: (fs*48).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "800"});
	exitText.inputEnabled = true;
        exitText.events.onInputDown.add(obj.exitShop, obj);


	var graphics = this.game.add.graphics(0, 0);
	var upgGraphics = this.game.add.graphics(0, 0);
	
	graphics.beginFill("0xFFFFFF",1);
	graphics.drawRect(0, 60, ww, 3);

	for(var i = 1; i<=3; i++){
	    for(var j = 1; j<=3; j++){
		graphics.beginFill(buyColor,0.8);
		graphics.drawRect(j*ww/3. - ww/6., 60 + i*wh/3. - wh/6. + wh/12., -imgS, 2*imgS/6.);
	    }
	};

	listComponents.slice(0, 3).forEach(function(compo, i){

		categoryTexts.push(obj.game.add.text(ww/6. - imgS, 60 + wh/6. + i*wh/3. - imgS, compo.shopCategory, {font: (fs*24).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "700"}));
		
		compo.upgradeName.forEach(function(upgName, j){

			compImages.push(obj.game.add.sprite(ww/6. + j*ww/3., 60 + wh/6. + i*wh/3 + wh/12., compo.name + "img"));
			compImages.slice(-1)[0].anchor.setTo(1.0, 1.0);
			compImages.slice(-1)[0].width = imgS;
			compImages.slice(-1)[0].height = imgS;
			compImages.slice(-1)[0].inputEnabled = true;
			compImages.slice(-1)[0].events.onInputDown.add(obj.compInfo, {obj: obj, compType: i});

			compTextures.push(obj.game.add.sprite(ww/6. + j*ww/3. + imgS, 60 + wh/6. + i*wh/3 - imgS/2., upgName + compo.name + "txt"));
			compTextures.slice(-1)[0].anchor.setTo(0.5, 0.0);
			if(compo.aRatio == 1){
			    compTextures.slice(-1)[0].width = imgS/3.;
			    compTextures.slice(-1)[0].height = imgS/3.;
			}
			else{
			    compTextures.slice(-1)[0].width = imgS*compo.aRatio/5.;
			    compTextures.slice(-1)[0].height = imgS/5.;
			};
			compTextures.slice(-1)[0].inputEnabled = true;
			compTextures.slice(-1)[0].events.onInputDown.add(obj.compInfo, {obj: obj, compType: i});

			upgGraphics.beginFill(compo.colorName[j],1);
			upgGraphics.drawRect((j+1)*ww/3. - ww/6., 60 + (i+1)*wh/3. - wh/6. - 2*imgS/15. + wh/12., -imgS, 2*imgS/15.);
			obj.game.world.bringToTop(upgGraphics);

			buyTexts.push(obj.game.add.text( ww/6. + j*ww/3. - imgS/2., 60 + wh/6. + i*wh/3. + wh/12., "Buy", {font: (fs*18).toString() + "px Arial", fill: "#000000", fontWeight: "500"}));
			buyTexts.slice(-1)[0].anchor.setTo(0.5, -0.10);
			buyTexts.slice(-1)[0].inputEnabled = true;
			buyTexts.slice(-1)[0].events.onInputDown.add(obj.compBuy, {obj: obj, compType: i, compUpg: j});
			
			infoTexts.push(obj.game.add.text(ww/6. + j*ww/3. + 5, 60 + wh/6. + i*wh/3. - imgS/1.5 + fs*20 + wh/12., compo.price[j].toString() + " M Euros\n" + compo.shopDescription[j], {font: (fs*14).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "300", wordWrap: true, wordWrapWidth: imgS*1.5 }));
			infoTexts.slice(-1)[0].inputEnabled = true;
			infoTexts.slice(-1)[0].events.onInputDown.add(obj.compInfo, {obj: obj, compType: i});
			
			titleTexts.push(obj.game.add.text(ww/6. + j*ww/3. + 5, 60 + wh/6. + i*wh/3. - imgS/1.5 + wh/12., compo.upgradeName[j] + " " + compo.name, {font: (fs*14).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "700"}));
			titleTexts.slice(-1)[0].inputEnabled = true;
			titleTexts.slice(-1)[0].events.onInputDown.add(obj.compInfo, {obj: obj, compType: i});
		    });
	    });
    },

    exitShop: function(){ //Go back to the main screen
	console.log("Exiting shop state...");
	this.game.state.start("GameState");
    },

    compInfo: function(compType){ //Go to the specific component state
	//WARNING: NEED TO FIGURE OUT HOW TO PASS ARGUMENT TO STATE
	console.log("Going to info state of component " + listComponents[this.compType].name);
	this.obj.game.state.start("ComponentState", this.compType);
    },

    compBuy: function(compType, compUpg){
	if(listComponents[this.compType].price[this.compUpg] <= this.obj.game.money){
	    this.obj.game.money -= listComponents[this.compType].price[this.compUpg];
	    //this.game.myComponents.push(new Component(this. 
	    console.log(listComponents[this.compType].upgradeName[this.compUpg] + " " + listComponents[this.compType].name + " purchased. Remaining money: " + this.obj.game.money.toString());
	}
	else{
	    console.log("Not enough funding...");
	}
    }
};