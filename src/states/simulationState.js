import {Component} from "components";
import {EventnState} from "eventState"

export function SimulationState(game){
	this.game = game;
	console.log("game start");

};


var currentCompIndex = 0;
var beamSprite;
var crossSectionSprite;
var injectorWidth;
var xIni;
var yIni;
var crossSection;

var ellipse;
var xEllipse;
var yEllipse;
var graphics;
var cavityRadius;

var energyText;
var injector;

SimulationState.prototype = {
	preload: function(){
		console.log("preloading");
		this.game.load.image('beamSprite', "images/particle-flow/01.png");
		this.game.load.image('crossSectionSprite', 'images/cross-section/cross-section-visor.png')
	},

	create: function(){
		console.log("creation simulation state");

		injector = this.game.myComponents[0];
		injectorWidth = injector.sprite.width ;
		
		xIni = injector.sprite.x ; //injector.width*0.5;
		yIni = injector.sprite.y - injector.sprite.height*0.5;

		this.game.beam = {
			x:xIni,
			y:yIni,
			vx:0,
			energy : injector.model.maxEnergy[0],
			sprite : beamSprite,
		}

		ellipse = {
			a:60,
			b:60,
			fa:1.03,
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
        yEllipse = crossSectionSprite.y + crossSectionSprite.height*0.5
   
        var style = { font: "45px Arial", fill: "#FFFFFF" };
		energyText = this.game.add.text($(window).width()/2 + 400 ,100, 'Beam Energy : '+this.game.beam.energy+" MeV", style);



        // graphics.drawEllipse(xEllipse, yEllipse,  60, 60);
   		
   		// console.log("first part is a ",this.game.acceleratorComponents[0].model.name)
   		console.log("creation ends");

	},
  

	update: function(){
		if (currentCompIndex > this.game.acceleratorComponents.length ){
			currentCompIndex = 0;
		}

		// var graphics = this.game.add.graphics(0,0);
        var style = { font: "45px Arial", fill: "#FFFFFF" };
		energyText.setText('Beam Energy : '+this.game.beam.energy+" MeV" );
		console.log("param ellipse", ellipse.a," ",ellipse.b)
		// test if particle out of bound transverse
		if ( ellipse.a >= 0.5*cavityRadius || ellipse.b >= 0.5*cavityRadius){
			this.game.currentEvent = "beamLost";
			console.log("CACA")
			this.game.beam.vx = 0;
			ellipse.fa=1;
			ellipse.fb=1;
			this.game.add.text($(window).width()/2, $(window).height()/2, ' BEAM LOST !! ', style)
			// this.game.state.start("EventState");
		}
		//update beam position
		beamSprite.body.velocity.x = this.game.beam.vx;
		this.game.beam.x = beamSprite.x ;
		this.game.beam.vx = this.game.beam.energy*10 ;
		this.game.beamEnergyString = this.game.beam.energy.toString();
		//update cross section distribution
        // graphics.drawEllipse(xEllipse, yEllipse, 100,100);
        graphics.clear();
        graphics.lineStyle(8, 0xffd900);
        graphics.beginFill(0xffd900);
        graphics.drawEllipse(xEllipse, yEllipse, ellipse.a, ellipse.b);
        ellipse.a *= ellipse.fa ;
        ellipse.b *= ellipse.fb ;

        console.log(' # ',currentCompIndex);
		var currentComp = this.game.acceleratorComponents[currentCompIndex];
		console.log("salut", currentComp.model.name, ' # ',currentCompIndex);

		var xCurrentMax = xIni;
		for (var i=0; i<currentCompIndex; i++){
			xCurrentMax += this.game.acceleratorComponents[i].sprite.width;
		}
		var xTotalMax = xIni;
		for (var i=0; i<this.game.acceleratorComponents.length; i++){
			xTotalMax += this.game.acceleratorComponents[i].width;
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
			currentCompIndex++ ;
		}



		console.log("la piece numero ",currentCompIndex, "s'étend jusque ",xCurrentMax )
		if (this.game.beam.x >= xCurrentMax - currentComp.sprite.width*0.5 && currentComp.didMatrix==false){
			// RF CASE 
			if (currentComp.type == 0){
				this.game.beam.energy += currentComp.model.maxVoltage[currentComp.upgrade];
				console.log(" LE RF # ",currentCompIndex, "A FAIT EFFET");
			}
			currentComp.didMatrix = true;
		}

		if (this.game.beam.x >= xCurrentMax && compHasNoSize == false){
			currentCompIndex ++ ;
		}

		if ( currentCompIndex > this.game.acceleratorComponents.length ){
			this.game.beam.x = xIni;
			this.game.beam.energy =  injector.model.maxEnergy[0];
			currentCompIndex = 0;
			currentComp = acceleratorComponents[0];
			ellipse.a=60;
			ellipse.b=60;
			ellipse.fa=1.03;
			ellipse.fb=0.98;
		}

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
    this.game.state.start("SimulationState");

}