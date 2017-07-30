(function () {
'use strict';

var listComponents = [{
       "name": "RF Cavity",
       "shopCategory": "Radiofrequency Cavities",
       "shopDescription": ["Max Voltage: 5", "Max Voltage: 10", "Max Voltage: 25"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "A radiofrequency (RF) cavity is a metallic chamber that contains an electromagnetic field. Its primary purpose is to accelerate charged particles. RF cavities can be structured like beads on a string, where the beads are the cavities and the string is the beam pipe of a particle accelerator, through which particles travel in a vacuum.",
       "texture": ["rf-bronze.png", "rf-silver.png", "rf-gold.png"],
       "aRatio": 7.109,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "rf-large.png",
       "price": [10, 15, 25],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxVoltage": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "rf.html"
}, {
       "name": "Vacuum Chamber",
       "shopCategory": "Vacuum Chambers",
       "shopDescription": ["Purity: 0.1", "Purity: 0.4", "Purity: 0.9"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Vacuum chamber are the elementary components of your accelerator. Your particle beam the cleanest space to circulate. That is why each device is built around a vacuum chamber.\nThese vacuum chamber pieces only represent parts of circuit that does not impact the speed either the transversal shape of your beam.",
       "texture": ["vacuum-tube-bronze.png", "vacuum-tube-silver.png", "vacuum-tube-gold.png"],
       "aRatio": 6.9,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "vacuum-tube-large.png",
       "price": [1, 3, 6],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxQuality": [1, 2, 3],
       "tutorial": "vacuum-chamber.html"
}, {
       "name": "Quadrupole Magnet x",
       "shopCategory": "Quadrupole Magnets in X",
       "shopDescription": ["Max B-field: 1 G Gauss", "Max B-field: 2 G Gauss", "Max B-field: 5 G Gauss"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Quadrupoles enable you to control the shape of your beam. Acting as optical lenses, they focus your beam in x or y axis and by the way also defocus it in the opposite axis. Be very careful to bear in mind not letting your beam diverge until touching the cavity boarder. Otherwise you would loose it !",
       "texture": ["quadrupole-x-bronze.png", "quadrupole-x-silver.png", "quadrupole-x-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "aRatio": 1,
       "icon": "dipole-large.png",
       "price": [15, 25, 45],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "focusing": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "quadrupole.html"
}, {
       "name": "Quadrupole Magnet y",
       "shopCategory": "Quadrupole Magnets in Y",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Quadrupoles enable you to control the shape of your beam. Acting as optical lenses, they focus your beam in x or y axis and by the way also defocus it in the opposite axis. Be very careful to bear in mind not letting your beam diverge until touching the cavity boarder. Otherwise you would loose it !",
       "texture": ["quadrupole-y-bronze.png", "quadrupole-y-silver.png", "quadrupole-y-gold.png"],
       "aRatio": 1,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "quadyIcon.png",
       "price": [15, 25, 50],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxIntensity": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "quadrupole.html"
}, {
       "name": "Detector",
       "shopCategory": "Detectors",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Just as hunters can identify animals from tracks in mud or snow, physicists identify subatomic particles from the traces they leave in detectors. The detectors gather clues about the particles – including their speed, mass and charge – from which physicists can work out a particle's identity.\nPut a detector at some point of your accelerator to enable physicists to study the particle and make new discoveries !",
       "texture": ["detector-bronze.png", "detector-silver.png", "detector-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "detector-large.png",
       "price": [15, 25, 50],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxIntensity": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "detector.html"
}, {
       "name": "Proton Injector",
       "shopCategory": "Proton Injectors",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "An injector actually stand for a complex installation, including at least a particle source. No panic, you don't have to worry about its components. Simply consider it as a black box that provide you a beam of one kind of particles (electrons, positrons, protons or antiprotons) at a given energy, in a beam with a given shape.",
       "texture": ["injector-bronze.png", "injector-silver.png", "injector-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "injector-large.png",
       "price": [0, 10, 20],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxEnergy": [50, 100, 400],
       "maxQuality": [1, 2, 3],
       "tutorial": "injector.html"
}];

function Component(type, upgrade) {
    /* Inputs
        - type: integer representing the id of the component type in the json
                model
        - upgrade : integer representing the upgrade number of the component
    */
    this.type = type;
    this.upgrade = upgrade;
    this.inAccelerator = false;
    this.position = undefined;
    this.originalPosition = undefined;
    this.didMatrix = false; // true if the component applied its effect
    this.model = listComponents[type];
}

var screenHeight = $(window).height();
var screenWidth = $(window).width();

function GameState(game) {
    this.game = game;
    this.game.money = 100;
    this.game.sizeTerritory = 10;
    this.indexInjector = 5;

    this.game.myComponents = [new Component(this.indexInjector, 0), new Component(0, 0), new Component(0, 1), new Component(0, 2), new Component(1, 0), new Component(1, 1), new Component(1, 2), new Component(2, 0), new Component(2, 1), new Component(2, 2), new Component(3, 0), new Component(3, 1), new Component(3, 2), new Component(4, 0)];
    this.game.mySprites = [];
    this.game.acceleratorComponents = [];

    this.widthInventory = 400;
    this.heightTopBar = 30;
    this.heightButton = 100;
    this.fontTextButton = 30;
    this.inventoryMargin = {
        x: 10,
        y: 20
    };
    this.scaleFactorSprites = 0.5;
    this.marginConnector = 64 * this.scaleFactorSprites;
    this.blue = 0x0053A1;
    this.yellow = 0xF1C40F;
    this.red = 0xE74C3C;
    this.green = 0x2ecc71;

    this.game.display = {
        inventory: {
            width: this.widthInventory,
            height: $(window).height()
        },
        topBar: {
            width: $(window).width(),
            height: this.heightTopBar
        },
        marginConnector: this.marginConnector
    };
}

GameState.prototype = {
    preload: function preload() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var obj = this;
        this.game.myComponents.forEach(function (compo, iCompo) {
            obj.game.load.image(compo.model.name + iCompo.toString(), '../images/components/' + compo.model.texture[compo.upgrade]);
        });
    },
    create: function create() {

        this.createInterface();
        this.loadModel();
        var obj = this;

        this.game.compoGroup = this.game.add.group();
        this.game.compoGroup.inputEnableChildren = true;

        var nextY = 100;
        this.game.mySprites = [];
        this.game.myComponents.forEach(function (compo, iCompo) {
            if (!compo.inAccelerator) {
                var spriteCompo = obj.game.compoGroup.create(0, 0, compo.model.name + iCompo.toString());
                obj.game.mySprites.push(spriteCompo);

                spriteCompo.scale.setTo(obj.scaleFactorSprites, obj.scaleFactorSprites);

                if (compo.position) {
                    spriteCompo.position.x = compo.position.x;
                    spriteCompo.position.y = compo.position.y;
                } else {
                    spriteCompo.position.x = obj.widthInventory / 2 - spriteCompo.width / 2;
                    spriteCompo.position.y = nextY;
                    compo.position = spriteCompo.position;
                    compo.originalPosition = spriteCompo.position.clone();
                }
                obj.game.physics.arcade.enable(spriteCompo);

                spriteCompo.inputEnabled = true;
                spriteCompo.input.enableDrag();
                spriteCompo.events.onDragStart.add(function (currentSprite) {
                    obj.startDrag(iCompo);
                }, obj);
                spriteCompo.events.onDragStop.add(function (currentSprite) {
                    obj.stopDrag(iCompo);
                }, obj);

                nextY = spriteCompo.position.y + spriteCompo.height + obj.inventoryMargin.y;
            }
        });
        this.game.input.mouse.mouseWheelCallback = this.zoomEvent;
        this.saveModel();
    },

    update: function update() {},

    saveModel: function saveModel() {
        localStorage.setItem("myComponents", JSON.stringify(this.game.myComponents));
        localStorage.setItem("acceleratorComponents", JSON.stringify(this.game.acceleratorComponents));
    },

    loadModel: function loadModel() {
        this.game.myComponents = JSON.parse(localStorage.getItem("myComponents"));
        this.game.acceleratorComponents = JSON.parse(localStorage.getItem("acceleratorComponents"));
    },

    createInterface: function createInterface() {
        this.game.stage.backgroundColor = this.blue;
        var graphics = this.game.add.graphics(0, 0);

        // Top bar
        graphics.beginFill("#000000", 1);
        graphics.drawRect(0, 0, $(window).width(), this.heightTopBar);

        // Inventory
        graphics.beginFill("#000000", 0.4);
        graphics.drawRect(0, this.heightTopBar, this.widthInventory, $(window).height());

        // Right panel
        graphics.drawRect($(window).width() - 250, 80, 230, 500);

        // Shop button
        graphics.beginFill(this.yellow, 1);
        graphics.drawRect(0, $(window).height() - this.heightButton, this.widthInventory, 100);

        // Run button
        graphics.beginFill(this.red, 1);
        graphics.drawRect($(window).width() - 250, 480, 230, this.heightButton);

        // Simulate button
        graphics.beginFill(this.green, 1);
        graphics.drawRect($(window).width() - 250, 380, 230, this.heightButton);

        // SHOP Text
        var text = this.game.add.text(130, $(window).height() - this.heightButton / 2 - this.fontTextButton / 2, "SHOP", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downShop$1, this);
        //this.stage.addChild(text);

        //RUN Button
        var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downRun$1, this);
        //this.stage.addChild(text);

        //SIMULATE Button
        var text = this.game.add.text($(window).width() - 215, 415, "SIMULATE", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downSimulate$1, this);

        //Inventory Text
        var text = this.game.add.text(10, 40, "Inventory", { font: this.fontTextButton.toString() + "px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900" });

        //Center-of-Mass energy
        var text = this.game.add.text($(window).width() - 240, 90, "Center-of-Mass\nenergy", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Peak luminosity
        var text = this.game.add.text($(window).width() - 240, 190, "Peak luminosity", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Last particle found at
        var text = this.game.add.text($(window).width() - 240, 270, "Last particle\nfound at", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Text For Top Menu bar
        var text = this.game.add.text(15, 8, "TRIAL", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "700" });
        // Money
        var text = this.game.add.text(130, 8, this.game.money.toString() + "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900" });
        // Achievements link
        var text = this.game.add.text($(window).width() - 200, 8, "ACHIEVEMENTS", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(this.downAchievements, this);
    },

    startDrag: function startDrag(indexComponent) {
        /* If we drag an object from the accelerator (ie lastSprite == currentSprite),
        it should be popped from the accelerator at the beginning
        */
        var obj = this;
        var currentComponent = this.game.myComponents[indexComponent];
        if (obj.game.acceleratorComponents.length != 0) {
            var indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var lastComponent = this.game.myComponents[indexLastComponent];
            if (lastComponent == currentComponent) {
                obj.game.acceleratorComponents.pop();
                if (obj.game.acceleratorComponents.length != 0) {
                    indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
                    var lastSprite = this.game.mySprites[indexLastComponent];
                    lastSprite.input.draggable = true;
                }
            }
        }
    },

    stopDrag: function stopDrag(indexComponent) {
        var obj = this;
        var currentComponent = this.game.myComponents[indexComponent];
        var currentSprite = this.game.mySprites[indexComponent];

        if (currentComponent.model.name == "Proton Injector") {
            if (currentSprite.position.x > this.widthInventory) {
                if (obj.game.acceleratorComponents.length == 0) {
                    obj.game.acceleratorComponents.push(indexComponent);
                }
            } else {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        } else if (obj.game.acceleratorComponents.length != 0) {
            var indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var lastComponent = this.game.myComponents[indexLastComponent];
            var lastSprite = this.game.mySprites[indexLastComponent];
            if (!this.game.physics.arcade.overlap(currentSprite, lastSprite, function () {
                /* If it overlapped */
                lastSprite.input.draggable = false;
                currentSprite.position.x = lastSprite.position.x + lastSprite.width - obj.marginConnector;
                currentSprite.position.y = lastSprite.position.y + lastSprite.height / 2 - currentSprite.height / 2;
                currentSprite.anchor.setTo(lastSprite.anchor.x, lastSprite.anchor.y);
                obj.game.acceleratorComponents.push(indexComponent);
            })) {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        } else {
            // This is not an injector and we have nothing on the territory
            currentSprite.position.copyFrom(currentComponent.originalPosition);
        }
        currentComponent.position = currentSprite.position.clone();
        this.saveModel();
    },

    zoomEvent: function zoomEvent(event) {},

    downAchievements: function downAchievements(event) {
        this.game.state.start("AchievementsState");
    }
};

function downShop$1(item) {
    this.game.state.start("ShopState");
}

function downRun$1(item) {

    item.text = "clicked";
}

function downSimulate$1(item) {
    item.text = "clicked ";
    this.game.state.start("SimulationState");
}

function SimulationState(game) {
	this.game = game;
	console.log("Simulation Start");
}

var currentCompIndex = 0;
var beamSprite;
var crossSectionSprite;
var injectorWidth;
var injectorIndex;
var injectorSprite;
var injectorComponent;
var xIni;
var yIni;
var margin;

var ellipse;
var xEllipse;
var yEllipse;
var graphics;
var cavityRadius;

var energyText;
var explosionSprite;

SimulationState.prototype = {
	preload: function preload() {
		console.log("preloading");
		this.game.load.image('beamSprite', "images/particle-flow/beam-1.png");
		this.game.load.image('crossSectionSprite', 'images/cross-section/cross-section-visor.png');
		this.game.load.image('explosionSprite', 'images/components/explosion.png');
	},
	create: function create() {
		console.log("creation simulation state");

		var gameState = new GameState(this.game);
		gameState.create();
		injectorIndex = this.game.acceleratorComponents[0];
		injectorSprite = this.game.mySprites[injectorIndex];
		injectorComponent = this.game.myComponents[injectorIndex];

		injectorWidth = injectorSprite.width;

		xIni = injectorSprite.x + injectorSprite.width * 0.5;
		yIni = injectorSprite.y + 14;
		margin = this.game.display.marginConnector;
		this.game.beam = {
			x: xIni,
			y: yIni,
			vx: 0,
			energy: 1,
			sprite: beamSprite
		};

		ellipse = {
			a: 60,
			b: 60,
			fa: 1.02,
			fb: 0.98
		};

		beamSprite = this.game.add.sprite(xIni, yIni, 'beamSprite');
		crossSectionSprite = this.game.add.sprite($(window).width() / 2, this.game.display.topBar.height, 'crossSectionSprite');
		cavityRadius = crossSectionSprite.width;

		console.log("cavity radius ", cavityRadius);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.enable(beamSprite, Phaser.Physics.ARCADE);

		this.game.physics.enable(crossSectionSprite, Phaser.Physics.ARCADE);

		graphics = this.game.add.graphics(0, 0);

		graphics.lineStyle(8, 0xffd900);
		xEllipse = crossSectionSprite.x + crossSectionSprite.width * 0.5;
		yEllipse = crossSectionSprite.y + crossSectionSprite.height * 0.5;

		var style = { font: "44px Arial", fill: "#FFFFFF" };
		energyText = this.game.add.text($(window).width() / 2 + 550, 100, 'Beam Energy : ' + this.game.beam.energy + " MeV", style);

		console.log("creation ends");
	},

	update: function update() {
		if (currentCompIndex > this.game.acceleratorComponents.length) {
			this.game.state.start("GameState");
		}
		// var graphics = this.game.add.graphics(0,0);
		var style = { font: "45px Arial", fill: "#FFFFFF" };
		energyText.setText('Beam Energy : ' + this.game.beam.energy + " MeV");

		if (ellipse.a >= 0.5 * cavityRadius || ellipse.b >= 0.5 * cavityRadius) {
			this.game.currentEvent = "beamLost";
			this.game.beam.vx = 0;
			ellipse.fa = 1;
			ellipse.fb = 1;
			this.game.add.text($(window).width() / 2, $(window).height() / 2, ' BEAM LOST !! ', style);
			explosionSprite = this.game.add.sprite(this.game.beam.x, this.game.beam.y - 85, 'explosionSprite');
			explosionSprite.scale.setTo(3, 3);
			this.game.physics.enable(explosionSprite, Phaser.Physics.ARCADE);

			// this.game.state.start("EventState");
		}
		//update beam position
		beamSprite.body.velocity.x = this.game.beam.vx;
		this.game.beam.x = beamSprite.x;
		this.game.beam.vx = this.game.beam.energy * 200;
		this.game.beamEnergyString = this.game.beam.energy.toString();
		console.log("beam x pos ", this.game.beam.x);
		//update cross section distribution
		// graphics.drawEllipse(xEllipse, yEllipse, 100,100);
		graphics.clear();
		graphics.lineStyle(8, 0xffd900);
		graphics.beginFill(0xffd900);
		graphics.drawEllipse(xEllipse, yEllipse, ellipse.a, ellipse.b);
		ellipse.a *= ellipse.fa;
		ellipse.b *= ellipse.fb;

		console.log(' # ', currentCompIndex);
		var currentComp = this.game.myComponents[this.game.acceleratorComponents[currentCompIndex]];
		var currentSprite = this.game.mySprites[this.game.acceleratorComponents[currentCompIndex]];
		console.log("salut", currentComp.model.name, ' # ', currentCompIndex);
		if (currentComp.type == 4) {
			currentCompIndex = 100;
		}
		var xCurrentMax = xIni; // - injectorWidth/2 ;
		for (var i = 0; i < currentCompIndex; i++) {
			var curSprite = this.game.mySprites[this.game.acceleratorComponents[i]];
			var curComponent = this.game.myComponents[this.game.acceleratorComponents[i]];
			xCurrentMax += curSprite.width;
			if (curComponent.type == 2 || curComponent.type == 3) {
				xCurrentMax -= curSprite.width;
			} else {
				xCurrentMax += margin;
			}
			if (curComponent.type == 4) {
				xCurrentMax -= margin;
			}
		}
		var xTotalMax = xIni;
		for (var i = 0; i < this.game.acceleratorComponents.length; i++) {
			var curSprite = this.game.mySprites[this.game.acceleratorComponents[i]];
			xTotalMax += curSprite.width;
		}

		var compHasNoSize = false;
		if (currentComp.type == 2 || currentComp.type == 3) {
			compHasNoSize = true;
		}

		if (currentComp.type == 2 || currentComp.type == 3) {
			var temp = ellipse.fa;
			ellipse.fa = ellipse.fb;
			ellipse.fb = temp;
			currentComp.didMatrix = true;
			currentCompIndex++;
		}

		console.log("la piece numero ", currentCompIndex, "s'étend jusque ", xCurrentMax);
		if (this.game.beam.x >= xCurrentMax - currentSprite.width * 0.5 && currentComp.didMatrix == false) {
			// RF CASE
			if (currentComp.type == 0) {
				this.game.beam.energy += 2;
				console.log(" LE RF # ", currentCompIndex, "A FAIT EFFET");
			}
			currentComp.didMatrix = true;
		}

		if (this.game.beam.x >= xCurrentMax && compHasNoSize == false) {
			currentCompIndex++;
		}

		if (currentCompIndex > this.game.acceleratorComponents.length) {
			this.game.beam.x = xIni;
			this.game.beam.energy = injectorComponent.model.maxEnergy[0];
			currentCompIndex = 0;
			currentComp = this.game.acceleratorComponents[0];
			ellipse.a = 60;
			ellipse.b = 60;
			ellipse.fa = 1.03;
			ellipse.fb = 0.98;
		}
	}

};

function GameState$1(game) {
    this.game = game;
    this.game.money = 100;
    this.game.sizeTerritory = 10;
    this.indexInjector = 5;

    this.game.myComponents = [new Component(this.indexInjector, 0), new Component(0, 0), new Component(0, 1), new Component(0, 2), new Component(1, 0), new Component(1, 1), new Component(1, 2), new Component(2, 0), new Component(2, 1), new Component(2, 2), new Component(3, 0), new Component(3, 1), new Component(3, 2), new Component(4, 0)];
    this.game.mySprites = [];
    this.game.acceleratorComponents = [];

    this.widthInventory = 400;
    this.heightTopBar = 30;
    this.heightButton = 100;
    this.fontTextButton = 30;
    this.inventoryMargin = {
        x: 10,
        y: 20
    };
    this.scaleFactorSprites = 0.5;
    this.marginConnector = 64 * this.scaleFactorSprites;
    this.blue = 0x0053A1;
    this.yellow = 0xF1C40F;
    this.red = 0xE74C3C;
    this.green = 0x2ecc71;

    this.game.display = {
        inventory: {
            width: this.widthInventory,
            height: $(window).height()
        },
        topBar: {
            width: $(window).width(),
            height: this.heightTopBar
        },
        marginConnector: this.marginConnector
    };
}

GameState$1.prototype = {
    preload: function preload() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var obj = this;
        this.game.myComponents.forEach(function (compo, iCompo) {
            obj.game.load.image(compo.model.name + iCompo.toString(), '../images/components/' + compo.model.texture[compo.upgrade]);
        });
    },
    create: function create() {

        this.createInterface();
        this.loadModel();
        var obj = this;

        this.game.compoGroup = this.game.add.group();
        this.game.compoGroup.inputEnableChildren = true;

        var nextY = 100;
        this.game.mySprites = [];
        this.game.myComponents.forEach(function (compo, iCompo) {
            if (!compo.inAccelerator) {
                var spriteCompo = obj.game.compoGroup.create(0, 0, compo.model.name + iCompo.toString());
                obj.game.mySprites.push(spriteCompo);

                spriteCompo.scale.setTo(obj.scaleFactorSprites, obj.scaleFactorSprites);

                if (compo.position) {
                    spriteCompo.position.x = compo.position.x;
                    spriteCompo.position.y = compo.position.y;
                } else {
                    spriteCompo.position.x = obj.widthInventory / 2 - spriteCompo.width / 2;
                    spriteCompo.position.y = nextY;
                    compo.position = spriteCompo.position;
                    compo.originalPosition = spriteCompo.position.clone();
                }
                obj.game.physics.arcade.enable(spriteCompo);

                spriteCompo.inputEnabled = true;
                spriteCompo.input.enableDrag();
                spriteCompo.events.onDragStart.add(function (currentSprite) {
                    obj.startDrag(iCompo);
                }, obj);
                spriteCompo.events.onDragStop.add(function (currentSprite) {
                    obj.stopDrag(iCompo);
                }, obj);

                nextY = spriteCompo.position.y + spriteCompo.height + obj.inventoryMargin.y;
            }
        });
        this.game.input.mouse.mouseWheelCallback = this.zoomEvent;
        this.saveModel();
    },

    update: function update() {},

    saveModel: function saveModel() {
        localStorage.setItem("myComponents", JSON.stringify(this.game.myComponents));
        localStorage.setItem("acceleratorComponents", JSON.stringify(this.game.acceleratorComponents));
    },

    loadModel: function loadModel() {
        this.game.myComponents = JSON.parse(localStorage.getItem("myComponents"));
        this.game.acceleratorComponents = JSON.parse(localStorage.getItem("acceleratorComponents"));
    },

    createInterface: function createInterface() {
        this.game.stage.backgroundColor = this.blue;
        var graphics = this.game.add.graphics(0, 0);

        // Top bar
        graphics.beginFill("#000000", 1);
        graphics.drawRect(0, 0, $(window).width(), this.heightTopBar);

        // Inventory
        graphics.beginFill("#000000", 0.4);
        graphics.drawRect(0, this.heightTopBar, this.widthInventory, $(window).height());

        // Right panel
        graphics.drawRect($(window).width() - 250, 80, 230, 500);

        // Shop button
        graphics.beginFill(this.yellow, 1);
        graphics.drawRect(0, $(window).height() - this.heightButton, this.widthInventory, 100);

        // Run button
        graphics.beginFill(this.red, 1);
        graphics.drawRect($(window).width() - 250, 480, 230, this.heightButton);

        // Simulate button
        graphics.beginFill(this.green, 1);
        graphics.drawRect($(window).width() - 250, 380, 230, this.heightButton);

        // SHOP Text
        var text = this.game.add.text(130, $(window).height() - this.heightButton / 2 - this.fontTextButton / 2, "SHOP", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downShop$3, this);
        //this.stage.addChild(text);

        //RUN Button
        var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downRun$3, this);
        //this.stage.addChild(text);

        //SIMULATE Button
        var text = this.game.add.text($(window).width() - 215, 415, "SIMULATE", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(downSimulate$3, this);

        //Inventory Text
        var text = this.game.add.text(10, 40, "Inventory", { font: this.fontTextButton.toString() + "px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900" });

        //Center-of-Mass energy
        var text = this.game.add.text($(window).width() - 240, 90, "Center-of-Mass\nenergy", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Peak luminosity
        var text = this.game.add.text($(window).width() - 240, 190, "Peak luminosity", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Last particle found at
        var text = this.game.add.text($(window).width() - 240, 270, "Last particle\nfound at", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900" });

        //Text For Top Menu bar
        var text = this.game.add.text(15, 8, "TRIAL", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "700" });
        // Money
        var text = this.game.add.text(130, 8, this.game.money.toString() + "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900" });
        // Achievements link
        var text = this.game.add.text($(window).width() - 200, 8, "ACHIEVEMENTS", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "900" });
        text.inputEnabled = true;
        text.events.onInputDown.add(this.downAchievements, this);
    },

    startDrag: function startDrag(indexComponent) {
        /* If we drag an object from the accelerator (ie lastSprite == currentSprite),
        it should be popped from the accelerator at the beginning
        */
        var obj = this;
        var currentComponent = this.game.myComponents[indexComponent];
        if (obj.game.acceleratorComponents.length != 0) {
            var indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var lastComponent = this.game.myComponents[indexLastComponent];
            if (lastComponent == currentComponent) {
                obj.game.acceleratorComponents.pop();
                if (obj.game.acceleratorComponents.length != 0) {
                    indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
                    var lastSprite = this.game.mySprites[indexLastComponent];
                    lastSprite.input.draggable = true;
                }
            }
        }
    },

    stopDrag: function stopDrag(indexComponent) {
        var obj = this;
        var currentComponent = this.game.myComponents[indexComponent];
        var currentSprite = this.game.mySprites[indexComponent];

        if (currentComponent.model.name == "Proton Injector") {
            if (currentSprite.position.x > this.widthInventory) {
                if (obj.game.acceleratorComponents.length == 0) {
                    obj.game.acceleratorComponents.push(indexComponent);
                }
            } else {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        } else if (obj.game.acceleratorComponents.length != 0) {
            var indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var lastComponent = this.game.myComponents[indexLastComponent];
            var lastSprite = this.game.mySprites[indexLastComponent];
            if (!this.game.physics.arcade.overlap(currentSprite, lastSprite, function () {
                /* If it overlapped */
                lastSprite.input.draggable = false;
                currentSprite.position.x = lastSprite.position.x + lastSprite.width - obj.marginConnector;
                currentSprite.position.y = lastSprite.position.y + lastSprite.height / 2 - currentSprite.height / 2;
                currentSprite.anchor.setTo(lastSprite.anchor.x, lastSprite.anchor.y);
                obj.game.acceleratorComponents.push(indexComponent);
            })) {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        } else {
            // This is not an injector and we have nothing on the territory
            currentSprite.position.copyFrom(currentComponent.originalPosition);
        }
        currentComponent.position = currentSprite.position.clone();
        this.saveModel();
    },

    zoomEvent: function zoomEvent(event) {},

    downAchievements: function downAchievements(event) {
        this.game.state.start("AchievementsState");
    }
};

function downShop$3(item) {
    this.game.state.start("ShopState");
}

function downRun$3(item) {

    item.text = "clicked";
}

function downSimulate$3(item) {
    item.text = "clicked ";
    this.game.state.start("SimulationState");
}

function AchievementsState(game) {
    console.log("Starting the achievements event");
    this.game = game;
    this.stateSize = {
        width: $(window).width() * 0.5,
        height: $(window).height() * 0.7
    };
    this.statePosition = {
        x: $(window).width() / 2 - this.stateSize.width / 2,
        y: $(window).height() / 2 - this.stateSize.height / 2
    };
    this.achievementsText = {
        x: 8 + this.statePosition.x,
        y: 5 + this.statePosition.y
    };
    this.darkBlue = 0x1F3A93;
}

AchievementsState.prototype = {
    preload: function preload() {
        console.log("Preloading");
        this.game.load.image('cross', '../images/buttons/button-close.png');
        this.game.load.image('trophy1', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy2', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy3', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy4', '../images/achievements/achievements-generic.png');
    },
    create: function create() {
        var gameState = new GameState(this.game);
        gameState.create();
        // Draw achievements panel
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(0, 0.3);
        graphics.drawRect(this.statePosition.x - 5, this.statePosition.y - 5, this.stateSize.width + 10, this.stateSize.height + 10);
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(this.darkBlue, 1);
        graphics.drawRect(this.statePosition.x, this.statePosition.y, this.stateSize.width, this.stateSize.height);

        //Achievements
        var text = this.game.add.text(this.achievementsText.x, this.achievementsText.y, "Achievements", { font: "30px Arial", fill: "#FFFFFF" });
        text.strokeThickness = 2;
        text.fontWeight = 'bold';

        //Line
        var line = new Phaser.Line(this.statePosition.x, this.achievementsText.y + 38, this.statePosition.x + this.stateSize.width, this.achievementsText.y + 38);
        var graphics = this.game.add.graphics(0, 0);
        graphics.lineStyle(4, 0xffffff, 1);
        graphics.moveTo(line.start.x, line.start.y); //moving position of graphic if you draw mulitple lines
        graphics.lineTo(line.end.x, line.end.y);
        graphics.endFill();

        //cross
        var crossImage = this.game.add.image(this.statePosition.x + this.stateSize.width - 35, this.achievementsText.y, 'cross');
        crossImage.inputEnabled = true;
        crossImage.events.onInputDown.add(imageClicked, this);

        var trophiesImageX = this.statePosition.x + 3;

        //image1----------------------
        var trophy1 = this.game.add.image(trophiesImageX, this.achievementsText.y + 65, 'trophy1');
        //text of image1
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 65, "First accelerator", { font: "22px Arial", fill: "#FFFFFF" });
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 92, "Build your first accelerator.", { font: "22px Arial", fill: "#FFFFFF" });

        //image2---------------------
        var trophy2 = this.game.add.image(trophiesImageX, this.achievementsText.y + 170, 'trophy2');
        //text of image2
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 165, "First collision", { font: "22px Arial", fill: "#FFFFFF" });
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 188, "Run your accelerator and collide particles in a detector for the first time.", { font: "22px Arial", fill: "#FFFFFF" });

        //image3----------------------
        var trophy3 = this.game.add.image(trophiesImageX, this.achievementsText.y + 275, 'trophy3');
        //text of image3
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 270, "First discovery", { font: "22px Arial", fill: "#FFFFFF" });
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 293, "Discover your first particle.", { font: "22px Arial", fill: "#FFFFFF" });

        //image4----------------------
        var trophy4 = this.game.add.image(trophiesImageX, this.achievementsText.y + 380, 'trophy4');
        //text of image4
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 375, "FCC - First Class Collider", { font: "22px Arial", fill: "#FFFFFF" });
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 398, "Build an accelerator entirely from first class components.", { font: "22px Arial", fill: "#FFFFFF" });
    }
};

function imageClicked() {
    this.game.state.start("GameState");
}

var listComponents$1 = [{
       "name": "RF Cavity",
       "shopCategory": "Radiofrequency Cavities",
       "shopDescription": ["Max Voltage: 5", "Max Voltage: 10", "Max Voltage: 25"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "A radiofrequency (RF) cavity is a metallic chamber that contains an electromagnetic field. Its primary purpose is to accelerate charged particles. RF cavities can be structured like beads on a string, where the beads are the cavities and the string is the beam pipe of a particle accelerator, through which particles travel in a vacuum.",
       "texture": ["rf-bronze.png", "rf-silver.png", "rf-gold.png"],
       "aRatio": 7.109,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "rf-large.png",
       "price": [10, 15, 25],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxVoltage": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "rf.html"
}, {
       "name": "Vacuum Chamber",
       "shopCategory": "Vacuum Chambers",
       "shopDescription": ["Purity: 0.1", "Purity: 0.4", "Purity: 0.9"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Vacuum chamber are the elementary components of your accelerator. Your particle beam the cleanest space to circulate. That is why each device is built around a vacuum chamber.\nThese vacuum chamber pieces only represent parts of circuit that does not impact the speed either the transversal shape of your beam.",
       "texture": ["vacuum-tube-bronze.png", "vacuum-tube-silver.png", "vacuum-tube-gold.png"],
       "aRatio": 6.9,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "vacuum-tube-large.png",
       "price": [1, 3, 6],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxQuality": [1, 2, 3],
       "tutorial": "vacuum-chamber.html"
}, {
       "name": "Quadrupole Magnet x",
       "shopCategory": "Quadrupole Magnets in X",
       "shopDescription": ["Max B-field: 1 G Gauss", "Max B-field: 2 G Gauss", "Max B-field: 5 G Gauss"],
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Quadrupoles enable you to control the shape of your beam. Acting as optical lenses, they focus your beam in x or y axis and by the way also defocus it in the opposite axis. Be very careful to bear in mind not letting your beam diverge until touching the cavity boarder. Otherwise you would loose it !",
       "texture": ["quadrupole-x-bronze.png", "quadrupole-x-silver.png", "quadrupole-x-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "aRatio": 1,
       "icon": "dipole-large.png",
       "price": [15, 25, 45],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "focusing": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "quadrupole.html"
}, {
       "name": "Quadrupole Magnet y",
       "shopCategory": "Quadrupole Magnets in Y",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Quadrupoles enable you to control the shape of your beam. Acting as optical lenses, they focus your beam in x or y axis and by the way also defocus it in the opposite axis. Be very careful to bear in mind not letting your beam diverge until touching the cavity boarder. Otherwise you would loose it !",
       "texture": ["quadrupole-y-bronze.png", "quadrupole-y-silver.png", "quadrupole-y-gold.png"],
       "aRatio": 1,
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "quadyIcon.png",
       "price": [15, 25, 50],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxIntensity": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "quadrupole.html"
}, {
       "name": "Detector",
       "shopCategory": "Detectors",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "Just as hunters can identify animals from tracks in mud or snow, physicists identify subatomic particles from the traces they leave in detectors. The detectors gather clues about the particles – including their speed, mass and charge – from which physicists can work out a particle's identity.\nPut a detector at some point of your accelerator to enable physicists to study the particle and make new discoveries !",
       "texture": ["detector-bronze.png", "detector-silver.png", "detector-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "detector-large.png",
       "price": [15, 25, 50],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxIntensity": [10, 20, 30],
       "maxQuality": [1, 2, 3],
       "tutorial": "detector.html"
}, {
       "name": "Proton Injector",
       "shopCategory": "Proton Injectors",
       "upgradeName": ["Bronze", "Silver", "Gold"],
       "description": "An injector actually stand for a complex installation, including at least a particle source. No panic, you don't have to worry about its components. Simply consider it as a black box that provide you a beam of one kind of particles (electrons, positrons, protons or antiprotons) at a given energy, in a beam with a given shape.",
       "texture": ["injector-bronze.png", "injector-silver.png", "injector-gold.png"],
       "colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
       "icon": "injector-large.png",
       "price": [0, 10, 20],
       "matrix": [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]],
       "maxEnergy": [50, 100, 400],
       "maxQuality": [1, 2, 3],
       "tutorial": "injector.html"
}];

function ShopState(game) {
    //Jordan
    this.game = game;
    console.log("Starting ShopState");
}

ShopState.prototype = {
    preload: function preload() {
        console.log("Preloading");
        var obj = this;
        listComponents$1.slice(0, 3).forEach(function (compo) {
            obj.game.load.image(compo.name + "img", '../images/shop/' + compo.icon);
            compo.upgradeName.forEach(function (upgName, k) {
                obj.game.load.image(upgName + compo.name + "txt", '../images/components/' + compo.texture[k]);
            });
        });
    },

    create: function create() {
        var obj = this;

        var buyColor = "0x00EE76";
        var buyFont = "30px Arial";
        var wh = $(window).height() - 60;
        var ww = $(window).width();
        var fs = ww / 1000.;
        var imgS = ww / 12;
        var compImages = [];
        var compTextures = [];
        var compButtons = [];
        var buyTexts = [];
        var infoTexts = [];
        var titleTexts = [];
        var categoryTexts = [];

        var shopText = obj.game.add.text(fs * 50, 0, "Shop", { font: (fs * 28).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "800" });

        var exitText = obj.game.add.text(ww - 60, 0, "X", { font: (fs * 28).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "800" });
        exitText.inputEnabled = true;
        exitText.events.onInputDown.add(obj.exitShop, obj);

        var graphics = this.game.add.graphics(0, 0);
        var upgGraphics = this.game.add.graphics(0, 0);

        graphics.beginFill("0xFFFFFF", 1);
        graphics.drawRect(0, 60, ww, 3);

        for (var i = 1; i <= 3; i++) {
            for (var j = 1; j <= 3; j++) {
                graphics.beginFill(buyColor, 0.8);
                graphics.drawRect(j * ww / 3. - ww / 6., 60 + i * wh / 3. - wh / 6. + wh / 12., -imgS, 2 * imgS / 6.);
            }
        }

        listComponents$1.slice(0, 3).forEach(function (compo, i) {

            categoryTexts.push(obj.game.add.text(ww / 6. - imgS, 60 + wh / 6. + i * wh / 3. - imgS, compo.shopCategory, { font: (fs * 24).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "700" }));

            compo.upgradeName.forEach(function (upgName, j) {

                compImages.push(obj.game.add.sprite(ww / 6. + j * ww / 3., 60 + wh / 6. + i * wh / 3 + wh / 12., compo.name + "img"));
                compImages.slice(-1)[0].anchor.setTo(1.0, 1.0);
                compImages.slice(-1)[0].width = imgS;
                compImages.slice(-1)[0].height = imgS;
                compImages.slice(-1)[0].inputEnabled = true;
                compImages.slice(-1)[0].events.onInputDown.add(obj.compInfo, { obj: obj, compType: i });

                compTextures.push(obj.game.add.sprite(ww / 6. + j * ww / 3. + imgS, 60 + wh / 6. + i * wh / 3 - imgS / 2., upgName + compo.name + "txt"));
                compTextures.slice(-1)[0].anchor.setTo(0.5, 0.0);
                if (compo.aRatio == 1) {
                    compTextures.slice(-1)[0].width = imgS / 3.;
                    compTextures.slice(-1)[0].height = imgS / 3.;
                } else {
                    compTextures.slice(-1)[0].width = imgS * compo.aRatio / 5.;
                    compTextures.slice(-1)[0].height = imgS / 5.;
                }
                compTextures.slice(-1)[0].inputEnabled = true;
                compTextures.slice(-1)[0].events.onInputDown.add(obj.compInfo, { obj: obj, compType: i });

                upgGraphics.beginFill(compo.colorName[j], 1);
                upgGraphics.drawRect((j + 1) * ww / 3. - ww / 6., 60 + (i + 1) * wh / 3. - wh / 6. - 2 * imgS / 15. + wh / 12., -imgS, 2 * imgS / 15.);
                obj.game.world.bringToTop(upgGraphics);

                buyTexts.push(obj.game.add.text(ww / 6. + j * ww / 3. - imgS / 2., 60 + wh / 6. + i * wh / 3. + wh / 12., "Buy", { font: (fs * 18).toString() + "px Arial", fill: "#000000", fontWeight: "500" }));
                buyTexts.slice(-1)[0].anchor.setTo(0.5, -0.10);
                buyTexts.slice(-1)[0].inputEnabled = true;
                buyTexts.slice(-1)[0].events.onInputDown.add(obj.compBuy, { obj: obj, compType: i, compUpg: j });

                infoTexts.push(obj.game.add.text(ww / 6. + j * ww / 3. + 5, 60 + wh / 6. + i * wh / 3. - imgS / 1.5 + fs * 20 + wh / 12., compo.price[j].toString() + " M Euros\n" + compo.shopDescription[j], { font: (fs * 14).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "300", wordWrap: true, wordWrapWidth: imgS * 1.5 }));
                infoTexts.slice(-1)[0].inputEnabled = true;
                infoTexts.slice(-1)[0].events.onInputDown.add(obj.compInfo, { obj: obj, compType: i });

                titleTexts.push(obj.game.add.text(ww / 6. + j * ww / 3. + 5, 60 + wh / 6. + i * wh / 3. - imgS / 1.5 + wh / 12., compo.upgradeName[j] + " " + compo.name, { font: (fs * 14).toString() + "px Arial", fill: "#FFFFFF", fontWeight: "700" }));
                titleTexts.slice(-1)[0].inputEnabled = true;
                titleTexts.slice(-1)[0].events.onInputDown.add(obj.compInfo, { obj: obj, compType: i });
            });
        });
    },

    exitShop: function exitShop() {
        //Go back to the main screen
        console.log("Exiting shop state...");
        this.game.state.start("GameState");
    },

    compInfo: function compInfo(compType) {
        //Go to the specific component state
        //WARNING: NEED TO FIGURE OUT HOW TO PASS ARGUMENT TO STATE
        console.log("Going to info state of component " + listComponents$1[this.compType].name);
        this.obj.game.state.start("ComponentState", this.compType);
    },

    compBuy: function compBuy(compType, compUpg) {
        if (listComponents$1[this.compType].price[this.compUpg] <= this.obj.game.money) {
            this.obj.game.money -= listComponents$1[this.compType].price[this.compUpg];
            //this.game.myComponents.push(new Component(this.
            console.log(listComponents$1[this.compType].upgradeName[this.compUpg] + " " + listComponents$1[this.compType].name + " purchased. Remaining money: " + this.obj.game.money.toString());
        } else {
            console.log("Not enough funding...");
        }
    }
};

function EmptyState(game) {
    console.log("Starting empty state");
}

EmptyState.prototype = {
    preload: function preload() {},
    create: function create() {}
};

var game = new Phaser.Game($(window).width(), $(window).height(), Phaser.AUTO, "game");

game.state.add("GameState", GameState$1);
game.state.add("SimulationState", SimulationState);
game.state.add("ShopState", ShopState);
game.state.add("AchievementsState", AchievementsState);
game.state.add("EmptyState", EmptyState);
game.state.start("GameState");

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL21vZGVsLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwiLi4vc3JjL3N0YXRlcy9ldmVudFN0YXRlLmpzIiwiLi4vc3JjL3N0YXRlcy9nYW1lU3RhdGUuanMiLCIuLi9zcmMvc3RhdGVzL3NpbXVsYXRpb25TdGF0ZS5qcyIsIi4uL3NyYy9zdGF0ZXMvZ2FtZVN0YXRlLmpzIiwiLi4vc3JjL3N0YXRlcy9hY2hpZXZlbWVudHNTdGF0ZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21vZGVsLmpzIiwiLi4vc3JjL3N0YXRlcy9zaG9wU3RhdGUuanMiLCIuLi9zcmMvc3RhdGVzL2VtcHR5U3RhdGUuanMiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGxpc3RDb21wb25lbnRzID1cbltcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJGIENhdml0eVwiLFxuICAgICAgICBcInNob3BDYXRlZ29yeVwiOiBcIlJhZGlvZnJlcXVlbmN5IENhdml0aWVzXCIsXG5cdFwic2hvcERlc2NyaXB0aW9uXCI6IFtcIk1heCBWb2x0YWdlOiA1XCIsIFwiTWF4IFZvbHRhZ2U6IDEwXCIsIFwiTWF4IFZvbHRhZ2U6IDI1XCJdLFxuXHRcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHJhZGlvZnJlcXVlbmN5IChSRikgY2F2aXR5IGlzIGEgbWV0YWxsaWMgY2hhbWJlciB0aGF0IGNvbnRhaW5zIGFuIGVsZWN0cm9tYWduZXRpYyBmaWVsZC4gSXRzIHByaW1hcnkgcHVycG9zZSBpcyB0byBhY2NlbGVyYXRlIGNoYXJnZWQgcGFydGljbGVzLiBSRiBjYXZpdGllcyBjYW4gYmUgc3RydWN0dXJlZCBsaWtlIGJlYWRzIG9uIGEgc3RyaW5nLCB3aGVyZSB0aGUgYmVhZHMgYXJlIHRoZSBjYXZpdGllcyBhbmQgdGhlIHN0cmluZyBpcyB0aGUgYmVhbSBwaXBlIG9mIGEgcGFydGljbGUgYWNjZWxlcmF0b3IsIHRocm91Z2ggd2hpY2ggcGFydGljbGVzIHRyYXZlbCBpbiBhIHZhY3V1bS5cIixcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFtcInJmLWJyb256ZS5wbmdcIiwgXCJyZi1zaWx2ZXIucG5nXCIsIFwicmYtZ29sZC5wbmdcIl0sXG5cdFwiYVJhdGlvXCIgOiA3LjEwOSxcblx0XCJjb2xvck5hbWVcIjogW1wiMHhDRTVBMDBcIiwgXCIweEJEQkRCRFwiLCBcIjB4RkZDMjAwXCJdLFxuICAgICAgICBcImljb25cIjogXCJyZi1sYXJnZS5wbmdcIixcbiAgICAgICAgXCJwcmljZVwiOiBbMTAsIDE1LCAyNV0sXG4gICAgICAgIFwibWF0cml4XCI6IFtbMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDEsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwxLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMSwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDEsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwxXVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgXCJtYXhWb2x0YWdlXCI6IFsxMCwyMCwzMF0sXG4gICAgICAgIFwibWF4UXVhbGl0eVwiOiBbMSwyLDNdLFxuICAgICAgICBcInR1dG9yaWFsXCI6IFwicmYuaHRtbFwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVmFjdXVtIENoYW1iZXJcIixcbiAgICAgICAgXCJzaG9wQ2F0ZWdvcnlcIjogXCJWYWN1dW0gQ2hhbWJlcnNcIixcblx0XCJzaG9wRGVzY3JpcHRpb25cIjogW1wiUHVyaXR5OiAwLjFcIiwgXCJQdXJpdHk6IDAuNFwiLCBcIlB1cml0eTogMC45XCJdLFxuXHRcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWYWN1dW0gY2hhbWJlciBhcmUgdGhlIGVsZW1lbnRhcnkgY29tcG9uZW50cyBvZiB5b3VyIGFjY2VsZXJhdG9yLiBZb3VyIHBhcnRpY2xlIGJlYW0gdGhlIGNsZWFuZXN0IHNwYWNlIHRvIGNpcmN1bGF0ZS4gVGhhdCBpcyB3aHkgZWFjaCBkZXZpY2UgaXMgYnVpbHQgYXJvdW5kIGEgdmFjdXVtIGNoYW1iZXIuXFxuVGhlc2UgdmFjdXVtIGNoYW1iZXIgcGllY2VzIG9ubHkgcmVwcmVzZW50IHBhcnRzIG9mIGNpcmN1aXQgdGhhdCBkb2VzIG5vdCBpbXBhY3QgdGhlIHNwZWVkIGVpdGhlciB0aGUgdHJhbnN2ZXJzYWwgc2hhcGUgb2YgeW91ciBiZWFtLlwiLFxuICAgICAgICBcInRleHR1cmVcIjogW1widmFjdXVtLXR1YmUtYnJvbnplLnBuZ1wiLCBcInZhY3V1bS10dWJlLXNpbHZlci5wbmdcIiwgXCJ2YWN1dW0tdHViZS1nb2xkLnBuZ1wiXSxcblx0XCJhUmF0aW9cIiA6IDYuOSxcblx0XCJjb2xvck5hbWVcIjogW1wiMHhDRTVBMDBcIiwgXCIweEJEQkRCRFwiLCBcIjB4RkZDMjAwXCJdLFxuICAgICAgICBcImljb25cIjogXCJ2YWN1dW0tdHViZS1sYXJnZS5wbmdcIixcbiAgICAgICAgXCJwcmljZVwiOiBbMSwgMywgNl0sXG4gICAgICAgIFwibWF0cml4XCI6IFtbMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDEsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwxLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMSwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDEsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwxXVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgXCJtYXhRdWFsaXR5XCI6IFsxLDIsM10sXG4gICAgICAgIFwidHV0b3JpYWxcIjogXCJ2YWN1dW0tY2hhbWJlci5odG1sXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJRdWFkcnVwb2xlIE1hZ25ldCB4XCIsXG4gICAgICAgIFwic2hvcENhdGVnb3J5XCI6IFwiUXVhZHJ1cG9sZSBNYWduZXRzIGluIFhcIixcblx0XCJzaG9wRGVzY3JpcHRpb25cIjogW1wiTWF4IEItZmllbGQ6IDEgRyBHYXVzc1wiLCBcIk1heCBCLWZpZWxkOiAyIEcgR2F1c3NcIiwgXCJNYXggQi1maWVsZDogNSBHIEdhdXNzXCJdLFxuXHRcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJRdWFkcnVwb2xlcyBlbmFibGUgeW91IHRvIGNvbnRyb2wgdGhlIHNoYXBlIG9mIHlvdXIgYmVhbS4gQWN0aW5nIGFzIG9wdGljYWwgbGVuc2VzLCB0aGV5IGZvY3VzIHlvdXIgYmVhbSBpbiB4IG9yIHkgYXhpcyBhbmQgYnkgdGhlIHdheSBhbHNvIGRlZm9jdXMgaXQgaW4gdGhlIG9wcG9zaXRlIGF4aXMuIEJlIHZlcnkgY2FyZWZ1bCB0byBiZWFyIGluIG1pbmQgbm90IGxldHRpbmcgeW91ciBiZWFtIGRpdmVyZ2UgdW50aWwgdG91Y2hpbmcgdGhlIGNhdml0eSBib2FyZGVyLiBPdGhlcndpc2UgeW91IHdvdWxkIGxvb3NlIGl0ICFcIixcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFtcInF1YWRydXBvbGUteC1icm9uemUucG5nXCIsXCJxdWFkcnVwb2xlLXgtc2lsdmVyLnBuZ1wiLFwicXVhZHJ1cG9sZS14LWdvbGQucG5nXCJdLFxuXHRcImNvbG9yTmFtZVwiOiBbXCIweENFNUEwMFwiLCBcIjB4QkRCREJEXCIsIFwiMHhGRkMyMDBcIl0sXG5cdFwiYVJhdGlvXCIgOiAxLFxuICAgICAgICBcImljb25cIjogXCJkaXBvbGUtbGFyZ2UucG5nXCIsXG4gICAgICAgIFwicHJpY2VcIjogWzE1LCAyNSwgNDVdLFxuICAgICAgICBcIm1hdHJpeFwiOiBbWzEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwxLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDEsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwxLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMV1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgIFwiZm9jdXNpbmdcIjogWzEwLDIwLDMwXSxcbiAgICAgICAgXCJtYXhRdWFsaXR5XCI6IFsxLDIsM10sXG4gICAgICAgIFwidHV0b3JpYWxcIjogXCJxdWFkcnVwb2xlLmh0bWxcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlF1YWRydXBvbGUgTWFnbmV0IHlcIixcbiAgICAgICAgXCJzaG9wQ2F0ZWdvcnlcIjogXCJRdWFkcnVwb2xlIE1hZ25ldHMgaW4gWVwiLFxuXHRcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJRdWFkcnVwb2xlcyBlbmFibGUgeW91IHRvIGNvbnRyb2wgdGhlIHNoYXBlIG9mIHlvdXIgYmVhbS4gQWN0aW5nIGFzIG9wdGljYWwgbGVuc2VzLCB0aGV5IGZvY3VzIHlvdXIgYmVhbSBpbiB4IG9yIHkgYXhpcyBhbmQgYnkgdGhlIHdheSBhbHNvIGRlZm9jdXMgaXQgaW4gdGhlIG9wcG9zaXRlIGF4aXMuIEJlIHZlcnkgY2FyZWZ1bCB0byBiZWFyIGluIG1pbmQgbm90IGxldHRpbmcgeW91ciBiZWFtIGRpdmVyZ2UgdW50aWwgdG91Y2hpbmcgdGhlIGNhdml0eSBib2FyZGVyLiBPdGhlcndpc2UgeW91IHdvdWxkIGxvb3NlIGl0ICFcIixcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFtcInF1YWRydXBvbGUteS1icm9uemUucG5nXCIsXCJxdWFkcnVwb2xlLXktc2lsdmVyLnBuZ1wiLFwicXVhZHJ1cG9sZS15LWdvbGQucG5nXCJdLFxuXHRcImFSYXRpb1wiIDogMSxcblx0XCJjb2xvck5hbWVcIjogW1wiMHhDRTVBMDBcIiwgXCIweEJEQkRCRFwiLCBcIjB4RkZDMjAwXCJdLFxuICAgICAgICBcImljb25cIjogXCJxdWFkeUljb24ucG5nXCIsXG4gICAgICAgIFwicHJpY2VcIjogWzE1LCAyNSwgNTBdLFxuICAgICAgICBcIm1hdHJpeFwiOiBbWzEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwxLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDEsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwxLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMV1cblx0XHQgICBdLFxuICAgICAgICBcIm1heEludGVuc2l0eVwiOiBbMTAsMjAsMzBdLFxuICAgICAgICBcIm1heFF1YWxpdHlcIjogWzEsMiwzXSxcbiAgICAgICAgXCJ0dXRvcmlhbFwiOiBcInF1YWRydXBvbGUuaHRtbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkRldGVjdG9yXCIsXG4gICAgICAgIFwic2hvcENhdGVnb3J5XCI6IFwiRGV0ZWN0b3JzXCIsXG5cdFwidXBncmFkZU5hbWVcIjogW1wiQnJvbnplXCIsIFwiU2lsdmVyXCIsIFwiR29sZFwiXSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkp1c3QgYXMgaHVudGVycyBjYW4gaWRlbnRpZnkgYW5pbWFscyBmcm9tIHRyYWNrcyBpbiBtdWQgb3Igc25vdywgcGh5c2ljaXN0cyBpZGVudGlmeSBzdWJhdG9taWMgcGFydGljbGVzIGZyb20gdGhlIHRyYWNlcyB0aGV5IGxlYXZlIGluIGRldGVjdG9ycy4gVGhlIGRldGVjdG9ycyBnYXRoZXIgY2x1ZXMgYWJvdXQgdGhlIHBhcnRpY2xlcyDigJMgaW5jbHVkaW5nIHRoZWlyIHNwZWVkLCBtYXNzIGFuZCBjaGFyZ2Ug4oCTIGZyb20gd2hpY2ggcGh5c2ljaXN0cyBjYW4gd29yayBvdXQgYSBwYXJ0aWNsZSdzIGlkZW50aXR5LlxcblB1dCBhIGRldGVjdG9yIGF0IHNvbWUgcG9pbnQgb2YgeW91ciBhY2NlbGVyYXRvciB0byBlbmFibGUgcGh5c2ljaXN0cyB0byBzdHVkeSB0aGUgcGFydGljbGUgYW5kIG1ha2UgbmV3IGRpc2NvdmVyaWVzICFcIixcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFtcImRldGVjdG9yLWJyb256ZS5wbmdcIixcImRldGVjdG9yLXNpbHZlci5wbmdcIixcImRldGVjdG9yLWdvbGQucG5nXCJdLFxuXHRcImNvbG9yTmFtZVwiOiBbXCIweENFNUEwMFwiLCBcIjB4QkRCREJEXCIsIFwiMHhGRkMyMDBcIl0sXG5cdFwiaWNvblwiOiBcImRldGVjdG9yLWxhcmdlLnBuZ1wiLFxuICAgICAgICBcInByaWNlXCI6IFsxNSwgMjUsIDUwXSxcbiAgICAgICAgXCJtYXRyaXhcIjogW1sxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMSwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDEsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwxLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMSwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDFdXG5cdFx0ICAgXSxcbiAgICAgICAgXCJtYXhJbnRlbnNpdHlcIjogWzEwLDIwLDMwXSxcbiAgICAgICAgXCJtYXhRdWFsaXR5XCI6IFsxLDIsM10sXG4gICAgICAgIFwidHV0b3JpYWxcIjogXCJkZXRlY3Rvci5odG1sXCJcbiAgICB9LFxuICAgIHtcblx0XCJuYW1lXCI6IFwiUHJvdG9uIEluamVjdG9yXCIsXG5cdFwic2hvcENhdGVnb3J5XCI6IFwiUHJvdG9uIEluamVjdG9yc1wiLFxuICAgICAgICBcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBbiBpbmplY3RvciBhY3R1YWxseSBzdGFuZCBmb3IgYSBjb21wbGV4IGluc3RhbGxhdGlvbiwgaW5jbHVkaW5nIGF0IGxlYXN0IGEgcGFydGljbGUgc291cmNlLiBObyBwYW5pYywgeW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaXRzIGNvbXBvbmVudHMuIFNpbXBseSBjb25zaWRlciBpdCBhcyBhIGJsYWNrIGJveCB0aGF0IHByb3ZpZGUgeW91IGEgYmVhbSBvZiBvbmUga2luZCBvZiBwYXJ0aWNsZXMgKGVsZWN0cm9ucywgcG9zaXRyb25zLCBwcm90b25zIG9yIGFudGlwcm90b25zKSBhdCBhIGdpdmVuIGVuZXJneSwgaW4gYSBiZWFtIHdpdGggYSBnaXZlbiBzaGFwZS5cIixcblx0XCJ0ZXh0dXJlXCI6IFtcImluamVjdG9yLWJyb256ZS5wbmdcIiwgXCJpbmplY3Rvci1zaWx2ZXIucG5nXCIsIFwiaW5qZWN0b3ItZ29sZC5wbmdcIl0sXG5cdFwiY29sb3JOYW1lXCI6IFtcIjB4Q0U1QTAwXCIsIFwiMHhCREJEQkRcIiwgXCIweEZGQzIwMFwiXSxcblx0XCJpY29uXCI6IFwiaW5qZWN0b3ItbGFyZ2UucG5nXCIsXG5cdFwicHJpY2VcIjogWzAsIDEwLCAyMF0sXG5cdFwibWF0cml4XCI6IFtbMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDEsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwxLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMSwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDEsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwxXVxuXHRcdCAgIF0sXG4gICAgICAgIFwibWF4RW5lcmd5XCI6IFs1MCwxMDAsNDAwXSxcbiAgICAgICAgXCJtYXhRdWFsaXR5XCI6IFsxLDIsM10sXG4gICAgICAgIFwidHV0b3JpYWxcIjogXCJpbmplY3Rvci5odG1sXCJcblx0fSxcbl07XG4iLCJpbXBvcnQge2xpc3RDb21wb25lbnRzfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KHR5cGUsIHVwZ3JhZGUpIHtcbiAgICAvKiBJbnB1dHNcbiAgICAgICAgLSB0eXBlOiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgaWQgb2YgdGhlIGNvbXBvbmVudCB0eXBlIGluIHRoZSBqc29uXG4gICAgICAgICAgICAgICAgbW9kZWxcbiAgICAgICAgLSB1cGdyYWRlIDogaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHVwZ3JhZGUgbnVtYmVyIG9mIHRoZSBjb21wb25lbnRcbiAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy51cGdyYWRlID0gdXBncmFkZTtcbiAgICB0aGlzLmluQWNjZWxlcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpZE1hdHJpeCA9IGZhbHNlOyAvLyB0cnVlIGlmIHRoZSBjb21wb25lbnQgYXBwbGllZCBpdHMgZWZmZWN0XG4gICAgdGhpcy5tb2RlbCA9IGxpc3RDb21wb25lbnRzW3R5cGVdO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEV2ZW50U3RhdGUoZ2FtZSl7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyB0aGUgZXZlbnRcIik7XG59O1xuXG52YXIgc2NyZWVuSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xudmFyIHNjcmVlbldpZHRoICA9ICQod2luZG93KS53aWR0aCgpO1xudmFyIG91cnNjcmVlbldpZHRoID0gc2NyZWVuV2lkdGgvMjtcbnZhciBvdXJzY3JlZW5IZWlnaHQgPSBzY3JlZW5XaWR0aC8zO1xudmFyIG5wZlRleHRYID0gMTQ7XG52YXIgbnBmVGV4dFkgPSAxMDtcblxuRXZlbnRTdGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgcHJlbG9hZDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcmVsb2FkaW5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaGlnZ3MnLCAnL2FjY2VsZXJhdG9yLWZhY3RvcnkvaW1hZ2VzL2hpZ2dzLnBuZycpO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwNTNBMVwiO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNldEdhbWVTaXplKG91cnNjcmVlbldpZHRoLCBvdXJzY3JlZW5IZWlnaHQpO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucmVmcmVzaCgpO1xuXG4gICAgICAvL05ldyBwYXJ0aWNsZSBmb3VuZCFcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KG5wZlRleHRYLCBucGZUZXh0WSwgXCJOZXcgcGFydGljbGUgZm91bmQhXCIsIHsgZm9udDogXCIzMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBhbGlnbjogXCJjZW50ZXJcIn0pO1xuICAgICAgdGV4dC5zdHJva2VUaGlja25lc3MgPSAyO1xuICAgICAgdGV4dC5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXG4gICAgICAvL0hpZ2dzXG4gICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChucGZUZXh0WCwgbnBmVGV4dFkgKyAxMDAsIFwiSGlnZ3MhXCIsIHsgZm9udDogXCIzMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBhbGlnbjogXCJjZW50ZXJcIn0pO1xuICAgICAgdGV4dC5zdHJva2VUaGlja25lc3MgPSAyO1xuICAgICAgdGV4dC5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXG4gICAgICAvL2F0IDEyNSBHZVZcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KG5wZlRleHRYLCBucGZUZXh0WSArIDE0MCwgXCJhdCAxMjUgR2VWXCIsIHsgZm9udDogXCIzMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBhbGlnbjogXCJjZW50ZXJcIn0pO1xuICAgICAgdGV4dC5zdHJva2VUaGlja25lc3MgPSAyO1xuXG4gICAgICAvL1RoZW9yaXNlZCBieSBGcmFuY29pcyBFbmdsZXJ0IGFuZCBQZXRlciBIaWdncywgdGhpcyBcIm1pc3NpbmcgcGllY2VcIiBvZiB0aGUgU3RhbmRhcmQgTW9kZWwgZ2l2ZXMgcmlzZSB0byBtYXNzIGNvdXBsaW5ncyBmb3IgZ2F1Z2UgYm9zb25zIGluIEVsZWN0cm93ZWFrIHRoZW9yeS4gSW4gbGF5bWFuJ3MgdGVybXMsIHRoaXMgcGFydGljbGUgZ2l2ZXMgbWFzcyB0byBvdGhlciBwYXJ0aWNsZXMsIG9yIHNvIHRvIHNwZWFrLCBpdCBpcyB0aGUgbW90aGVyIG9mIGFsbCBwYXJ0aWNsZXMuXG4gICAgICAvL1RvIGNlbGVicmF0ZSB0aGUgZGlzY292ZXJ5LCBNZW1iZXIgU3RhdGVzIGhhcyBncmFudGVkIHlvdSBhIGJvbnVzIG9mIDUwMCBN4oKsLCA1IHNjaWVudGlzdHMsIGFuZCAxMCBlbmdpbmVlcnNcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KG5wZlRleHRYLCBucGZUZXh0WSArIDE5MCwgXCJUaGVvcmlzZWQgYnkgRnJhbmNvaXMgRW5nbGVydCBhbmQgUGV0ZXIgSGlnZ3MsIHRoaXMgbWlzc2luZ1xcbnBpZWNlIG9mIHRoZSBTdGFuZGFyZCBNb2RlbCBnaXZlcyByaXNlIHRvIG1hc3MgY291cGxpbmdzIGZvclxcbmdhdWdlIGJvc29ucyBpbiBFbGVjdHJvd2VhayB0aGVvcnkuIEluIGxheW1hbidzIHRlcm1zLCB0aGlzXFxucGFydGljbGUgZ2l2ZXMgbWFzcyB0byBvdGhlciBwYXJ0aWNsZXMsIG9yIHNvIHRvIHNwZWFrLCBpdCBpcyB0aGVcXG5tb3RoZXIgb2YgYWxsIHBhcnRpY2xlcy5cIiwgeyBmb250OiBcIjEzcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCJ9KTtcbiAgICAgIHRleHQuZm9udFdlaWdodCA9ICdib2xkJztcblxuXG4gICAgICAvL1JlYWQgbW9yZSBCdXR0b25cbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KG5wZlRleHRYLCBucGZUZXh0WSArIDMzMCwgXCJSZWFkIG1vcmVcIiwgeyBmb250OiBcIjIwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG4gICAgICB0ZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICB0ZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoZG93blJlYWRtb3JlLCB0aGlzKTtcblxuICAgICAgLy9DYXJyeSBvbiBCdXR0b25cbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KG5wZlRleHRYLCBucGZUZXh0WSArIDM2NSwgXCJDYXJyeSBvblwiLCB7IGZvbnQ6IFwiMjBweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgYWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcbiAgICAgIHRleHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZChkb3duQ2FycnlvbiwgdGhpcyk7XG5cbiAgICAgIC8vSGlnZ3MgSW1hZ2VcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2Uob3Vyc2NyZWVuV2lkdGggLSAyMjAsIG91cnNjcmVlbkhlaWdodCAtIDMwMCwgJ2hpZ2dzJyk7XG5cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBkb3duUmVhZG1vcmUoaXRlbSkge1xuXG4gICAgaXRlbS50ZXh0ID0gXCJjbGlja2VkXCI7XG5cbn1cblxuZnVuY3Rpb24gZG93bkNhcnJ5b24oaXRlbSkge1xuXG4gICAgaXRlbS50ZXh0ID0gXCJjbGlja2VkXCI7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50c1wiXG5pbXBvcnQge1NpbXVsYXRpb25TdGF0ZX0gZnJvbSBcInNpbXVsYXRpb25TdGF0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lU3RhdGUoZ2FtZSl7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdhbWUubW9uZXkgPSAxMDA7XG4gICAgdGhpcy5nYW1lLnNpemVUZXJyaXRvcnkgPSAxMDtcbiAgICB0aGlzLmluZGV4SW5qZWN0b3IgPSA1O1xuXG4gICAgdGhpcy5nYW1lLm15Q29tcG9uZW50cyA9IFtcbiAgICAgICAgbmV3IENvbXBvbmVudCh0aGlzLmluZGV4SW5qZWN0b3IsMCksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMCwwKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgwLDEpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDAsMiksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMSwwKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgxLDEpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDEsMiksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMiwwKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgyLDEpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDIsMiksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMywwKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgzLDEpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDMsMiksXG4gICAgICAgIG5ldyBDb21wb25lbnQoNCwwKSxcbiAgICBdO1xuICAgIHRoaXMuZ2FtZS5teVNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzID0gW107XG5cbiAgICB0aGlzLndpZHRoSW52ZW50b3J5ID0gNDAwO1xuICAgIHRoaXMuaGVpZ2h0VG9wQmFyID0gMzA7XG4gICAgdGhpcy5oZWlnaHRCdXR0b24gPSAxMDA7XG4gICAgdGhpcy5mb250VGV4dEJ1dHRvbiA9IDMwO1xuICAgIHRoaXMuaW52ZW50b3J5TWFyZ2luID0ge1xuICAgICAgICB4OiAxMCxcbiAgICAgICAgeTogMjBcbiAgICB9O1xuICAgIHRoaXMuc2NhbGVGYWN0b3JTcHJpdGVzID0gMC41O1xuICAgIHRoaXMubWFyZ2luQ29ubmVjdG9yID0gNjQgKiB0aGlzLnNjYWxlRmFjdG9yU3ByaXRlcztcbiAgICB0aGlzLmJsdWUgPSAweDAwNTNBMTtcbiAgICB0aGlzLnllbGxvdyA9IDB4RjFDNDBGO1xuICAgIHRoaXMucmVkID0gMHhFNzRDM0M7XG4gICAgdGhpcy5ncmVlbiA9IDB4MmVjYzcxO1xuXG4gICAgdGhpcy5nYW1lLmRpc3BsYXkgPSB7XG4gICAgICAgIGludmVudG9yeToge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGhJbnZlbnRvcnksXG4gICAgICAgICAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKVxuICAgICAgICB9LFxuICAgICAgICB0b3BCYXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRUb3BCYXJcbiAgICAgICAgfSxcbiAgICAgICAgbWFyZ2luQ29ubmVjdG9yOiB0aGlzLm1hcmdpbkNvbm5lY3RvclxuICAgIH07XG59O1xuXG5HYW1lU3RhdGUucHJvdG90eXBlID0ge1xuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xuICAgICAgICB0aGlzLmdhbWUubXlDb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24oY29tcG8sIGlDb21wbykge1xuICAgICAgICAgICAgb2JqLmdhbWUubG9hZC5pbWFnZShjb21wby5tb2RlbC5uYW1lICsgaUNvbXBvLnRvU3RyaW5nKCksICcuLi9pbWFnZXMvY29tcG9uZW50cy8nICsgY29tcG8ubW9kZWwudGV4dHVyZVtjb21wby51cGdyYWRlXSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xuXG4gICAgICAgIHRoaXMuY3JlYXRlSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jb21wb0dyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmdhbWUuY29tcG9Hcm91cC5pbnB1dEVuYWJsZUNoaWxkcmVuID0gdHJ1ZTtcblxuICAgICAgICB2YXIgbmV4dFkgPSAxMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5teVNwcml0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lLm15Q29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvLCBpQ29tcG8pIHtcbiAgICAgICAgICAgIGlmICghY29tcG8uaW5BY2NlbGVyYXRvcikge1xuICAgICAgICAgICAgICAgIHZhciBzcHJpdGVDb21wbyA9IG9iai5nYW1lLmNvbXBvR3JvdXAuY3JlYXRlKDAsIDAsIGNvbXBvLm1vZGVsLm5hbWUgKyBpQ29tcG8udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgb2JqLmdhbWUubXlTcHJpdGVzLnB1c2goc3ByaXRlQ29tcG8pO1xuXG4gICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8uc2NhbGUuc2V0VG8ob2JqLnNjYWxlRmFjdG9yU3ByaXRlcywgb2JqLnNjYWxlRmFjdG9yU3ByaXRlcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcG8ucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8ucG9zaXRpb24ueCA9IGNvbXBvLnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLnBvc2l0aW9uLnkgPSBjb21wby5wb3NpdGlvbi55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5wb3NpdGlvbi54ID0gb2JqLndpZHRoSW52ZW50b3J5LzIgLSBzcHJpdGVDb21wby53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLnBvc2l0aW9uLnkgPSBuZXh0WTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG8ucG9zaXRpb24gPSBzcHJpdGVDb21wby5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgY29tcG8ub3JpZ2luYWxQb3NpdGlvbiA9IHNwcml0ZUNvbXBvLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iai5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShzcHJpdGVDb21wbyk7XG5cbiAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLmlucHV0LmVuYWJsZURyYWcoKTtcbiAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5ldmVudHMub25EcmFnU3RhcnQuYWRkKGZ1bmN0aW9uKGN1cnJlbnRTcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0YXJ0RHJhZyhpQ29tcG8pO1xuICAgICAgICAgICAgICAgIH0sIG9iaik7XG4gICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8uZXZlbnRzLm9uRHJhZ1N0b3AuYWRkKGZ1bmN0aW9uKGN1cnJlbnRTcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0b3BEcmFnKGlDb21wbyk7XG4gICAgICAgICAgICAgICAgfSwgb2JqKTtcblxuICAgICAgICAgICAgICAgIG5leHRZID0gc3ByaXRlQ29tcG8ucG9zaXRpb24ueSArIHNwcml0ZUNvbXBvLmhlaWdodCArIG9iai5pbnZlbnRvcnlNYXJnaW4ueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5tb3VzZS5tb3VzZVdoZWVsQ2FsbGJhY2sgPSB0aGlzLnpvb21FdmVudDtcbiAgICAgICAgdGhpcy5zYXZlTW9kZWwoKTtcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCl7XG4gICAgfSxcblxuICAgIHNhdmVNb2RlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlDb21wb25lbnRzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2FtZS5teUNvbXBvbmVudHMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NlbGVyYXRvckNvbXBvbmVudHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cykpO1xuICAgIH0sXG5cbiAgICBsb2FkTW9kZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdhbWUubXlDb21wb25lbnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15Q29tcG9uZW50c1wiKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZWxlcmF0b3JDb21wb25lbnRzXCIpKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW50ZXJmYWNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYmx1ZTtcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcblxuICAgICAgICAvLyBUb3AgYmFyXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChcIiMwMDAwMDBcIiwxKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgJCh3aW5kb3cpLndpZHRoKCksIHRoaXMuaGVpZ2h0VG9wQmFyKTtcblxuICAgICAgICAvLyBJbnZlbnRvcnlcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKFwiIzAwMDAwMFwiLDAuNCk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KDAsIHRoaXMuaGVpZ2h0VG9wQmFyLCB0aGlzLndpZHRoSW52ZW50b3J5LCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuXG4gICAgICAgIC8vIFJpZ2h0IHBhbmVsXG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KCQod2luZG93KS53aWR0aCgpIC0gMjUwLCA4MCwgMjMwLCA1MDApO1xuXG4gICAgICAgIC8vIFNob3AgYnV0dG9uXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLnllbGxvdywgMSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KDAsICQod2luZG93KS5oZWlnaHQoKSAtIHRoaXMuaGVpZ2h0QnV0dG9uLCB0aGlzLndpZHRoSW52ZW50b3J5LCAxMDApO1xuXG4gICAgICAgIC8vIFJ1biBidXR0b25cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMucmVkLCAxKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoJCh3aW5kb3cpLndpZHRoKCkgLSAyNTAsIDQ4MCwgMjMwLCB0aGlzLmhlaWdodEJ1dHRvbik7XG5cbiAgICAgICAgLy8gU2ltdWxhdGUgYnV0dG9uXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmdyZWVuLCAxKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoJCh3aW5kb3cpLndpZHRoKCkgLSAyNTAsIDM4MCwgMjMwLCB0aGlzLmhlaWdodEJ1dHRvbik7XG5cblxuICAgICAgICAvLyBTSE9QIFRleHRcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoMTMwLCAkKHdpbmRvdykuaGVpZ2h0KCkgLSB0aGlzLmhlaWdodEJ1dHRvbi8yIC0gdGhpcy5mb250VGV4dEJ1dHRvbi8yLCBcIlNIT1BcIiwgeyBmb250OiB0aGlzLmZvbnRUZXh0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiIzAwMDAwMFwiLCBhbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuICAgICAgICB0ZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZChkb3duU2hvcCwgdGhpcyk7XG4gICAgICAgIC8vdGhpcy5zdGFnZS5hZGRDaGlsZCh0ZXh0KTtcblxuICAgICAgICAvL1JVTiBCdXR0b25cbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoJCh3aW5kb3cpLndpZHRoKCkgLSAxNzAsIDUxNSwgXCJSVU5cIiwgeyBmb250OiB0aGlzLmZvbnRUZXh0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiIzAwMDAwMFwiLCBhbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuICAgICAgICB0ZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZChkb3duUnVuLCB0aGlzKTtcbiAgICAgICAgLy90aGlzLnN0YWdlLmFkZENoaWxkKHRleHQpO1xuXG4gICAgICAgIC8vU0lNVUxBVEUgQnV0dG9uXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMjE1LCA0MTUsIFwiU0lNVUxBVEVcIiwgeyBmb250OiB0aGlzLmZvbnRUZXh0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiIzAwMDAwMFwiLCBhbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuICAgICAgICB0ZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZChkb3duU2ltdWxhdGUsIHRoaXMpO1xuXG4gICAgICAgIC8vSW52ZW50b3J5IFRleHRcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoMTAsIDQwLCBcIkludmVudG9yeVwiLCB7IGZvbnQ6IHRoaXMuZm9udFRleHRCdXR0b24udG9TdHJpbmcoKSArIFwicHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG5cbiAgICAgICAgLy9DZW50ZXItb2YtTWFzcyBlbmVyZ3lcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoJCh3aW5kb3cpLndpZHRoKCkgLSAyNDAsIDkwLCBcIkNlbnRlci1vZi1NYXNzXFxuZW5lcmd5XCIsIHsgZm9udDogXCIyMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG5cbiAgICAgICAgLy9QZWFrIGx1bWlub3NpdHlcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoJCh3aW5kb3cpLndpZHRoKCkgLSAyNDAsIDE5MCwgXCJQZWFrIGx1bWlub3NpdHlcIiwgeyBmb250OiBcIjIwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcblxuICAgICAgICAvL0xhc3QgcGFydGljbGUgZm91bmQgYXRcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoJCh3aW5kb3cpLndpZHRoKCkgLSAyNDAsIDI3MCwgXCJMYXN0IHBhcnRpY2xlXFxuZm91bmQgYXRcIiwgeyBmb250OiBcIjIwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcblxuICAgICAgICAvL1RleHQgRm9yIFRvcCBNZW51IGJhclxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgxNSw4LCBcIlRSSUFMXCIsIHsgZm9udDogXCIxNXB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjcwMFwifSk7XG4gICAgICAgIC8vIE1vbmV5XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KDEzMCw4LCB0aGlzLmdhbWUubW9uZXkudG9TdHJpbmcoKSArIFwi4oKsXCIsIHsgZm9udDogXCIxNXB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkYwMFwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG4gICAgICAgIC8vIEFjaGlldmVtZW50cyBsaW5rXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMjAwICw4LCBcIkFDSElFVkVNRU5UU1wiLCB7IGZvbnQ6IFwiMTVweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuICAgICAgICB0ZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmRvd25BY2hpZXZlbWVudHMsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydERyYWc6IGZ1bmN0aW9uIChpbmRleENvbXBvbmVudCkge1xuICAgICAgICAvKiBJZiB3ZSBkcmFnIGFuIG9iamVjdCBmcm9tIHRoZSBhY2NlbGVyYXRvciAoaWUgbGFzdFNwcml0ZSA9PSBjdXJyZW50U3ByaXRlKSxcbiAgICAgICAgaXQgc2hvdWxkIGJlIHBvcHBlZCBmcm9tIHRoZSBhY2NlbGVyYXRvciBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICovXG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xuICAgICAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IHRoaXMuZ2FtZS5teUNvbXBvbmVudHNbaW5kZXhDb21wb25lbnRdO1xuICAgICAgICBpZiAob2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhMYXN0Q29tcG9uZW50ID0gb2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIHZhciBsYXN0Q29tcG9uZW50ID0gdGhpcy5nYW1lLm15Q29tcG9uZW50c1tpbmRleExhc3RDb21wb25lbnRdO1xuICAgICAgICAgICAgaWYgKGxhc3RDb21wb25lbnQgPT0gY3VycmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4TGFzdENvbXBvbmVudCA9IG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0U3ByaXRlID0gdGhpcy5nYW1lLm15U3ByaXRlc1tpbmRleExhc3RDb21wb25lbnRdO1xuICAgICAgICAgICAgICAgICAgICBsYXN0U3ByaXRlLmlucHV0LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3BEcmFnOiBmdW5jdGlvbiAoaW5kZXhDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXM7XG4gICAgICAgIHZhciBjdXJyZW50Q29tcG9uZW50ID0gdGhpcy5nYW1lLm15Q29tcG9uZW50c1tpbmRleENvbXBvbmVudF07XG4gICAgICAgIHZhciBjdXJyZW50U3ByaXRlID0gdGhpcy5nYW1lLm15U3ByaXRlc1tpbmRleENvbXBvbmVudF07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQubW9kZWwubmFtZSA9PSBcIlByb3RvbiBJbmplY3RvclwiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNwcml0ZS5wb3NpdGlvbi54ID4gdGhpcy53aWR0aEludmVudG9yeSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmouZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLnB1c2goaW5kZXhDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTcHJpdGUucG9zaXRpb24uY29weUZyb20oY3VycmVudENvbXBvbmVudC5vcmlnaW5hbFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYmouZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHZhciBpbmRleExhc3RDb21wb25lbnQgPSBvYmouZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RDb21wb25lbnQgPSB0aGlzLmdhbWUubXlDb21wb25lbnRzW2luZGV4TGFzdENvbXBvbmVudF07XG4gICAgICAgICAgICB2YXIgbGFzdFNwcml0ZSA9IHRoaXMuZ2FtZS5teVNwcml0ZXNbaW5kZXhMYXN0Q29tcG9uZW50XTtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoY3VycmVudFNwcml0ZSwgbGFzdFNwcml0ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyogSWYgaXQgb3ZlcmxhcHBlZCAqL1xuICAgICAgICAgICAgICAgIGxhc3RTcHJpdGUuaW5wdXQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY3VycmVudFNwcml0ZS5wb3NpdGlvbi54ID0gbGFzdFNwcml0ZS5wb3NpdGlvbi54ICsgbGFzdFNwcml0ZS53aWR0aCAtIG9iai5tYXJnaW5Db25uZWN0b3I7XG4gICAgICAgICAgICAgICAgY3VycmVudFNwcml0ZS5wb3NpdGlvbi55ID0gbGFzdFNwcml0ZS5wb3NpdGlvbi55ICsgbGFzdFNwcml0ZS5oZWlnaHQvMiAtIGN1cnJlbnRTcHJpdGUuaGVpZ2h0LzI7XG4gICAgICAgICAgICAgICAgY3VycmVudFNwcml0ZS5hbmNob3Iuc2V0VG8obGFzdFNwcml0ZS5hbmNob3IueCwgbGFzdFNwcml0ZS5hbmNob3IueSk7XG4gICAgICAgICAgICAgICAgb2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLnB1c2goaW5kZXhDb21wb25lbnQpXG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTcHJpdGUucG9zaXRpb24uY29weUZyb20oY3VycmVudENvbXBvbmVudC5vcmlnaW5hbFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gVGhpcyBpcyBub3QgYW4gaW5qZWN0b3IgYW5kIHdlIGhhdmUgbm90aGluZyBvbiB0aGUgdGVycml0b3J5XG4gICAgICAgICAgICBjdXJyZW50U3ByaXRlLnBvc2l0aW9uLmNvcHlGcm9tKGN1cnJlbnRDb21wb25lbnQub3JpZ2luYWxQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudENvbXBvbmVudC5wb3NpdGlvbiA9IGN1cnJlbnRTcHJpdGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5zYXZlTW9kZWwoKTtcbiAgICB9LFxuXG4gICAgem9vbUV2ZW50OiBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgIH0sXG5cbiAgICBkb3duQWNoaWV2ZW1lbnRzOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoXCJBY2hpZXZlbWVudHNTdGF0ZVwiKVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGRvd25TaG9wKGl0ZW0pIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoXCJTaG9wU3RhdGVcIik7XG59XG5cbmZ1bmN0aW9uIGRvd25SdW4oaXRlbSkge1xuXG4gICAgaXRlbS50ZXh0ID0gXCJjbGlja2VkXCI7XG5cbn1cblxuZnVuY3Rpb24gZG93blNpbXVsYXRlKGl0ZW0pIHtcbiAgICBpdGVtLnRleHQgPSBcImNsaWNrZWQgXCI7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiU2ltdWxhdGlvblN0YXRlXCIpO1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImNvbXBvbmVudHNcIjtcbmltcG9ydCB7RXZlbnRTdGF0ZX0gZnJvbSBcImV2ZW50U3RhdGVcIjtcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiZ2FtZVN0YXRlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXVsYXRpb25TdGF0ZShnYW1lKXtcblx0dGhpcy5nYW1lID0gZ2FtZTtcblx0Y29uc29sZS5sb2coXCJTaW11bGF0aW9uIFN0YXJ0XCIpO1xufTtcblxuXG52YXIgY3VycmVudENvbXBJbmRleCA9IDA7XG52YXIgYmVhbVNwcml0ZTtcbnZhciBjcm9zc1NlY3Rpb25TcHJpdGU7XG52YXIgaW5qZWN0b3JXaWR0aDtcbnZhciBpbmplY3RvckluZGV4O1xudmFyIGluamVjdG9yU3ByaXRlO1xudmFyIGluamVjdG9yQ29tcG9uZW50O1xudmFyIHhJbmk7XG52YXIgeUluaTtcbnZhciBjcm9zc1NlY3Rpb247XG52YXIgbWFyZ2luIDtcblxudmFyIGVsbGlwc2U7XG52YXIgeEVsbGlwc2U7XG52YXIgeUVsbGlwc2U7XG52YXIgZ3JhcGhpY3M7XG52YXIgY2F2aXR5UmFkaXVzO1xuXG52YXIgZW5lcmd5VGV4dDtcbnZhciBpbmplY3RvcjtcbnZhciBleHBsb3Npb25TcHJpdGU7XG5cbnZhciBvaz10cnVlO1xuXG5TaW11bGF0aW9uU3RhdGUucHJvdG90eXBlID0ge1xuXHRwcmVsb2FkOiBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwicHJlbG9hZGluZ1wiKTtcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmVhbVNwcml0ZScsIFwiaW1hZ2VzL3BhcnRpY2xlLWZsb3cvYmVhbS0xLnBuZ1wiKTtcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NTZWN0aW9uU3ByaXRlJywgJ2ltYWdlcy9jcm9zcy1zZWN0aW9uL2Nyb3NzLXNlY3Rpb24tdmlzb3IucG5nJylcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnZXhwbG9zaW9uU3ByaXRlJywgJ2ltYWdlcy9jb21wb25lbnRzL2V4cGxvc2lvbi5wbmcnKVxuXHR9LFxuXHRjcmVhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coXCJjcmVhdGlvbiBzaW11bGF0aW9uIHN0YXRlXCIpO1xuXG4gICAgICAgIHZhciBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ2FtZSk7XG4gICAgICAgIGdhbWVTdGF0ZS5jcmVhdGUoKTtcblx0XHRpbmplY3RvckluZGV4ID0gdGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50c1swXTtcbiAgICAgICAgaW5qZWN0b3JTcHJpdGUgPSB0aGlzLmdhbWUubXlTcHJpdGVzW2luamVjdG9ySW5kZXhdO1xuICAgICAgICBpbmplY3RvckNvbXBvbmVudCA9IHRoaXMuZ2FtZS5teUNvbXBvbmVudHNbaW5qZWN0b3JJbmRleF07XG5cblx0XHRpbmplY3RvcldpZHRoID0gaW5qZWN0b3JTcHJpdGUud2lkdGggO1xuXG5cdFx0eEluaSA9IGluamVjdG9yU3ByaXRlLnggKyBpbmplY3RvclNwcml0ZS53aWR0aCowLjU7XG5cdFx0eUluaSA9IGluamVjdG9yU3ByaXRlLnkgKyAxNDtcblx0XHRtYXJnaW4gPSB0aGlzLmdhbWUuZGlzcGxheS5tYXJnaW5Db25uZWN0b3I7XG5cdFx0dGhpcy5nYW1lLmJlYW0gPSB7XG5cdFx0XHR4OnhJbmksXG5cdFx0XHR5OnlJbmksXG5cdFx0XHR2eDowLFxuXHRcdFx0ZW5lcmd5IDogMSxcblx0XHRcdHNwcml0ZSA6IGJlYW1TcHJpdGUsXG5cdFx0fVxuXG5cdFx0ZWxsaXBzZSA9IHtcblx0XHRcdGE6NjAsXG5cdFx0XHRiOjYwLFxuXHRcdFx0ZmE6MS4wMixcblx0XHRcdGZiOjAuOTgsXG5cdFx0fVxuXG5cdFx0YmVhbVNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHhJbmksIHlJbmksJ2JlYW1TcHJpdGUnKTtcblx0XHRjcm9zc1NlY3Rpb25TcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSggJCh3aW5kb3cpLndpZHRoKCkvMiAsdGhpcy5nYW1lLmRpc3BsYXkudG9wQmFyLmhlaWdodCwnY3Jvc3NTZWN0aW9uU3ByaXRlJyk7XG5cdFx0Y2F2aXR5UmFkaXVzID0gY3Jvc3NTZWN0aW9uU3ByaXRlLndpZHRoO1xuXG5cdFx0Y29uc29sZS5sb2coXCJjYXZpdHkgcmFkaXVzIFwiLGNhdml0eVJhZGl1cyk7XG5cbiBcdFx0dGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgXHRcdHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShiZWFtU3ByaXRlLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG4gICBcdFx0dGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKGNyb3NzU2VjdGlvblNwcml0ZSwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcblxuXHRcdGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLDApO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg4LCAweGZmZDkwMCk7XG4gICAgICAgIHhFbGxpcHNlID0gY3Jvc3NTZWN0aW9uU3ByaXRlLnggKyBjcm9zc1NlY3Rpb25TcHJpdGUud2lkdGgqMC41O1xuICAgICAgICB5RWxsaXBzZSA9IGNyb3NzU2VjdGlvblNwcml0ZS55ICsgY3Jvc3NTZWN0aW9uU3ByaXRlLmhlaWdodCowLjU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0geyBmb250OiBcIjQ0cHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIgfTtcblx0XHRlbmVyZ3lUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpLzIgKyA1NTAgLDEwMCwgJ0JlYW0gRW5lcmd5IDogJyt0aGlzLmdhbWUuYmVhbS5lbmVyZ3krXCIgTWVWXCIsIHN0eWxlKTtcblxuICAgXHRcdGNvbnNvbGUubG9nKFwiY3JlYXRpb24gZW5kc1wiKTtcblxuXHR9LFxuXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKGN1cnJlbnRDb21wSW5kZXggPiB0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCApe1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhdGUuc3RhcnQoXCJHYW1lU3RhdGVcIik7XG5cdFx0XHR9XG5cdFx0XHQvLyB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsMCk7XG5cdCAgICAgICAgdmFyIHN0eWxlID0geyBmb250OiBcIjQ1cHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIgfTtcblx0XHRcdGVuZXJneVRleHQuc2V0VGV4dCgnQmVhbSBFbmVyZ3kgOiAnK3RoaXMuZ2FtZS5iZWFtLmVuZXJneStcIiBNZVZcIiApO1xuXG5cdFx0XHRpZiAoZWxsaXBzZS5hID49IDAuNSpjYXZpdHlSYWRpdXMgfHwgZWxsaXBzZS5iID49IDAuNSpjYXZpdHlSYWRpdXMpe1xuXHRcdFx0XHR0aGlzLmdhbWUuY3VycmVudEV2ZW50ID0gXCJiZWFtTG9zdFwiO1xuXHRcdFx0XHR0aGlzLmdhbWUuYmVhbS52eCA9IDA7XG5cdFx0XHRcdGVsbGlwc2UuZmE9MTtcblx0XHRcdFx0ZWxsaXBzZS5mYj0xO1xuXHRcdFx0XHR0aGlzLmdhbWUuYWRkLnRleHQoJCh3aW5kb3cpLndpZHRoKCkvMiwgJCh3aW5kb3cpLmhlaWdodCgpLzIsICcgQkVBTSBMT1NUICEhICcsIHN0eWxlKVxuXHRcdFx0XHRleHBsb3Npb25TcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUuYmVhbS54LCB0aGlzLmdhbWUuYmVhbS55IC0gODUsJ2V4cGxvc2lvblNwcml0ZScpXG5cdFx0XHRcdGV4cGxvc2lvblNwcml0ZS5zY2FsZS5zZXRUbygzLDMpO1xuXHQgIFx0IFx0XHR0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoZXhwbG9zaW9uU3ByaXRlLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG5cdFx0XHRcdC8vIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydChcIkV2ZW50U3RhdGVcIik7XG5cdFx0XHR9XG5cdFx0XHQvL3VwZGF0ZSBiZWFtIHBvc2l0aW9uXG5cdFx0XHRiZWFtU3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZ2FtZS5iZWFtLnZ4O1xuXHRcdFx0dGhpcy5nYW1lLmJlYW0ueCA9IGJlYW1TcHJpdGUueCA7XG5cdFx0XHR0aGlzLmdhbWUuYmVhbS52eCA9IHRoaXMuZ2FtZS5iZWFtLmVuZXJneSoyMDAgO1xuXHRcdFx0dGhpcy5nYW1lLmJlYW1FbmVyZ3lTdHJpbmcgPSB0aGlzLmdhbWUuYmVhbS5lbmVyZ3kudG9TdHJpbmcoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYmVhbSB4IHBvcyBcIiwgdGhpcy5nYW1lLmJlYW0ueCk7XG5cdFx0XHQvL3VwZGF0ZSBjcm9zcyBzZWN0aW9uIGRpc3RyaWJ1dGlvblxuXHQgICAgICAgIC8vIGdyYXBoaWNzLmRyYXdFbGxpcHNlKHhFbGxpcHNlLCB5RWxsaXBzZSwgMTAwLDEwMCk7XG5cdCAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcblx0ICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoOCwgMHhmZmQ5MDApO1xuXHQgICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZDkwMCk7XG5cdCAgICAgICAgZ3JhcGhpY3MuZHJhd0VsbGlwc2UoeEVsbGlwc2UsIHlFbGxpcHNlLCBlbGxpcHNlLmEsIGVsbGlwc2UuYik7XG5cdCAgICAgICAgZWxsaXBzZS5hICo9IGVsbGlwc2UuZmEgO1xuXHQgICAgICAgIGVsbGlwc2UuYiAqPSBlbGxpcHNlLmZiIDtcblxuXHQgICAgICAgIGNvbnNvbGUubG9nKCcgIyAnLGN1cnJlbnRDb21wSW5kZXgpO1xuXHRcdFx0dmFyIGN1cnJlbnRDb21wID0gdGhpcy5nYW1lLm15Q29tcG9uZW50c1t0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzW2N1cnJlbnRDb21wSW5kZXhdXTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3ByaXRlID0gdGhpcy5nYW1lLm15U3ByaXRlc1t0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzW2N1cnJlbnRDb21wSW5kZXhdXTtcblx0XHRcdGNvbnNvbGUubG9nKFwic2FsdXRcIiwgY3VycmVudENvbXAubW9kZWwubmFtZSwgJyAjICcsY3VycmVudENvbXBJbmRleCk7XG5cdFx0XHRpZiAoY3VycmVudENvbXAudHlwZSA9PSA0KXtcblx0XHRcdFx0Y3VycmVudENvbXBJbmRleCA9IDEwMDtcblx0XHRcdH1cblx0XHRcdHZhciB4Q3VycmVudE1heCA9IHhJbmk7IC8vIC0gaW5qZWN0b3JXaWR0aC8yIDtcblx0XHRcdGZvciAodmFyIGk9MDsgaTxjdXJyZW50Q29tcEluZGV4OyBpKyspe1xuICAgICAgICAgICAgICAgIHZhciBjdXJTcHJpdGUgPSB0aGlzLmdhbWUubXlTcHJpdGVzW3RoaXMuZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHNbaV1dO1xuICAgICAgICAgICAgICAgIHZhciBjdXJDb21wb25lbnQgPSB0aGlzLmdhbWUubXlDb21wb25lbnRzW3RoaXMuZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHNbaV1dO1xuXHRcdFx0XHR4Q3VycmVudE1heCArPSBjdXJTcHJpdGUud2lkdGg7XG5cdFx0XHRcdGlmIChjdXJDb21wb25lbnQudHlwZSA9PSAyIHx8IGN1ckNvbXBvbmVudC50eXBlID09IDMpe1xuXHRcdFx0XHRcdHhDdXJyZW50TWF4IC09IGN1clNwcml0ZS53aWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdHhDdXJyZW50TWF4ICs9IG1hcmdpbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VyQ29tcG9uZW50LnR5cGU9PTQpe1xuXHRcdFx0XHRcdHhDdXJyZW50TWF4IC09IG1hcmdpbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIHhUb3RhbE1heCA9IHhJbmk7XG5cdFx0XHRmb3IgKHZhciBpPTA7IGk8dGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIGN1clNwcml0ZSA9IHRoaXMuZ2FtZS5teVNwcml0ZXNbdGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50c1tpXV07XG5cdFx0XHRcdHhUb3RhbE1heCArPSBjdXJTcHJpdGUud2lkdGg7XG5cdFx0XHR9XG5cblxuXG5cdFx0XHR2YXIgY29tcEhhc05vU2l6ZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGN1cnJlbnRDb21wLnR5cGUgPT0gMiB8fCBjdXJyZW50Q29tcC50eXBlID09IDMgKXtcblx0XHRcdFx0Y29tcEhhc05vU2l6ZSA9IHRydWU7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYgKGN1cnJlbnRDb21wLnR5cGUgPT0gMiB8fCBjdXJyZW50Q29tcC50eXBlID09IDMpe1xuXHRcdFx0XHR2YXIgdGVtcCA9IGVsbGlwc2UuZmE7XG5cdFx0XHRcdGVsbGlwc2UuZmEgPSBlbGxpcHNlLmZiO1xuXHRcdFx0XHRlbGxpcHNlLmZiID0gdGVtcDtcblx0XHRcdFx0Y3VycmVudENvbXAuZGlkTWF0cml4ID0gdHJ1ZTtcblx0XHRcdFx0Y3VycmVudENvbXBJbmRleCsrO1xuXG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc29sZS5sb2coXCJsYSBwaWVjZSBudW1lcm8gXCIsY3VycmVudENvbXBJbmRleCwgXCJzJ8OpdGVuZCBqdXNxdWUgXCIseEN1cnJlbnRNYXggKVxuXHRcdFx0aWYgKHRoaXMuZ2FtZS5iZWFtLnggPj0geEN1cnJlbnRNYXggLSBjdXJyZW50U3ByaXRlLndpZHRoKjAuNSAmJiBjdXJyZW50Q29tcC5kaWRNYXRyaXg9PWZhbHNlKXtcblx0XHRcdFx0Ly8gUkYgQ0FTRVxuXHRcdFx0XHRpZiAoY3VycmVudENvbXAudHlwZSA9PSAwKXtcblx0XHRcdFx0XHR0aGlzLmdhbWUuYmVhbS5lbmVyZ3kgKz0gMiA7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgTEUgUkYgIyBcIixjdXJyZW50Q29tcEluZGV4LCBcIkEgRkFJVCBFRkZFVFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50Q29tcC5kaWRNYXRyaXggPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5nYW1lLmJlYW0ueCA+PSB4Q3VycmVudE1heCAmJiBjb21wSGFzTm9TaXplID09IGZhbHNlICl7XG5cdFx0XHRcdGN1cnJlbnRDb21wSW5kZXggKysgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGN1cnJlbnRDb21wSW5kZXggPiB0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCApe1xuXHRcdFx0XHR0aGlzLmdhbWUuYmVhbS54ID0geEluaTtcblx0XHRcdFx0dGhpcy5nYW1lLmJlYW0uZW5lcmd5ID0gIGluamVjdG9yQ29tcG9uZW50Lm1vZGVsLm1heEVuZXJneVswXTtcblx0XHRcdFx0Y3VycmVudENvbXBJbmRleCA9IDA7XG5cdFx0XHRcdGN1cnJlbnRDb21wID0gdGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50c1swXTtcblx0XHRcdFx0ZWxsaXBzZS5hPTYwO1xuXHRcdFx0XHRlbGxpcHNlLmI9NjA7XG5cdFx0XHRcdGVsbGlwc2UuZmE9MS4wMztcblx0XHRcdFx0ZWxsaXBzZS5mYj0wLjk4O1xuXHRcdFx0fVxuXG5cdH1cblxufTtcblxuXG5mdW5jdGlvbiBkb3duU2hvcChpdGVtKSB7XG4vL1xuICAgIC8vIGl0ZW0udGV4dCA9IFwiY2xpY2tlZFwiO1xuXG59XG5cbmZ1bmN0aW9uIGRvd25SdW4oaXRlbSkge1xuXG4gICAgLy8gaXRlbS50ZXh0ID0gXCJjbGlja2VkXCI7XG5cbn1cblxuZnVuY3Rpb24gZG93blNpbXVsYXRlKGl0ZW0pIHtcbiAgICAvLyBpdGVtLnRleHQgPSBcImNsaWNrZWQgXCI7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiU2ltdWxhdGlvblN0YXRlXCIpO1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImNvbXBvbmVudHNcIlxuaW1wb3J0IHtTaW11bGF0aW9uU3RhdGV9IGZyb20gXCJzaW11bGF0aW9uU3RhdGVcIlxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZVN0YXRlKGdhbWUpe1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5nYW1lLm1vbmV5ID0gMTAwO1xuICAgIHRoaXMuZ2FtZS5zaXplVGVycml0b3J5ID0gMTA7XG4gICAgdGhpcy5pbmRleEluamVjdG9yID0gNTtcblxuICAgIHRoaXMuZ2FtZS5teUNvbXBvbmVudHMgPSBbXG4gICAgICAgIG5ldyBDb21wb25lbnQodGhpcy5pbmRleEluamVjdG9yLDApLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDAsMCksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMCwxKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgwLDIpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDEsMCksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMSwxKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgxLDIpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDIsMCksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMiwxKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgyLDIpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDMsMCksXG4gICAgICAgIG5ldyBDb21wb25lbnQoMywxKSxcbiAgICAgICAgbmV3IENvbXBvbmVudCgzLDIpLFxuICAgICAgICBuZXcgQ29tcG9uZW50KDQsMCksXG4gICAgXTtcbiAgICB0aGlzLmdhbWUubXlTcHJpdGVzID0gW107XG4gICAgdGhpcy5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgdGhpcy53aWR0aEludmVudG9yeSA9IDQwMDtcbiAgICB0aGlzLmhlaWdodFRvcEJhciA9IDMwO1xuICAgIHRoaXMuaGVpZ2h0QnV0dG9uID0gMTAwO1xuICAgIHRoaXMuZm9udFRleHRCdXR0b24gPSAzMDtcbiAgICB0aGlzLmludmVudG9yeU1hcmdpbiA9IHtcbiAgICAgICAgeDogMTAsXG4gICAgICAgIHk6IDIwXG4gICAgfTtcbiAgICB0aGlzLnNjYWxlRmFjdG9yU3ByaXRlcyA9IDAuNTtcbiAgICB0aGlzLm1hcmdpbkNvbm5lY3RvciA9IDY0ICogdGhpcy5zY2FsZUZhY3RvclNwcml0ZXM7XG4gICAgdGhpcy5ibHVlID0gMHgwMDUzQTE7XG4gICAgdGhpcy55ZWxsb3cgPSAweEYxQzQwRjtcbiAgICB0aGlzLnJlZCA9IDB4RTc0QzNDO1xuICAgIHRoaXMuZ3JlZW4gPSAweDJlY2M3MTtcblxuICAgIHRoaXMuZ2FtZS5kaXNwbGF5ID0ge1xuICAgICAgICBpbnZlbnRvcnk6IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoSW52ZW50b3J5LFxuICAgICAgICAgICAgaGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICAgICAgfSxcbiAgICAgICAgdG9wQmFyOiB7XG4gICAgICAgICAgICB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0VG9wQmFyXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmdpbkNvbm5lY3RvcjogdGhpcy5tYXJnaW5Db25uZWN0b3JcbiAgICB9O1xufTtcblxuR2FtZVN0YXRlLnByb3RvdHlwZSA9IHtcbiAgICBwcmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUucmVmcmVzaCgpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB2YXIgb2JqID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lLm15Q29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvLCBpQ29tcG8pIHtcbiAgICAgICAgICAgIG9iai5nYW1lLmxvYWQuaW1hZ2UoY29tcG8ubW9kZWwubmFtZSArIGlDb21wby50b1N0cmluZygpLCAnLi4vaW1hZ2VzL2NvbXBvbmVudHMvJyArIGNvbXBvLm1vZGVsLnRleHR1cmVbY29tcG8udXBncmFkZV0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcblxuICAgICAgICB0aGlzLmNyZWF0ZUludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgICAgICB2YXIgb2JqID0gdGhpcztcblxuICAgICAgICB0aGlzLmdhbWUuY29tcG9Hcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lLmNvbXBvR3JvdXAuaW5wdXRFbmFibGVDaGlsZHJlbiA9IHRydWU7XG5cbiAgICAgICAgdmFyIG5leHRZID0gMTAwO1xuICAgICAgICB0aGlzLmdhbWUubXlTcHJpdGVzID0gW107XG4gICAgICAgIHRoaXMuZ2FtZS5teUNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbihjb21wbywgaUNvbXBvKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBvLmluQWNjZWxlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ByaXRlQ29tcG8gPSBvYmouZ2FtZS5jb21wb0dyb3VwLmNyZWF0ZSgwLCAwLCBjb21wby5tb2RlbC5uYW1lICsgaUNvbXBvLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIG9iai5nYW1lLm15U3ByaXRlcy5wdXNoKHNwcml0ZUNvbXBvKTtcblxuICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLnNjYWxlLnNldFRvKG9iai5zY2FsZUZhY3RvclNwcml0ZXMsIG9iai5zY2FsZUZhY3RvclNwcml0ZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLnBvc2l0aW9uLnggPSBjb21wby5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5wb3NpdGlvbi55ID0gY29tcG8ucG9zaXRpb24ueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8ucG9zaXRpb24ueCA9IG9iai53aWR0aEludmVudG9yeS8yIC0gc3ByaXRlQ29tcG8ud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5wb3NpdGlvbi55ID0gbmV4dFk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvLnBvc2l0aW9uID0gc3ByaXRlQ29tcG8ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvLm9yaWdpbmFsUG9zaXRpb24gPSBzcHJpdGVDb21wby5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmouZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoc3ByaXRlQ29tcG8pO1xuXG4gICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcHJpdGVDb21wby5pbnB1dC5lbmFibGVEcmFnKCk7XG4gICAgICAgICAgICAgICAgc3ByaXRlQ29tcG8uZXZlbnRzLm9uRHJhZ1N0YXJ0LmFkZChmdW5jdGlvbihjdXJyZW50U3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdGFydERyYWcoaUNvbXBvKTtcbiAgICAgICAgICAgICAgICB9LCBvYmopO1xuICAgICAgICAgICAgICAgIHNwcml0ZUNvbXBvLmV2ZW50cy5vbkRyYWdTdG9wLmFkZChmdW5jdGlvbihjdXJyZW50U3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdG9wRHJhZyhpQ29tcG8pO1xuICAgICAgICAgICAgICAgIH0sIG9iaik7XG5cbiAgICAgICAgICAgICAgICBuZXh0WSA9IHNwcml0ZUNvbXBvLnBvc2l0aW9uLnkgKyBzcHJpdGVDb21wby5oZWlnaHQgKyBvYmouaW52ZW50b3J5TWFyZ2luLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuaW5wdXQubW91c2UubW91c2VXaGVlbENhbGxiYWNrID0gdGhpcy56b29tRXZlbnQ7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsKCk7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpe1xuICAgIH0sXG5cbiAgICBzYXZlTW9kZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15Q29tcG9uZW50c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWUubXlDb21wb25lbnRzKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZWxlcmF0b3JDb21wb25lbnRzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMpKTtcbiAgICB9LFxuXG4gICAgbG9hZE1vZGVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nYW1lLm15Q29tcG9uZW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUNvbXBvbmVudHNcIikpO1xuICAgICAgICB0aGlzLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2VsZXJhdG9yQ29tcG9uZW50c1wiKSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUludGVyZmFjZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJsdWU7XG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG5cbiAgICAgICAgLy8gVG9wIGJhclxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoXCIjMDAwMDAwXCIsMSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KDAsIDAsICQod2luZG93KS53aWR0aCgpLCB0aGlzLmhlaWdodFRvcEJhcik7XG5cbiAgICAgICAgLy8gSW52ZW50b3J5XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChcIiMwMDAwMDBcIiwwLjQpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCgwLCB0aGlzLmhlaWdodFRvcEJhciwgdGhpcy53aWR0aEludmVudG9yeSwgJCh3aW5kb3cpLmhlaWdodCgpKTtcblxuICAgICAgICAvLyBSaWdodCBwYW5lbFxuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCgkKHdpbmRvdykud2lkdGgoKSAtIDI1MCwgODAsIDIzMCwgNTAwKTtcblxuICAgICAgICAvLyBTaG9wIGJ1dHRvblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwodGhpcy55ZWxsb3csIDEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCgwLCAkKHdpbmRvdykuaGVpZ2h0KCkgLSB0aGlzLmhlaWdodEJ1dHRvbiwgdGhpcy53aWR0aEludmVudG9yeSwgMTAwKTtcblxuICAgICAgICAvLyBSdW4gYnV0dG9uXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLnJlZCwgMSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KCQod2luZG93KS53aWR0aCgpIC0gMjUwLCA0ODAsIDIzMCwgdGhpcy5oZWlnaHRCdXR0b24pO1xuXG4gICAgICAgIC8vIFNpbXVsYXRlIGJ1dHRvblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwodGhpcy5ncmVlbiwgMSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KCQod2luZG93KS53aWR0aCgpIC0gMjUwLCAzODAsIDIzMCwgdGhpcy5oZWlnaHRCdXR0b24pO1xuXG5cbiAgICAgICAgLy8gU0hPUCBUZXh0XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KDEzMCwgJCh3aW5kb3cpLmhlaWdodCgpIC0gdGhpcy5oZWlnaHRCdXR0b24vMiAtIHRoaXMuZm9udFRleHRCdXR0b24vMiwgXCJTSE9QXCIsIHsgZm9udDogdGhpcy5mb250VGV4dEJ1dHRvbi50b1N0cmluZygpICsgXCJweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDAwMDBcIiwgYWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcbiAgICAgICAgdGV4dC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0ZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoZG93blNob3AsIHRoaXMpO1xuICAgICAgICAvL3RoaXMuc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgLy9SVU4gQnV0dG9uXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMTcwLCA1MTUsIFwiUlVOXCIsIHsgZm9udDogdGhpcy5mb250VGV4dEJ1dHRvbi50b1N0cmluZygpICsgXCJweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDAwMDBcIiwgYWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcbiAgICAgICAgdGV4dC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0ZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoZG93blJ1biwgdGhpcyk7XG4gICAgICAgIC8vdGhpcy5zdGFnZS5hZGRDaGlsZCh0ZXh0KTtcblxuICAgICAgICAvL1NJTVVMQVRFIEJ1dHRvblxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgkKHdpbmRvdykud2lkdGgoKSAtIDIxNSwgNDE1LCBcIlNJTVVMQVRFXCIsIHsgZm9udDogdGhpcy5mb250VGV4dEJ1dHRvbi50b1N0cmluZygpICsgXCJweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDAwMDBcIiwgYWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcbiAgICAgICAgdGV4dC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0ZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoZG93blNpbXVsYXRlLCB0aGlzKTtcblxuICAgICAgICAvL0ludmVudG9yeSBUZXh0XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KDEwLCA0MCwgXCJJbnZlbnRvcnlcIiwgeyBmb250OiB0aGlzLmZvbnRUZXh0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBhbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuXG4gICAgICAgIC8vQ2VudGVyLW9mLU1hc3MgZW5lcmd5XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMjQwLCA5MCwgXCJDZW50ZXItb2YtTWFzc1xcbmVuZXJneVwiLCB7IGZvbnQ6IFwiMjBweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuXG4gICAgICAgIC8vUGVhayBsdW1pbm9zaXR5XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMjQwLCAxOTAsIFwiUGVhayBsdW1pbm9zaXR5XCIsIHsgZm9udDogXCIyMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG5cbiAgICAgICAgLy9MYXN0IHBhcnRpY2xlIGZvdW5kIGF0XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KCQod2luZG93KS53aWR0aCgpIC0gMjQwLCAyNzAsIFwiTGFzdCBwYXJ0aWNsZVxcbmZvdW5kIGF0XCIsIHsgZm9udDogXCIyMHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjkwMFwifSk7XG5cbiAgICAgICAgLy9UZXh0IEZvciBUb3AgTWVudSBiYXJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoMTUsOCwgXCJUUklBTFwiLCB7IGZvbnQ6IFwiMTVweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgZm9udFdlaWdodDogXCI3MDBcIn0pO1xuICAgICAgICAvLyBNb25leVxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgxMzAsOCwgdGhpcy5nYW1lLm1vbmV5LnRvU3RyaW5nKCkgKyBcIuKCrFwiLCB7IGZvbnQ6IFwiMTVweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGMDBcIiwgZm9udFdlaWdodDogXCI5MDBcIn0pO1xuICAgICAgICAvLyBBY2hpZXZlbWVudHMgbGlua1xuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgkKHdpbmRvdykud2lkdGgoKSAtIDIwMCAsOCwgXCJBQ0hJRVZFTUVOVFNcIiwgeyBmb250OiBcIjE1cHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCJ9KTtcbiAgICAgICAgdGV4dC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0ZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5kb3duQWNoaWV2ZW1lbnRzLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RhcnREcmFnOiBmdW5jdGlvbiAoaW5kZXhDb21wb25lbnQpIHtcbiAgICAgICAgLyogSWYgd2UgZHJhZyBhbiBvYmplY3QgZnJvbSB0aGUgYWNjZWxlcmF0b3IgKGllIGxhc3RTcHJpdGUgPT0gY3VycmVudFNwcml0ZSksXG4gICAgICAgIGl0IHNob3VsZCBiZSBwb3BwZWQgZnJvbSB0aGUgYWNjZWxlcmF0b3IgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAqL1xuICAgICAgICB2YXIgb2JqID0gdGhpcztcbiAgICAgICAgdmFyIGN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmdhbWUubXlDb21wb25lbnRzW2luZGV4Q29tcG9uZW50XTtcbiAgICAgICAgaWYgKG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgdmFyIGluZGV4TGFzdENvbXBvbmVudCA9IG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICB2YXIgbGFzdENvbXBvbmVudCA9IHRoaXMuZ2FtZS5teUNvbXBvbmVudHNbaW5kZXhMYXN0Q29tcG9uZW50XTtcbiAgICAgICAgICAgIGlmIChsYXN0Q29tcG9uZW50ID09IGN1cnJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBvYmouZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleExhc3RDb21wb25lbnQgPSBvYmouZ2FtZS5hY2NlbGVyYXRvckNvbXBvbmVudHMuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFNwcml0ZSA9IHRoaXMuZ2FtZS5teVNwcml0ZXNbaW5kZXhMYXN0Q29tcG9uZW50XTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNwcml0ZS5pbnB1dC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wRHJhZzogZnVuY3Rpb24gKGluZGV4Q29tcG9uZW50KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xuICAgICAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IHRoaXMuZ2FtZS5teUNvbXBvbmVudHNbaW5kZXhDb21wb25lbnRdO1xuICAgICAgICB2YXIgY3VycmVudFNwcml0ZSA9IHRoaXMuZ2FtZS5teVNwcml0ZXNbaW5kZXhDb21wb25lbnRdO1xuXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Lm1vZGVsLm5hbWUgPT0gXCJQcm90b24gSW5qZWN0b3JcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTcHJpdGUucG9zaXRpb24ueCA+IHRoaXMud2lkdGhJbnZlbnRvcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5wdXNoKGluZGV4Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3ByaXRlLnBvc2l0aW9uLmNvcHlGcm9tKGN1cnJlbnRDb21wb25lbnQub3JpZ2luYWxQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhMYXN0Q29tcG9uZW50ID0gb2JqLmdhbWUuYWNjZWxlcmF0b3JDb21wb25lbnRzLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIHZhciBsYXN0Q29tcG9uZW50ID0gdGhpcy5nYW1lLm15Q29tcG9uZW50c1tpbmRleExhc3RDb21wb25lbnRdO1xuICAgICAgICAgICAgdmFyIGxhc3RTcHJpdGUgPSB0aGlzLmdhbWUubXlTcHJpdGVzW2luZGV4TGFzdENvbXBvbmVudF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGN1cnJlbnRTcHJpdGUsIGxhc3RTcHJpdGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qIElmIGl0IG92ZXJsYXBwZWQgKi9cbiAgICAgICAgICAgICAgICBsYXN0U3ByaXRlLmlucHV0LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTcHJpdGUucG9zaXRpb24ueCA9IGxhc3RTcHJpdGUucG9zaXRpb24ueCArIGxhc3RTcHJpdGUud2lkdGggLSBvYmoubWFyZ2luQ29ubmVjdG9yO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTcHJpdGUucG9zaXRpb24ueSA9IGxhc3RTcHJpdGUucG9zaXRpb24ueSArIGxhc3RTcHJpdGUuaGVpZ2h0LzIgLSBjdXJyZW50U3ByaXRlLmhlaWdodC8yO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTcHJpdGUuYW5jaG9yLnNldFRvKGxhc3RTcHJpdGUuYW5jaG9yLngsIGxhc3RTcHJpdGUuYW5jaG9yLnkpO1xuICAgICAgICAgICAgICAgIG9iai5nYW1lLmFjY2VsZXJhdG9yQ29tcG9uZW50cy5wdXNoKGluZGV4Q29tcG9uZW50KVxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3ByaXRlLnBvc2l0aW9uLmNvcHlGcm9tKGN1cnJlbnRDb21wb25lbnQub3JpZ2luYWxQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIFRoaXMgaXMgbm90IGFuIGluamVjdG9yIGFuZCB3ZSBoYXZlIG5vdGhpbmcgb24gdGhlIHRlcnJpdG9yeVxuICAgICAgICAgICAgY3VycmVudFNwcml0ZS5wb3NpdGlvbi5jb3B5RnJvbShjdXJyZW50Q29tcG9uZW50Lm9yaWdpbmFsUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQucG9zaXRpb24gPSBjdXJyZW50U3ByaXRlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsKCk7XG4gICAgfSxcblxuICAgIHpvb21FdmVudDogZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICB9LFxuXG4gICAgZG93bkFjaGlldmVtZW50czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiQWNoaWV2ZW1lbnRzU3RhdGVcIilcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBkb3duU2hvcChpdGVtKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiU2hvcFN0YXRlXCIpO1xufVxuXG5mdW5jdGlvbiBkb3duUnVuKGl0ZW0pIHtcblxuICAgIGl0ZW0udGV4dCA9IFwiY2xpY2tlZFwiO1xuXG59XG5cbmZ1bmN0aW9uIGRvd25TaW11bGF0ZShpdGVtKSB7XG4gICAgaXRlbS50ZXh0ID0gXCJjbGlja2VkIFwiO1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydChcIlNpbXVsYXRpb25TdGF0ZVwiKTtcblxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gXCJnYW1lU3RhdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjaGlldmVtZW50c1N0YXRlKGdhbWUpe1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgdGhlIGFjaGlldmVtZW50cyBldmVudFwiKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuc3RhdGVTaXplID0ge1xuICAgICAgICB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCkqMC41LFxuICAgICAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSowLjdcbiAgICB9O1xuICAgIHRoaXMuc3RhdGVQb3NpdGlvbiA9IHtcbiAgICAgICAgeDogJCh3aW5kb3cpLndpZHRoKCkvMiAtIHRoaXMuc3RhdGVTaXplLndpZHRoLzIsXG4gICAgICAgIHk6ICQod2luZG93KS5oZWlnaHQoKS8yIC0gdGhpcy5zdGF0ZVNpemUuaGVpZ2h0LzJcbiAgICB9O1xuICAgIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dCA9IHtcbiAgICAgICAgeDogOCArIHRoaXMuc3RhdGVQb3NpdGlvbi54LFxuICAgICAgICB5OiA1ICsgdGhpcy5zdGF0ZVBvc2l0aW9uLnlcbiAgICB9O1xuICAgIHRoaXMuZGFya0JsdWUgPSAweDFGM0E5Mztcbn07XG5cblxuXG5BY2hpZXZlbWVudHNTdGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgcHJlbG9hZDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcmVsb2FkaW5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3MnLCAnLi4vaW1hZ2VzL2J1dHRvbnMvYnV0dG9uLWNsb3NlLnBuZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndHJvcGh5MScsICcuLi9pbWFnZXMvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy1nZW5lcmljLnBuZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndHJvcGh5MicsICcuLi9pbWFnZXMvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy1nZW5lcmljLnBuZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndHJvcGh5MycsICcuLi9pbWFnZXMvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy1nZW5lcmljLnBuZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndHJvcGh5NCcsICcuLi9pbWFnZXMvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy1nZW5lcmljLnBuZycpO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSh0aGlzLmdhbWUpO1xuICAgICAgICBnYW1lU3RhdGUuY3JlYXRlKCk7XG4gICAgICAgIC8vIERyYXcgYWNoaWV2ZW1lbnRzIHBhbmVsXG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgwLDAuMyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KHRoaXMuc3RhdGVQb3NpdGlvbi54LTUsIHRoaXMuc3RhdGVQb3NpdGlvbi55LTUsIHRoaXMuc3RhdGVTaXplLndpZHRoKzEwLHRoaXMuc3RhdGVTaXplLmhlaWdodCsxMCk7XG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmRhcmtCbHVlLDEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCh0aGlzLnN0YXRlUG9zaXRpb24ueCwgdGhpcy5zdGF0ZVBvc2l0aW9uLnksIHRoaXMuc3RhdGVTaXplLndpZHRoLHRoaXMuc3RhdGVTaXplLmhlaWdodCk7XG5cbiAgICAgICAgLy9BY2hpZXZlbWVudHNcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5hY2hpZXZlbWVudHNUZXh0LngsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55LCBcIkFjaGlldmVtZW50c1wiLCB7IGZvbnQ6IFwiMzBweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIn0pO1xuICAgICAgICB0ZXh0LnN0cm9rZVRoaWNrbmVzcyA9IDI7XG4gICAgICAgIHRleHQuZm9udFdlaWdodCA9ICdib2xkJztcblxuICAgICAgICAvL0xpbmVcbiAgICAgICAgdmFyIGxpbmUgPSBuZXcgUGhhc2VyLkxpbmUodGhpcy5zdGF0ZVBvc2l0aW9uLngsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55KzM4LCB0aGlzLnN0YXRlUG9zaXRpb24ueCArIHRoaXMuc3RhdGVTaXplLndpZHRoLCB0aGlzLmFjaGlldmVtZW50c1RleHQueSszOCk7XG4gICAgICAgIHZhciBncmFwaGljcz0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLDApO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmZmZmYsIDEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obGluZS5zdGFydC54LGxpbmUuc3RhcnQueSk7Ly9tb3ZpbmcgcG9zaXRpb24gb2YgZ3JhcGhpYyBpZiB5b3UgZHJhdyBtdWxpdHBsZSBsaW5lc1xuICAgICAgICBncmFwaGljcy5saW5lVG8obGluZS5lbmQueCxsaW5lLmVuZC55KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuXG4gICAgICAgIC8vY3Jvc3NcbiAgICAgICAgdmFyIGNyb3NzSW1hZ2UgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuc3RhdGVQb3NpdGlvbi54ICsgdGhpcy5zdGF0ZVNpemUud2lkdGggLSAzNSwgdGhpcy5hY2hpZXZlbWVudHNUZXh0LnksICdjcm9zcycpO1xuICAgICAgICBjcm9zc0ltYWdlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNyb3NzSW1hZ2UuZXZlbnRzLm9uSW5wdXREb3duLmFkZChpbWFnZUNsaWNrZWQsIHRoaXMpO1xuXG4gICAgICAgIHZhciB0cm9waGllc0ltYWdlWCA9IHRoaXMuc3RhdGVQb3NpdGlvbi54ICsgMztcblxuXG4gICAgICAgIC8vaW1hZ2UxLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB2YXIgdHJvcGh5MSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodHJvcGhpZXNJbWFnZVgsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55KzY1LCAndHJvcGh5MScpO1xuICAgICAgICAvL3RleHQgb2YgaW1hZ2UxXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuc3RhdGVQb3NpdGlvbi54ICsgMTMwLCB0aGlzLmFjaGlldmVtZW50c1RleHQueSArIDY1LCBcIkZpcnN0IGFjY2VsZXJhdG9yXCIsIHsgZm9udDogXCIyMnB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwifSk7XG4gICAgICAgIHRleHQuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5zdGF0ZVBvc2l0aW9uLnggKyAxMzAsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55ICsgOTIsIFwiQnVpbGQgeW91ciBmaXJzdCBhY2NlbGVyYXRvci5cIiwgeyBmb250OiBcIjIycHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCJ9KTtcblxuXG5cbiAgICAgICAgLy9pbWFnZTItLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdmFyIHRyb3BoeTIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRyb3BoaWVzSW1hZ2VYLCB0aGlzLmFjaGlldmVtZW50c1RleHQueSsxNzAsICd0cm9waHkyJyk7XG4gICAgICAgIC8vdGV4dCBvZiBpbWFnZTJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5zdGF0ZVBvc2l0aW9uLnggKyAxMzAsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55ICsgMTY1LCBcIkZpcnN0IGNvbGxpc2lvblwiLCB7IGZvbnQ6IFwiMjJweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIn0pO1xuICAgICAgICB0ZXh0LmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuc3RhdGVQb3NpdGlvbi54ICsgMTMwLCB0aGlzLmFjaGlldmVtZW50c1RleHQueSArIDE4OCwgXCJSdW4geW91ciBhY2NlbGVyYXRvciBhbmQgY29sbGlkZSBwYXJ0aWNsZXMgaW4gYSBkZXRlY3RvciBmb3IgdGhlIGZpcnN0IHRpbWUuXCIsIHsgZm9udDogXCIyMnB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwifSk7XG5cbiAgICAgICAgLy9pbWFnZTMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHZhciB0cm9waHkzID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0cm9waGllc0ltYWdlWCwgdGhpcy5hY2hpZXZlbWVudHNUZXh0LnkrMjc1LCAndHJvcGh5MycpO1xuICAgICAgICAvL3RleHQgb2YgaW1hZ2UzXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuc3RhdGVQb3NpdGlvbi54ICsgMTMwLCB0aGlzLmFjaGlldmVtZW50c1RleHQueSArIDI3MCwgXCJGaXJzdCBkaXNjb3ZlcnlcIiwgeyBmb250OiBcIjIycHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCJ9KTtcbiAgICAgICAgdGV4dC5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnN0YXRlUG9zaXRpb24ueCArIDEzMCwgdGhpcy5hY2hpZXZlbWVudHNUZXh0LnkgKyAyOTMsIFwiRGlzY292ZXIgeW91ciBmaXJzdCBwYXJ0aWNsZS5cIiwgeyBmb250OiBcIjIycHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCJ9KTtcblxuXG4gICAgICAgIC8vaW1hZ2U0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB2YXIgdHJvcGh5NCA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodHJvcGhpZXNJbWFnZVgsIHRoaXMuYWNoaWV2ZW1lbnRzVGV4dC55KzM4MCwgJ3Ryb3BoeTQnKTtcbiAgICAgICAgLy90ZXh0IG9mIGltYWdlNFxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnN0YXRlUG9zaXRpb24ueCArIDEzMCwgdGhpcy5hY2hpZXZlbWVudHNUZXh0LnkgKyAzNzUsIFwiRkNDIC0gRmlyc3QgQ2xhc3MgQ29sbGlkZXJcIiwgeyBmb250OiBcIjIycHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCJ9KTtcbiAgICAgICAgdGV4dC5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnN0YXRlUG9zaXRpb24ueCArIDEzMCwgdGhpcy5hY2hpZXZlbWVudHNUZXh0LnkgKyAzOTgsIFwiQnVpbGQgYW4gYWNjZWxlcmF0b3IgZW50aXJlbHkgZnJvbSBmaXJzdCBjbGFzcyBjb21wb25lbnRzLlwiLCB7IGZvbnQ6IFwiMjJweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIn0pO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGltYWdlQ2xpY2tlZCAoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiR2FtZVN0YXRlXCIpO1xufVxuIiwiZXhwb3J0IHZhciBsaXN0Q29tcG9uZW50cyA9XG5bXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJSRiBDYXZpdHlcIixcbiAgICAgICAgXCJzaG9wQ2F0ZWdvcnlcIjogXCJSYWRpb2ZyZXF1ZW5jeSBDYXZpdGllc1wiLFxuXHRcInNob3BEZXNjcmlwdGlvblwiOiBbXCJNYXggVm9sdGFnZTogNVwiLCBcIk1heCBWb2x0YWdlOiAxMFwiLCBcIk1heCBWb2x0YWdlOiAyNVwiXSxcblx0XCJ1cGdyYWRlTmFtZVwiOiBbXCJCcm9uemVcIiwgXCJTaWx2ZXJcIiwgXCJHb2xkXCJdLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSByYWRpb2ZyZXF1ZW5jeSAoUkYpIGNhdml0eSBpcyBhIG1ldGFsbGljIGNoYW1iZXIgdGhhdCBjb250YWlucyBhbiBlbGVjdHJvbWFnbmV0aWMgZmllbGQuIEl0cyBwcmltYXJ5IHB1cnBvc2UgaXMgdG8gYWNjZWxlcmF0ZSBjaGFyZ2VkIHBhcnRpY2xlcy4gUkYgY2F2aXRpZXMgY2FuIGJlIHN0cnVjdHVyZWQgbGlrZSBiZWFkcyBvbiBhIHN0cmluZywgd2hlcmUgdGhlIGJlYWRzIGFyZSB0aGUgY2F2aXRpZXMgYW5kIHRoZSBzdHJpbmcgaXMgdGhlIGJlYW0gcGlwZSBvZiBhIHBhcnRpY2xlIGFjY2VsZXJhdG9yLCB0aHJvdWdoIHdoaWNoIHBhcnRpY2xlcyB0cmF2ZWwgaW4gYSB2YWN1dW0uXCIsXG4gICAgICAgIFwidGV4dHVyZVwiOiBbXCJyZi1icm9uemUucG5nXCIsIFwicmYtc2lsdmVyLnBuZ1wiLCBcInJmLWdvbGQucG5nXCJdLFxuXHRcImFSYXRpb1wiIDogNy4xMDksXG5cdFwiY29sb3JOYW1lXCI6IFtcIjB4Q0U1QTAwXCIsIFwiMHhCREJEQkRcIiwgXCIweEZGQzIwMFwiXSxcbiAgICAgICAgXCJpY29uXCI6IFwicmYtbGFyZ2UucG5nXCIsXG4gICAgICAgIFwicHJpY2VcIjogWzEwLCAxNSwgMjVdLFxuICAgICAgICBcIm1hdHJpeFwiOiBbWzEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwxLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDEsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwxLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMV1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgIFwibWF4Vm9sdGFnZVwiOiBbMTAsMjAsMzBdLFxuICAgICAgICBcIm1heFF1YWxpdHlcIjogWzEsMiwzXSxcbiAgICAgICAgXCJ0dXRvcmlhbFwiOiBcInJmLmh0bWxcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlZhY3V1bSBDaGFtYmVyXCIsXG4gICAgICAgIFwic2hvcENhdGVnb3J5XCI6IFwiVmFjdXVtIENoYW1iZXJzXCIsXG5cdFwic2hvcERlc2NyaXB0aW9uXCI6IFtcIlB1cml0eTogMC4xXCIsIFwiUHVyaXR5OiAwLjRcIiwgXCJQdXJpdHk6IDAuOVwiXSxcblx0XCJ1cGdyYWRlTmFtZVwiOiBbXCJCcm9uemVcIiwgXCJTaWx2ZXJcIiwgXCJHb2xkXCJdLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVmFjdXVtIGNoYW1iZXIgYXJlIHRoZSBlbGVtZW50YXJ5IGNvbXBvbmVudHMgb2YgeW91ciBhY2NlbGVyYXRvci4gWW91ciBwYXJ0aWNsZSBiZWFtIHRoZSBjbGVhbmVzdCBzcGFjZSB0byBjaXJjdWxhdGUuIFRoYXQgaXMgd2h5IGVhY2ggZGV2aWNlIGlzIGJ1aWx0IGFyb3VuZCBhIHZhY3V1bSBjaGFtYmVyLlxcblRoZXNlIHZhY3V1bSBjaGFtYmVyIHBpZWNlcyBvbmx5IHJlcHJlc2VudCBwYXJ0cyBvZiBjaXJjdWl0IHRoYXQgZG9lcyBub3QgaW1wYWN0IHRoZSBzcGVlZCBlaXRoZXIgdGhlIHRyYW5zdmVyc2FsIHNoYXBlIG9mIHlvdXIgYmVhbS5cIixcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFtcInZhY3V1bS10dWJlLWJyb256ZS5wbmdcIiwgXCJ2YWN1dW0tdHViZS1zaWx2ZXIucG5nXCIsIFwidmFjdXVtLXR1YmUtZ29sZC5wbmdcIl0sXG5cdFwiYVJhdGlvXCIgOiA2LjksXG5cdFwiY29sb3JOYW1lXCI6IFtcIjB4Q0U1QTAwXCIsIFwiMHhCREJEQkRcIiwgXCIweEZGQzIwMFwiXSxcbiAgICAgICAgXCJpY29uXCI6IFwidmFjdXVtLXR1YmUtbGFyZ2UucG5nXCIsXG4gICAgICAgIFwicHJpY2VcIjogWzEsIDMsIDZdLFxuICAgICAgICBcIm1hdHJpeFwiOiBbWzEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwxLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDEsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwxLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMV1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgIFwibWF4UXVhbGl0eVwiOiBbMSwyLDNdLFxuICAgICAgICBcInR1dG9yaWFsXCI6IFwidmFjdXVtLWNoYW1iZXIuaHRtbFwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUXVhZHJ1cG9sZSBNYWduZXQgeFwiLFxuICAgICAgICBcInNob3BDYXRlZ29yeVwiOiBcIlF1YWRydXBvbGUgTWFnbmV0cyBpbiBYXCIsXG5cdFwic2hvcERlc2NyaXB0aW9uXCI6IFtcIk1heCBCLWZpZWxkOiAxIEcgR2F1c3NcIiwgXCJNYXggQi1maWVsZDogMiBHIEdhdXNzXCIsIFwiTWF4IEItZmllbGQ6IDUgRyBHYXVzc1wiXSxcblx0XCJ1cGdyYWRlTmFtZVwiOiBbXCJCcm9uemVcIiwgXCJTaWx2ZXJcIiwgXCJHb2xkXCJdLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUXVhZHJ1cG9sZXMgZW5hYmxlIHlvdSB0byBjb250cm9sIHRoZSBzaGFwZSBvZiB5b3VyIGJlYW0uIEFjdGluZyBhcyBvcHRpY2FsIGxlbnNlcywgdGhleSBmb2N1cyB5b3VyIGJlYW0gaW4geCBvciB5IGF4aXMgYW5kIGJ5IHRoZSB3YXkgYWxzbyBkZWZvY3VzIGl0IGluIHRoZSBvcHBvc2l0ZSBheGlzLiBCZSB2ZXJ5IGNhcmVmdWwgdG8gYmVhciBpbiBtaW5kIG5vdCBsZXR0aW5nIHlvdXIgYmVhbSBkaXZlcmdlIHVudGlsIHRvdWNoaW5nIHRoZSBjYXZpdHkgYm9hcmRlci4gT3RoZXJ3aXNlIHlvdSB3b3VsZCBsb29zZSBpdCAhXCIsXG4gICAgICAgIFwidGV4dHVyZVwiOiBbXCJxdWFkcnVwb2xlLXgtYnJvbnplLnBuZ1wiLFwicXVhZHJ1cG9sZS14LXNpbHZlci5wbmdcIixcInF1YWRydXBvbGUteC1nb2xkLnBuZ1wiXSxcblx0XCJjb2xvck5hbWVcIjogW1wiMHhDRTVBMDBcIiwgXCIweEJEQkRCRFwiLCBcIjB4RkZDMjAwXCJdLFxuXHRcImFSYXRpb1wiIDogMSxcbiAgICAgICAgXCJpY29uXCI6IFwiZGlwb2xlLWxhcmdlLnBuZ1wiLFxuICAgICAgICBcInByaWNlXCI6IFsxNSwgMjUsIDQ1XSxcbiAgICAgICAgXCJtYXRyaXhcIjogW1sxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMSwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDEsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwxLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMSwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDFdXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICBcImZvY3VzaW5nXCI6IFsxMCwyMCwzMF0sXG4gICAgICAgIFwibWF4UXVhbGl0eVwiOiBbMSwyLDNdLFxuICAgICAgICBcInR1dG9yaWFsXCI6IFwicXVhZHJ1cG9sZS5odG1sXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJRdWFkcnVwb2xlIE1hZ25ldCB5XCIsXG4gICAgICAgIFwic2hvcENhdGVnb3J5XCI6IFwiUXVhZHJ1cG9sZSBNYWduZXRzIGluIFlcIixcblx0XCJ1cGdyYWRlTmFtZVwiOiBbXCJCcm9uemVcIiwgXCJTaWx2ZXJcIiwgXCJHb2xkXCJdLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUXVhZHJ1cG9sZXMgZW5hYmxlIHlvdSB0byBjb250cm9sIHRoZSBzaGFwZSBvZiB5b3VyIGJlYW0uIEFjdGluZyBhcyBvcHRpY2FsIGxlbnNlcywgdGhleSBmb2N1cyB5b3VyIGJlYW0gaW4geCBvciB5IGF4aXMgYW5kIGJ5IHRoZSB3YXkgYWxzbyBkZWZvY3VzIGl0IGluIHRoZSBvcHBvc2l0ZSBheGlzLiBCZSB2ZXJ5IGNhcmVmdWwgdG8gYmVhciBpbiBtaW5kIG5vdCBsZXR0aW5nIHlvdXIgYmVhbSBkaXZlcmdlIHVudGlsIHRvdWNoaW5nIHRoZSBjYXZpdHkgYm9hcmRlci4gT3RoZXJ3aXNlIHlvdSB3b3VsZCBsb29zZSBpdCAhXCIsXG4gICAgICAgIFwidGV4dHVyZVwiOiBbXCJxdWFkcnVwb2xlLXktYnJvbnplLnBuZ1wiLFwicXVhZHJ1cG9sZS15LXNpbHZlci5wbmdcIixcInF1YWRydXBvbGUteS1nb2xkLnBuZ1wiXSxcblx0XCJhUmF0aW9cIiA6IDEsXG5cdFwiY29sb3JOYW1lXCI6IFtcIjB4Q0U1QTAwXCIsIFwiMHhCREJEQkRcIiwgXCIweEZGQzIwMFwiXSxcbiAgICAgICAgXCJpY29uXCI6IFwicXVhZHlJY29uLnBuZ1wiLFxuICAgICAgICBcInByaWNlXCI6IFsxNSwgMjUsIDUwXSxcbiAgICAgICAgXCJtYXRyaXhcIjogW1sxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMSwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDEsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwxLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMSwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDFdXG5cdFx0ICAgXSxcbiAgICAgICAgXCJtYXhJbnRlbnNpdHlcIjogWzEwLDIwLDMwXSxcbiAgICAgICAgXCJtYXhRdWFsaXR5XCI6IFsxLDIsM10sXG4gICAgICAgIFwidHV0b3JpYWxcIjogXCJxdWFkcnVwb2xlLmh0bWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJEZXRlY3RvclwiLFxuICAgICAgICBcInNob3BDYXRlZ29yeVwiOiBcIkRldGVjdG9yc1wiLFxuXHRcInVwZ3JhZGVOYW1lXCI6IFtcIkJyb256ZVwiLCBcIlNpbHZlclwiLCBcIkdvbGRcIl0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJKdXN0IGFzIGh1bnRlcnMgY2FuIGlkZW50aWZ5IGFuaW1hbHMgZnJvbSB0cmFja3MgaW4gbXVkIG9yIHNub3csIHBoeXNpY2lzdHMgaWRlbnRpZnkgc3ViYXRvbWljIHBhcnRpY2xlcyBmcm9tIHRoZSB0cmFjZXMgdGhleSBsZWF2ZSBpbiBkZXRlY3RvcnMuIFRoZSBkZXRlY3RvcnMgZ2F0aGVyIGNsdWVzIGFib3V0IHRoZSBwYXJ0aWNsZXMg4oCTIGluY2x1ZGluZyB0aGVpciBzcGVlZCwgbWFzcyBhbmQgY2hhcmdlIOKAkyBmcm9tIHdoaWNoIHBoeXNpY2lzdHMgY2FuIHdvcmsgb3V0IGEgcGFydGljbGUncyBpZGVudGl0eS5cXG5QdXQgYSBkZXRlY3RvciBhdCBzb21lIHBvaW50IG9mIHlvdXIgYWNjZWxlcmF0b3IgdG8gZW5hYmxlIHBoeXNpY2lzdHMgdG8gc3R1ZHkgdGhlIHBhcnRpY2xlIGFuZCBtYWtlIG5ldyBkaXNjb3ZlcmllcyAhXCIsXG4gICAgICAgIFwidGV4dHVyZVwiOiBbXCJkZXRlY3Rvci1icm9uemUucG5nXCIsXCJkZXRlY3Rvci1zaWx2ZXIucG5nXCIsXCJkZXRlY3Rvci1nb2xkLnBuZ1wiXSxcblx0XCJjb2xvck5hbWVcIjogW1wiMHhDRTVBMDBcIiwgXCIweEJEQkRCRFwiLCBcIjB4RkZDMjAwXCJdLFxuXHRcImljb25cIjogXCJkZXRlY3Rvci1sYXJnZS5wbmdcIixcbiAgICAgICAgXCJwcmljZVwiOiBbMTUsIDI1LCA1MF0sXG4gICAgICAgIFwibWF0cml4XCI6IFtbMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDEsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwxLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMSwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDEsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwxXVxuXHRcdCAgIF0sXG4gICAgICAgIFwibWF4SW50ZW5zaXR5XCI6IFsxMCwyMCwzMF0sXG4gICAgICAgIFwibWF4UXVhbGl0eVwiOiBbMSwyLDNdLFxuICAgICAgICBcInR1dG9yaWFsXCI6IFwiZGV0ZWN0b3IuaHRtbFwiXG4gICAgfSxcbiAgICB7XG5cdFwibmFtZVwiOiBcIlByb3RvbiBJbmplY3RvclwiLFxuXHRcInNob3BDYXRlZ29yeVwiOiBcIlByb3RvbiBJbmplY3RvcnNcIixcbiAgICAgICAgXCJ1cGdyYWRlTmFtZVwiOiBbXCJCcm9uemVcIiwgXCJTaWx2ZXJcIiwgXCJHb2xkXCJdLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gaW5qZWN0b3IgYWN0dWFsbHkgc3RhbmQgZm9yIGEgY29tcGxleCBpbnN0YWxsYXRpb24sIGluY2x1ZGluZyBhdCBsZWFzdCBhIHBhcnRpY2xlIHNvdXJjZS4gTm8gcGFuaWMsIHlvdSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGl0cyBjb21wb25lbnRzLiBTaW1wbHkgY29uc2lkZXIgaXQgYXMgYSBibGFjayBib3ggdGhhdCBwcm92aWRlIHlvdSBhIGJlYW0gb2Ygb25lIGtpbmQgb2YgcGFydGljbGVzIChlbGVjdHJvbnMsIHBvc2l0cm9ucywgcHJvdG9ucyBvciBhbnRpcHJvdG9ucykgYXQgYSBnaXZlbiBlbmVyZ3ksIGluIGEgYmVhbSB3aXRoIGEgZ2l2ZW4gc2hhcGUuXCIsXG5cdFwidGV4dHVyZVwiOiBbXCJpbmplY3Rvci1icm9uemUucG5nXCIsIFwiaW5qZWN0b3Itc2lsdmVyLnBuZ1wiLCBcImluamVjdG9yLWdvbGQucG5nXCJdLFxuXHRcImNvbG9yTmFtZVwiOiBbXCIweENFNUEwMFwiLCBcIjB4QkRCREJEXCIsIFwiMHhGRkMyMDBcIl0sXG5cdFwiaWNvblwiOiBcImluamVjdG9yLWxhcmdlLnBuZ1wiLFxuXHRcInByaWNlXCI6IFswLCAxMCwgMjBdLFxuXHRcIm1hdHJpeFwiOiBbWzEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwxLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgWzAsMCwwLDEsMCwwXSxcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwxLDBdLFxuICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMV1cblx0XHQgICBdLFxuICAgICAgICBcIm1heEVuZXJneVwiOiBbNTAsMTAwLDQwMF0sXG4gICAgICAgIFwibWF4UXVhbGl0eVwiOiBbMSwyLDNdLFxuICAgICAgICBcInR1dG9yaWFsXCI6IFwiaW5qZWN0b3IuaHRtbFwiXG5cdH0sXG5dO1xuIiwiaW1wb3J0IHtsaXN0Q29tcG9uZW50c30gZnJvbSBcIm1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaG9wU3RhdGUoZ2FtZSl7IC8vSm9yZGFuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIFNob3BTdGF0ZVwiKTtcblxufTtcblxuU2hvcFN0YXRlLnByb3RvdHlwZSA9IHtcbiAgICBwcmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZWxvYWRpbmdcIik7XG5cdHZhciBvYmogPSB0aGlzO1xuXHRsaXN0Q29tcG9uZW50cy5zbGljZSgwLCAzKS5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvKSB7XG5cdFx0b2JqLmdhbWUubG9hZC5pbWFnZShjb21wby5uYW1lICsgXCJpbWdcIiwgJy4uL2ltYWdlcy9zaG9wLycgKyBjb21wby5pY29uKTtcblx0XHRjb21wby51cGdyYWRlTmFtZS5mb3JFYWNoKGZ1bmN0aW9uKHVwZ05hbWUsIGspe1xuXHRcdFx0b2JqLmdhbWUubG9hZC5pbWFnZSh1cGdOYW1lICsgY29tcG8ubmFtZSArIFwidHh0XCIsICcuLi9pbWFnZXMvY29tcG9uZW50cy8nICsgY29tcG8udGV4dHVyZVtrXSk7XG5cdFx0ICAgIH0pO1xuXHQgICAgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcbiAgICBcdHZhciBvYmogPSB0aGlzO1xuXG4gICAgXHR2YXIgYnV5Q29sb3IgPSBcIjB4MDBFRTc2XCI7XG4gICAgXHR2YXIgYnV5Rm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIFx0dmFyIHdoID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNjA7XG4gICAgXHR2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICBcdHZhciBmcyA9IHd3LzEwMDAuO1xuICAgIFx0dmFyIGltZ1MgPSB3dy8xMjtcbiAgICBcdHZhciBjb21wSW1hZ2VzID0gW107XG4gICAgXHR2YXIgY29tcFRleHR1cmVzID0gW107XG4gICAgXHR2YXIgY29tcEJ1dHRvbnMgPSBbXTtcbiAgICBcdHZhciBidXlUZXh0cyA9IFtdO1xuICAgIFx0dmFyIGluZm9UZXh0cyA9IFtdO1xuICAgIFx0dmFyIHRpdGxlVGV4dHMgPSBbXTtcbiAgICBcdHZhciBjYXRlZ29yeVRleHRzID0gW107XG5cblxuXG4gICAgXHR2YXIgc2hvcFRleHQgPSBvYmouZ2FtZS5hZGQudGV4dChmcyo1MCwgMCwgXCJTaG9wXCIsIHtmb250OiAoZnMqMjgpLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjgwMFwifSk7XG5cbiAgICBcdHZhciBleGl0VGV4dCA9IG9iai5nYW1lLmFkZC50ZXh0KHd3IC0gNjAsIDAsIFwiWFwiLCB7Zm9udDogKGZzKjI4KS50b1N0cmluZygpICsgXCJweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgZm9udFdlaWdodDogXCI4MDBcIn0pO1xuICAgIFx0ZXhpdFRleHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgZXhpdFRleHQuZXZlbnRzLm9uSW5wdXREb3duLmFkZChvYmouZXhpdFNob3AsIG9iaik7XG5cblxuICAgIFx0dmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICBcdHZhciB1cGdHcmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKFwiMHhGRkZGRkZcIiwxKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoMCwgNjAsIHd3LCAzKTtcblxuICAgIFx0Zm9yKHZhciBpID0gMTsgaTw9MzsgaSsrKXtcbiAgICBcdCAgICBmb3IodmFyIGogPSAxOyBqPD0zOyBqKyspe1xuICAgICAgICBcdFx0Z3JhcGhpY3MuYmVnaW5GaWxsKGJ1eUNvbG9yLDAuOCk7XG4gICAgICAgIFx0XHRncmFwaGljcy5kcmF3UmVjdChqKnd3LzMuIC0gd3cvNi4sIDYwICsgaSp3aC8zLiAtIHdoLzYuICsgd2gvMTIuLCAtaW1nUywgMippbWdTLzYuKTtcbiAgICBcdCAgICB9XG4gICAgXHR9O1xuXG4gICAgICAgIGxpc3RDb21wb25lbnRzLnNsaWNlKDAsIDMpLmZvckVhY2goZnVuY3Rpb24oY29tcG8sIGkpIHtcblxuICAgIFx0XHRjYXRlZ29yeVRleHRzLnB1c2gob2JqLmdhbWUuYWRkLnRleHQod3cvNi4gLSBpbWdTLCA2MCArIHdoLzYuICsgaSp3aC8zLiAtIGltZ1MsIGNvbXBvLnNob3BDYXRlZ29yeSwge2ZvbnQ6IChmcyoyNCkudG9TdHJpbmcoKSArIFwicHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIGZvbnRXZWlnaHQ6IFwiNzAwXCJ9KSk7XG5cbiAgICAgICAgICAgIGNvbXBvLnVwZ3JhZGVOYW1lLmZvckVhY2goZnVuY3Rpb24odXBnTmFtZSwgaikge1xuXG4gICAgXHRcdFx0Y29tcEltYWdlcy5wdXNoKG9iai5nYW1lLmFkZC5zcHJpdGUod3cvNi4gKyBqKnd3LzMuLCA2MCArIHdoLzYuICsgaSp3aC8zICsgd2gvMTIuLCBjb21wby5uYW1lICsgXCJpbWdcIikpO1xuICAgIFx0XHRcdGNvbXBJbWFnZXMuc2xpY2UoLTEpWzBdLmFuY2hvci5zZXRUbygxLjAsIDEuMCk7XG4gICAgXHRcdFx0Y29tcEltYWdlcy5zbGljZSgtMSlbMF0ud2lkdGggPSBpbWdTO1xuICAgIFx0XHRcdGNvbXBJbWFnZXMuc2xpY2UoLTEpWzBdLmhlaWdodCA9IGltZ1M7XG4gICAgXHRcdFx0Y29tcEltYWdlcy5zbGljZSgtMSlbMF0uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICBcdFx0XHRjb21wSW1hZ2VzLnNsaWNlKC0xKVswXS5ldmVudHMub25JbnB1dERvd24uYWRkKG9iai5jb21wSW5mbywge29iajogb2JqLCBjb21wVHlwZTogaX0pO1xuXG4gICAgXHRcdFx0Y29tcFRleHR1cmVzLnB1c2gob2JqLmdhbWUuYWRkLnNwcml0ZSh3dy82LiArIGoqd3cvMy4gKyBpbWdTLCA2MCArIHdoLzYuICsgaSp3aC8zIC0gaW1nUy8yLiwgdXBnTmFtZSArIGNvbXBvLm5hbWUgKyBcInR4dFwiKSk7XG4gICAgXHRcdFx0Y29tcFRleHR1cmVzLnNsaWNlKC0xKVswXS5hbmNob3Iuc2V0VG8oMC41LCAwLjApO1xuICAgIFx0XHRcdGlmKGNvbXBvLmFSYXRpbyA9PSAxKSB7XG4gICAgXHRcdFx0ICAgIGNvbXBUZXh0dXJlcy5zbGljZSgtMSlbMF0ud2lkdGggPSBpbWdTLzMuO1xuICAgIFx0XHRcdCAgICBjb21wVGV4dHVyZXMuc2xpY2UoLTEpWzBdLmhlaWdodCA9IGltZ1MvMy47XG4gICAgXHRcdFx0fVxuICAgIFx0XHRcdGVsc2Uge1xuICAgIFx0XHRcdCAgICBjb21wVGV4dHVyZXMuc2xpY2UoLTEpWzBdLndpZHRoID0gaW1nUypjb21wby5hUmF0aW8vNS47XG4gICAgXHRcdFx0ICAgIGNvbXBUZXh0dXJlcy5zbGljZSgtMSlbMF0uaGVpZ2h0ID0gaW1nUy81LjtcbiAgICBcdFx0XHR9O1xuICAgIFx0XHRcdGNvbXBUZXh0dXJlcy5zbGljZSgtMSlbMF0uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICBcdFx0XHRjb21wVGV4dHVyZXMuc2xpY2UoLTEpWzBdLmV2ZW50cy5vbklucHV0RG93bi5hZGQob2JqLmNvbXBJbmZvLCB7b2JqOiBvYmosIGNvbXBUeXBlOiBpfSk7XG5cbiAgICBcdFx0XHR1cGdHcmFwaGljcy5iZWdpbkZpbGwoY29tcG8uY29sb3JOYW1lW2pdLDEpO1xuICAgIFx0XHRcdHVwZ0dyYXBoaWNzLmRyYXdSZWN0KChqKzEpKnd3LzMuIC0gd3cvNi4sIDYwICsgKGkrMSkqd2gvMy4gLSB3aC82LiAtIDIqaW1nUy8xNS4gKyB3aC8xMi4sIC1pbWdTLCAyKmltZ1MvMTUuKTtcbiAgICBcdFx0XHRvYmouZ2FtZS53b3JsZC5icmluZ1RvVG9wKHVwZ0dyYXBoaWNzKTtcblxuICAgIFx0XHRcdGJ1eVRleHRzLnB1c2gob2JqLmdhbWUuYWRkLnRleHQoIHd3LzYuICsgaip3dy8zLiAtIGltZ1MvMi4sIDYwICsgd2gvNi4gKyBpKndoLzMuICsgd2gvMTIuLCBcIkJ1eVwiLCB7Zm9udDogKGZzKjE4KS50b1N0cmluZygpICsgXCJweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDAwMDBcIiwgZm9udFdlaWdodDogXCI1MDBcIn0pKTtcbiAgICBcdFx0XHRidXlUZXh0cy5zbGljZSgtMSlbMF0uYW5jaG9yLnNldFRvKDAuNSwgLTAuMTApO1xuICAgIFx0XHRcdGJ1eVRleHRzLnNsaWNlKC0xKVswXS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIFx0XHRcdGJ1eVRleHRzLnNsaWNlKC0xKVswXS5ldmVudHMub25JbnB1dERvd24uYWRkKG9iai5jb21wQnV5LCB7b2JqOiBvYmosIGNvbXBUeXBlOiBpLCBjb21wVXBnOiBqfSk7XG5cbiAgICBcdFx0XHRpbmZvVGV4dHMucHVzaChvYmouZ2FtZS5hZGQudGV4dCh3dy82LiArIGoqd3cvMy4gKyA1LCA2MCArIHdoLzYuICsgaSp3aC8zLiAtIGltZ1MvMS41ICsgZnMqMjAgKyB3aC8xMi4sIGNvbXBvLnByaWNlW2pdLnRvU3RyaW5nKCkgKyBcIiBNIEV1cm9zXFxuXCIgKyBjb21wby5zaG9wRGVzY3JpcHRpb25bal0sIHtmb250OiAoZnMqMTQpLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjMwMFwiLCB3b3JkV3JhcDogdHJ1ZSwgd29yZFdyYXBXaWR0aDogaW1nUyoxLjUgfSkpO1xuICAgIFx0XHRcdGluZm9UZXh0cy5zbGljZSgtMSlbMF0uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICBcdFx0XHRpbmZvVGV4dHMuc2xpY2UoLTEpWzBdLmV2ZW50cy5vbklucHV0RG93bi5hZGQob2JqLmNvbXBJbmZvLCB7b2JqOiBvYmosIGNvbXBUeXBlOiBpfSk7XG5cbiAgICBcdFx0XHR0aXRsZVRleHRzLnB1c2gob2JqLmdhbWUuYWRkLnRleHQod3cvNi4gKyBqKnd3LzMuICsgNSwgNjAgKyB3aC82LiArIGkqd2gvMy4gLSBpbWdTLzEuNSArIHdoLzEyLiwgY29tcG8udXBncmFkZU5hbWVbal0gKyBcIiBcIiArIGNvbXBvLm5hbWUsIHtmb250OiAoZnMqMTQpLnRvU3RyaW5nKCkgKyBcInB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBmb250V2VpZ2h0OiBcIjcwMFwifSkpO1xuICAgIFx0XHRcdHRpdGxlVGV4dHMuc2xpY2UoLTEpWzBdLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgXHRcdFx0dGl0bGVUZXh0cy5zbGljZSgtMSlbMF0uZXZlbnRzLm9uSW5wdXREb3duLmFkZChvYmouY29tcEluZm8sIHtvYmo6IG9iaiwgY29tcFR5cGU6IGl9KTtcblx0XHQgICAgfSk7XG5cdCAgICB9KTtcbiAgICB9LFxuXG4gICAgZXhpdFNob3A6IGZ1bmN0aW9uKCl7IC8vR28gYmFjayB0byB0aGUgbWFpbiBzY3JlZW5cbiAgICBcdGNvbnNvbGUubG9nKFwiRXhpdGluZyBzaG9wIHN0YXRlLi4uXCIpO1xuICAgIFx0dGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiR2FtZVN0YXRlXCIpO1xuICAgIH0sXG5cbiAgICBjb21wSW5mbzogZnVuY3Rpb24oY29tcFR5cGUpeyAvL0dvIHRvIHRoZSBzcGVjaWZpYyBjb21wb25lbnQgc3RhdGVcbiAgICBcdC8vV0FSTklORzogTkVFRCBUTyBGSUdVUkUgT1VUIEhPVyBUTyBQQVNTIEFSR1VNRU5UIFRPIFNUQVRFXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvaW5nIHRvIGluZm8gc3RhdGUgb2YgY29tcG9uZW50IFwiICsgbGlzdENvbXBvbmVudHNbdGhpcy5jb21wVHlwZV0ubmFtZSk7XG4gICAgXHR0aGlzLm9iai5nYW1lLnN0YXRlLnN0YXJ0KFwiQ29tcG9uZW50U3RhdGVcIiwgdGhpcy5jb21wVHlwZSk7XG4gICAgfSxcblxuXG4gICAgY29tcEJ1eTogZnVuY3Rpb24oY29tcFR5cGUsIGNvbXBVcGcpe1xuICAgIFx0aWYobGlzdENvbXBvbmVudHNbdGhpcy5jb21wVHlwZV0ucHJpY2VbdGhpcy5jb21wVXBnXSA8PSB0aGlzLm9iai5nYW1lLm1vbmV5KXtcbiAgICBcdCAgICB0aGlzLm9iai5nYW1lLm1vbmV5IC09IGxpc3RDb21wb25lbnRzW3RoaXMuY29tcFR5cGVdLnByaWNlW3RoaXMuY29tcFVwZ107XG4gICAgXHQgICAgLy90aGlzLmdhbWUubXlDb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudCh0aGlzLlxuICAgIFx0ICAgIGNvbnNvbGUubG9nKGxpc3RDb21wb25lbnRzW3RoaXMuY29tcFR5cGVdLnVwZ3JhZGVOYW1lW3RoaXMuY29tcFVwZ10gKyBcIiBcIiArIGxpc3RDb21wb25lbnRzW3RoaXMuY29tcFR5cGVdLm5hbWUgKyBcIiBwdXJjaGFzZWQuIFJlbWFpbmluZyBtb25leTogXCIgKyB0aGlzLm9iai5nYW1lLm1vbmV5LnRvU3RyaW5nKCkpO1xuICAgIFx0fVxuICAgIFx0ZWxzZXtcbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZnVuZGluZy4uLlwiKTtcbiAgICBcdH1cbiAgICB9XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIEVtcHR5U3RhdGUoZ2FtZSl7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyBlbXB0eSBzdGF0ZVwiKTtcbn07XG5cbkVtcHR5U3RhdGUucHJvdG90eXBlID0ge1xuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcblxuICAgIH1cbn07XG4iLCJpbXBvcnQge1NpbXVsYXRpb25TdGF0ZX0gZnJvbSBcIi4vc3RhdGVzL3NpbXVsYXRpb25TdGF0ZS5qc1wiO1xuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gXCIuL3N0YXRlcy9nYW1lU3RhdGUuanNcIjtcbmltcG9ydCB7QWNoaWV2ZW1lbnRzU3RhdGV9IGZyb20gXCIuL3N0YXRlcy9hY2hpZXZlbWVudHNTdGF0ZS5qc1wiO1xuaW1wb3J0IHtTaG9wU3RhdGV9IGZyb20gXCIuL3N0YXRlcy9zaG9wU3RhdGUuanNcIjtcbmltcG9ydCB7RW1wdHlTdGF0ZX0gZnJvbSBcIi4vc3RhdGVzL2VtcHR5U3RhdGUuanNcIjtcblxudmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoJCh3aW5kb3cpLndpZHRoKCksICQod2luZG93KS5oZWlnaHQoKSwgUGhhc2VyLkFVVE8sIFwiZ2FtZVwiKTtcblxuZ2FtZS5zdGF0ZS5hZGQoXCJHYW1lU3RhdGVcIixHYW1lU3RhdGUpO1xuZ2FtZS5zdGF0ZS5hZGQoXCJTaW11bGF0aW9uU3RhdGVcIixTaW11bGF0aW9uU3RhdGUpO1xuZ2FtZS5zdGF0ZS5hZGQoXCJTaG9wU3RhdGVcIixTaG9wU3RhdGUpO1xuZ2FtZS5zdGF0ZS5hZGQoXCJBY2hpZXZlbWVudHNTdGF0ZVwiLEFjaGlldmVtZW50c1N0YXRlKTtcbmdhbWUuc3RhdGUuYWRkKFwiRW1wdHlTdGF0ZVwiLCBFbXB0eVN0YXRlKTtcbmdhbWUuc3RhdGUuc3RhcnQoXCJHYW1lU3RhdGVcIik7XG4iXSwibmFtZXMiOlsibGlzdENvbXBvbmVudHMiLCJDb21wb25lbnQiLCJ0eXBlIiwidXBncmFkZSIsImluQWNjZWxlcmF0b3IiLCJwb3NpdGlvbiIsInVuZGVmaW5lZCIsIm9yaWdpbmFsUG9zaXRpb24iLCJkaWRNYXRyaXgiLCJtb2RlbCIsInNjcmVlbkhlaWdodCIsIiQiLCJ3aW5kb3ciLCJoZWlnaHQiLCJzY3JlZW5XaWR0aCIsIndpZHRoIiwiR2FtZVN0YXRlIiwiZ2FtZSIsIm1vbmV5Iiwic2l6ZVRlcnJpdG9yeSIsImluZGV4SW5qZWN0b3IiLCJteUNvbXBvbmVudHMiLCJteVNwcml0ZXMiLCJhY2NlbGVyYXRvckNvbXBvbmVudHMiLCJ3aWR0aEludmVudG9yeSIsImhlaWdodFRvcEJhciIsImhlaWdodEJ1dHRvbiIsImZvbnRUZXh0QnV0dG9uIiwiaW52ZW50b3J5TWFyZ2luIiwic2NhbGVGYWN0b3JTcHJpdGVzIiwibWFyZ2luQ29ubmVjdG9yIiwiYmx1ZSIsInllbGxvdyIsInJlZCIsImdyZWVuIiwiZGlzcGxheSIsInByb3RvdHlwZSIsInNjYWxlIiwiZnVsbFNjcmVlblNjYWxlTW9kZSIsIlBoYXNlciIsIlNjYWxlTWFuYWdlciIsIlNIT1dfQUxMIiwic2NhbGVNb2RlIiwicmVmcmVzaCIsInBoeXNpY3MiLCJzdGFydFN5c3RlbSIsIlBoeXNpY3MiLCJBUkNBREUiLCJvYmoiLCJmb3JFYWNoIiwiY29tcG8iLCJpQ29tcG8iLCJsb2FkIiwiaW1hZ2UiLCJuYW1lIiwidG9TdHJpbmciLCJ0ZXh0dXJlIiwiY3JlYXRlSW50ZXJmYWNlIiwibG9hZE1vZGVsIiwiY29tcG9Hcm91cCIsImFkZCIsImdyb3VwIiwiaW5wdXRFbmFibGVDaGlsZHJlbiIsIm5leHRZIiwic3ByaXRlQ29tcG8iLCJjcmVhdGUiLCJwdXNoIiwic2V0VG8iLCJ4IiwieSIsImNsb25lIiwiYXJjYWRlIiwiZW5hYmxlIiwiaW5wdXRFbmFibGVkIiwiaW5wdXQiLCJlbmFibGVEcmFnIiwiZXZlbnRzIiwib25EcmFnU3RhcnQiLCJjdXJyZW50U3ByaXRlIiwic3RhcnREcmFnIiwib25EcmFnU3RvcCIsInN0b3BEcmFnIiwibW91c2UiLCJtb3VzZVdoZWVsQ2FsbGJhY2siLCJ6b29tRXZlbnQiLCJzYXZlTW9kZWwiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0YWdlIiwiYmFja2dyb3VuZENvbG9yIiwiZ3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInRleHQiLCJmb250IiwiZmlsbCIsImFsaWduIiwiZm9udFdlaWdodCIsIm9uSW5wdXREb3duIiwiZG93blNob3AiLCJkb3duUnVuIiwiZG93blNpbXVsYXRlIiwiZG93bkFjaGlldmVtZW50cyIsImluZGV4Q29tcG9uZW50IiwiY3VycmVudENvbXBvbmVudCIsImxlbmd0aCIsImluZGV4TGFzdENvbXBvbmVudCIsInNsaWNlIiwibGFzdENvbXBvbmVudCIsInBvcCIsImxhc3RTcHJpdGUiLCJkcmFnZ2FibGUiLCJjb3B5RnJvbSIsIm92ZXJsYXAiLCJhbmNob3IiLCJldmVudCIsInN0YXRlIiwic3RhcnQiLCJpdGVtIiwiU2ltdWxhdGlvblN0YXRlIiwibG9nIiwiY3VycmVudENvbXBJbmRleCIsImJlYW1TcHJpdGUiLCJjcm9zc1NlY3Rpb25TcHJpdGUiLCJpbmplY3RvcldpZHRoIiwiaW5qZWN0b3JJbmRleCIsImluamVjdG9yU3ByaXRlIiwiaW5qZWN0b3JDb21wb25lbnQiLCJ4SW5pIiwieUluaSIsIm1hcmdpbiIsImVsbGlwc2UiLCJ4RWxsaXBzZSIsInlFbGxpcHNlIiwiY2F2aXR5UmFkaXVzIiwiZW5lcmd5VGV4dCIsImV4cGxvc2lvblNwcml0ZSIsImdhbWVTdGF0ZSIsImJlYW0iLCJzcHJpdGUiLCJ0b3BCYXIiLCJsaW5lU3R5bGUiLCJzdHlsZSIsImVuZXJneSIsInNldFRleHQiLCJhIiwiYiIsImN1cnJlbnRFdmVudCIsInZ4IiwiZmEiLCJmYiIsImJvZHkiLCJ2ZWxvY2l0eSIsImJlYW1FbmVyZ3lTdHJpbmciLCJjbGVhciIsImRyYXdFbGxpcHNlIiwiY3VycmVudENvbXAiLCJ4Q3VycmVudE1heCIsImkiLCJjdXJTcHJpdGUiLCJjdXJDb21wb25lbnQiLCJ4VG90YWxNYXgiLCJjb21wSGFzTm9TaXplIiwidGVtcCIsIm1heEVuZXJneSIsIkFjaGlldmVtZW50c1N0YXRlIiwic3RhdGVTaXplIiwic3RhdGVQb3NpdGlvbiIsImFjaGlldmVtZW50c1RleHQiLCJkYXJrQmx1ZSIsInN0cm9rZVRoaWNrbmVzcyIsImxpbmUiLCJMaW5lIiwibW92ZVRvIiwibGluZVRvIiwiZW5kIiwiZW5kRmlsbCIsImNyb3NzSW1hZ2UiLCJpbWFnZUNsaWNrZWQiLCJ0cm9waGllc0ltYWdlWCIsInRyb3BoeTEiLCJ0cm9waHkyIiwidHJvcGh5MyIsInRyb3BoeTQiLCJTaG9wU3RhdGUiLCJpY29uIiwidXBncmFkZU5hbWUiLCJ1cGdOYW1lIiwiayIsImJ1eUNvbG9yIiwiYnV5Rm9udCIsIndoIiwid3ciLCJmcyIsImltZ1MiLCJjb21wSW1hZ2VzIiwiY29tcFRleHR1cmVzIiwiY29tcEJ1dHRvbnMiLCJidXlUZXh0cyIsImluZm9UZXh0cyIsInRpdGxlVGV4dHMiLCJjYXRlZ29yeVRleHRzIiwic2hvcFRleHQiLCJleGl0VGV4dCIsImV4aXRTaG9wIiwidXBnR3JhcGhpY3MiLCJqIiwic2hvcENhdGVnb3J5IiwiY29tcEluZm8iLCJjb21wVHlwZSIsImFSYXRpbyIsImNvbG9yTmFtZSIsIndvcmxkIiwiYnJpbmdUb1RvcCIsImNvbXBCdXkiLCJjb21wVXBnIiwicHJpY2UiLCJzaG9wRGVzY3JpcHRpb24iLCJ3b3JkV3JhcCIsIndvcmRXcmFwV2lkdGgiLCJFbXB0eVN0YXRlIiwiR2FtZSIsIkFVVE8iXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQUlBLGlCQUNYLENBQ0k7ZUFDWSxXQURaO3VCQUVvQix5QkFGcEI7MEJBR2dCLENBQUMsZ0JBQUQsRUFBbUIsaUJBQW5CLEVBQXNDLGlCQUF0QyxDQUhoQjtzQkFJWSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLENBSlo7c0JBS21CLGtWQUxuQjtrQkFNZSxDQUFDLGVBQUQsRUFBa0IsZUFBbEIsRUFBbUMsYUFBbkMsQ0FOZjtpQkFPUSxLQVBSO29CQVFVLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsVUFBekIsQ0FSVjtlQVNZLGNBVFo7Z0JBVWEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FWYjtpQkFXYyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFB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
