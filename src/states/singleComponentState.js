import {listComponents} from "model";

export function ComponentState(game){
    console.log("Starting the Test event");
};

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

var lineX = 0;
var lineY = 43;
var crossX = ww-40;
var crossY = 5;
var backX = 40;
var backY = 5;
var vaccumTextX = 10;
var vaccumTextY = 60;
var vaccumImageX = 10;
var vaccumImageY = 100;
var vaccumImageTextX = 325;
var vaccumImageTextY = 174;
var vaccumComponentX = 325;
var vaccumComponentY = 100;
var buybuttonWidth = 300;
var buybuttonHeight = 40;
var buybuttonX = 10;
var buybuttonY = 370;
var buyLabelX = 135;
var buyLabelY = 375;

var compID = 1;
var compUpg = 1;


ComponentState.prototype = {

    init: function(compID, compUpg) {   },

    preload: function(){
        console.log("Preloading");
        this.game.load.image('cross', 'images/buttons/button-close.png');
        this.game.load.image('back', 'images/buttons/button-back.png');
        this.game.load.image('compIcon', 'images/shop/' + listComponents[compID].icon);
        this.game.load.image('compImage', 'images/components/' + listComponents[compID].texture[compUpg]);
    },
    
    create: function(){
	var obj = this;
	this.game.stage.backgroundColor = "#0053A1";
	
	//line
      var line = new Phaser.Line(lineX, lineY, ww, lineY);
      var graphics= this.game.add.graphics(0,0);
      graphics.lineStyle(4, 0xffffff, 1);
      graphics.moveTo(line.start.x,line.start.y);//moving position of graphic if you draw mulitple lines
      graphics.lineTo(line.end.x,line.end.y);
      graphics.endFill();

      var crossImage = this.game.add.image(crossX, crossY, 'cross');
      crossImage.inputEnabled = true;
      crossImage.events.onInputDown.add(obj.exitShop, this);

      var backImage = this.game.add.image(backX, backY, 'back');
      backImage.inputEnabled = true;
      backImage.events.onInputDown.add(obj.exitComp, this);

      //copmonentText
	var text = this.game.add.text(vaccumTextX, vaccumTextY, listComponents[compID].name, { font: (fs*30).toString() + "px Arial", fill: "#FFFFFF"});
      text.strokeThickness = 2;
      text.fontWeight = 'bold';

      //componentImage----------------------
      var vaccumImage = this.game.add.image(vaccumImageX, vaccumImageY , 'compIcon');
      vaccumImage.width = 300;
      vaccumImage.height = 300;
      //text of vaccumImage
      var text = this.game.add.text(vaccumImageTextX, vaccumImageTextY, "You have ????\nCost: " + listComponents[compID].price[compUpg].toString() + " M EUR\n" + listComponents[compID].shopDescription[compUpg] + "\nDescription:\n" + listComponents[compID].description, { font: (fs*18).toString() + "px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 400 });

      //Component
      var Component = this.game.add.image(vaccumComponentX, vaccumComponentY , 'compImage');

      //BuYbutton
      var graphics = this.game.add.graphics(0, 0);
      graphics.beginFill("0x00FF00",1);
      graphics.drawRect(buybuttonX, buybuttonY, buybuttonWidth, buybuttonHeight);
      window.graphics = graphics;

      //buyButtonLabel
      var text = this.game.add.text(buyLabelX, buyLabelY, "Buy", { font: (fs*14).toString() + "px Arial", fill: "#000000"});
      text.fontWeight = 'bold';
      text.inputEnabled = true;
      text.events.onInputDown.add(obj.compBuy, {obj: obj, compType: compID, compUpg: compUpg});;
      
    },
    
    exitShop: function(){ //Go back to the main screen
	console.log("Exiting shop state...");
	this.game.state.start("GameState");
    },
    
    exitComp: function(){ //Go back to the main screen
	console.log("Exiting Comp state...");
	this.game.state.start("ShopState");
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