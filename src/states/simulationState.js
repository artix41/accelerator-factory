import {Component} from "components";
import {EventState} from "eventState";
import {GameState} from "gameState"

export function SimulationState(game){
	this.game = game;
	console.log("Simulation Start");
};


var currentCompIndex = 0;
var beamSprite;
var crossSectionSprite;
var injectorWidth;
var injectorIndex;
var injectorSprite;
var injectorComponent;
var xIni;
var yIni;
var crossSection;
var margin ;

var ellipse;
var xEllipse;
var yEllipse;
var graphics;
var cavityRadius;

var energyText;
var injector;
var explosionSprite;

var ok=true;

SimulationState.prototype = {
	preload: function(){
		console.log("preloading");
		this.game.load.image('beamSprite', "images/particle-flow/beam-1.png");
		this.game.load.image('crossSectionSprite', 'images/cross-section/cross-section-visor.png')
		this.game.load.image('explosionSprite', 'images/components/explosion.png')
	},
	create: function(){
		console.log("creation simulation state");

        var gameState = new GameState(this.game);
        gameState.create();
		injectorIndex = this.game.acceleratorComponents[0];
        injectorSprite = this.game.mySprites[injectorIndex];
        injectorComponent = this.game.myComponents[injectorIndex];

		injectorWidth = injectorSprite.width ;

		xIni = injectorSprite.x + injectorSprite.width*0.5;
		yIni = injectorSprite.y + 14;
		margin = this.game.display.marginConnector;
		this.game.beam = {
			x:xIni,
			y:yIni,
			vx:0,
			energy : 1,
			sprite : beamSprite,
		}

		ellipse = {
			a:60,
			b:60,
			fa:1.02,
			fb:0.98,
		}

		beamSprite = this.game.add.sprite(xIni, yIni,'beamSprite');
		crossSectionSprite = this.game.add.sprite( $(window).width()/2 ,this.game.display.topBar.height,'crossSectionSprite');
		cavityRadius = crossSectionSprite.width;

		console.log("cavity radius ",cavityRadius);

 		this.game.physics.startSystem(Phaser.Physics.ARCADE);
  		this.game.physics.enable(beamSprite, Phaser.Physics.ARCADE);

   		this.game.physics.enable(crossSectionSprite, Phaser.Physics.ARCADE);

		graphics = this.game.add.graphics(0,0);

        graphics.lineStyle(8, 0xffd900);
        xEllipse = crossSectionSprite.x + crossSectionSprite.width*0.5;
        yEllipse = crossSectionSprite.y + crossSectionSprite.height*0.5;

        var style = { font: "44px Arial", fill: "#FFFFFF" };
		energyText = this.game.add.text($(window).width()/2 + 550 ,100, 'Beam Energy : '+this.game.beam.energy+" MeV", style);

   		console.log("creation ends");

	},


	update: function(){
			if (currentCompIndex > this.game.acceleratorComponents.length ){
				this.game.state.start("GameState");
			}
			// var graphics = this.game.add.graphics(0,0);
	        var style = { font: "45px Arial", fill: "#FFFFFF" };
			energyText.setText('Beam Energy : '+this.game.beam.energy+" MeV" );

			if (ellipse.a >= 0.5*cavityRadius || ellipse.b >= 0.5*cavityRadius){
				this.game.currentEvent = "beamLost";
				this.game.beam.vx = 0;
				ellipse.fa=1;
				ellipse.fb=1;
				this.game.add.text($(window).width()/2, $(window).height()/2, ' BEAM LOST !! ', style)
				explosionSprite = this.game.add.sprite(this.game.beam.x, this.game.beam.y - 85,'explosionSprite')
				explosionSprite.scale.setTo(3,3);
	  	 		this.game.physics.enable(explosionSprite, Phaser.Physics.ARCADE);

				// this.game.state.start("EventState");
			}
			//update beam position
			beamSprite.body.velocity.x = this.game.beam.vx;
			this.game.beam.x = beamSprite.x ;
			this.game.beam.vx = this.game.beam.energy*200 ;
			this.game.beamEnergyString = this.game.beam.energy.toString();
			console.log("beam x pos ", this.game.beam.x);
			//update cross section distribution
	        // graphics.drawEllipse(xEllipse, yEllipse, 100,100);
	        graphics.clear();
	        graphics.lineStyle(8, 0xffd900);
	        graphics.beginFill(0xffd900);
	        graphics.drawEllipse(xEllipse, yEllipse, ellipse.a, ellipse.b);
	        ellipse.a *= ellipse.fa ;
	        ellipse.b *= ellipse.fb ;

	        console.log(' # ',currentCompIndex);
			var currentComp = this.game.myComponents[this.game.acceleratorComponents[currentCompIndex]];
            var currentSprite = this.game.mySprites[this.game.acceleratorComponents[currentCompIndex]];
			console.log("salut", currentComp.model.name, ' # ',currentCompIndex);
			if (currentComp.type == 4){
				currentCompIndex = 100;
			}
			var xCurrentMax = xIni; // - injectorWidth/2 ;
			for (var i=0; i<currentCompIndex; i++){
                var curSprite = this.game.mySprites[this.game.acceleratorComponents[i]];
                var curComponent = this.game.myComponents[this.game.acceleratorComponents[i]];
				xCurrentMax += curSprite.width;
				if (curComponent.type == 2 || curComponent.type == 3){
					xCurrentMax -= curSprite.width;
				}
				else{
					xCurrentMax += margin;
				}
				if (curComponent.type==4){
					xCurrentMax -= margin;
				}
			}
			var xTotalMax = xIni;
			for (var i=0; i<this.game.acceleratorComponents.length; i++){
                var curSprite = this.game.mySprites[this.game.acceleratorComponents[i]];
				xTotalMax += curSprite.width;
			}



			var compHasNoSize = false;
			if (currentComp.type == 2 || currentComp.type == 3 ){
				compHasNoSize = true;
			}


			if (currentComp.type == 2 || currentComp.type == 3){
				var temp = ellipse.fa;
				ellipse.fa = ellipse.fb;
				ellipse.fb = temp;
				currentComp.didMatrix = true;
				currentCompIndex++;


			}

			console.log("la piece numero ",currentCompIndex, "s'étend jusque ",xCurrentMax )
			if (this.game.beam.x >= xCurrentMax - currentSprite.width*0.5 && currentComp.didMatrix==false){
				// RF CASE
				if (currentComp.type == 0){
					this.game.beam.energy += 2 ;
					console.log(" LE RF # ",currentCompIndex, "A FAIT EFFET");
				}
				currentComp.didMatrix = true;
			}

			if (this.game.beam.x >= xCurrentMax && compHasNoSize == false ){
				currentCompIndex ++ ;
			}

			if ( currentCompIndex > this.game.acceleratorComponents.length ){
				this.game.beam.x = xIni;
				this.game.beam.energy =  injectorComponent.model.maxEnergy[0];
				currentCompIndex = 0;
				currentComp = this.game.acceleratorComponents[0];
				ellipse.a=60;
				ellipse.b=60;
				ellipse.fa=1.03;
				ellipse.fb=0.98;
			}

	}

};


function downShop(item) {
//
    // item.text = "clicked";

}

function downRun(item) {

    // item.text = "clicked";

}

function downSimulate(item) {
    // item.text = "clicked ";
    this.game.state.start("SimulationState");

}
