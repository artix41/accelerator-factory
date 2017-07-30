import {Component} from "components"
import {SimulationState} from "simulationState"

export function GameState(game){
    this.game = game;
    this.game.money = 100;
    this.game.sizeTerritory = 10;
    this.indexInjector = 5;

    this.game.myComponents = [
        new Component(this.indexInjector,0),
        new Component(0,0),
        new Component(0,1),
        new Component(0,2),
        new Component(1,0),
        new Component(1,1),
        new Component(1,2),
        new Component(2,0),
        new Component(2,1),
        new Component(2,2),
        new Component(3,0),
        new Component(3,1),
        new Component(3,2),
        new Component(4,0),
    ];
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
};

GameState.prototype = {
    preload: function(){
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var obj = this;
        this.game.myComponents.forEach(function(compo, iCompo) {
            obj.game.load.image(compo.model.name + iCompo.toString(), '../images/components/' + compo.model.texture[compo.upgrade]);
        });
    },
    create: function(){

        this.createInterface();
        this.loadModel();
        var obj = this;

        this.game.compoGroup = this.game.add.group();
        this.game.compoGroup.inputEnableChildren = true;

        var nextY = 100;
        this.game.mySprites = [];
        this.game.myComponents.forEach(function(compo, iCompo) {
            if (!compo.inAccelerator) {
                var spriteCompo = obj.game.compoGroup.create(0, 0, compo.model.name + iCompo.toString());
                obj.game.mySprites.push(spriteCompo);

                spriteCompo.scale.setTo(obj.scaleFactorSprites, obj.scaleFactorSprites);

                if (compo.position) {
                    spriteCompo.position.x = compo.position.x;
                    spriteCompo.position.y = compo.position.y
                }
                else {
                    spriteCompo.position.x = obj.widthInventory/2 - spriteCompo.width / 2;
                    spriteCompo.position.y = nextY;
                    compo.position = spriteCompo.position;
                    compo.originalPosition = spriteCompo.position.clone();
                }
                obj.game.physics.arcade.enable(spriteCompo);

                spriteCompo.inputEnabled = true;
                spriteCompo.input.enableDrag();
                spriteCompo.events.onDragStart.add(function(currentSprite) {
                    obj.startDrag(iCompo);
                }, obj);
                spriteCompo.events.onDragStop.add(function(currentSprite) {
                    obj.stopDrag(iCompo);
                }, obj);

                nextY = spriteCompo.position.y + spriteCompo.height + obj.inventoryMargin.y;
            }
        });
        this.game.input.mouse.mouseWheelCallback = this.zoomEvent;
        this.saveModel();

    },

    update: function(){
    },

    saveModel: function() {
        localStorage.setItem("myComponents", JSON.stringify(this.game.myComponents));
        localStorage.setItem("acceleratorComponents", JSON.stringify(this.game.acceleratorComponents));
    },

    loadModel: function() {
        this.game.myComponents = JSON.parse(localStorage.getItem("myComponents"));
        this.game.acceleratorComponents = JSON.parse(localStorage.getItem("acceleratorComponents"));
    },

    createInterface: function() {
        this.game.stage.backgroundColor = this.blue;
        var graphics = this.game.add.graphics(0, 0);

        // Top bar
        graphics.beginFill("#000000",1);
        graphics.drawRect(0, 0, $(window).width(), this.heightTopBar);

        // Inventory
        graphics.beginFill("#000000",0.4);
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
        var text = this.game.add.text(130, $(window).height() - this.heightButton/2 - this.fontTextButton/2, "SHOP", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downShop, this);
        //this.stage.addChild(text);

        //RUN Button
        var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downRun, this);
        //this.stage.addChild(text);

        //SIMULATE Button
        var text = this.game.add.text($(window).width() - 215, 415, "SIMULATE", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downSimulate, this);

        //Inventory Text
        var text = this.game.add.text(10, 40, "Inventory", { font: this.fontTextButton.toString() + "px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});

        //Center-of-Mass energy
        var text = this.game.add.text($(window).width() - 240, 90, "Center-of-Mass\nenergy", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

        //Peak luminosity
        var text = this.game.add.text($(window).width() - 240, 190, "Peak luminosity", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

        //Last particle found at
        var text = this.game.add.text($(window).width() - 240, 270, "Last particle\nfound at", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});

        //Text For Top Menu bar
        var text = this.game.add.text(15,8, "TRIAL", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "700"});
        // Money
        var text = this.game.add.text(130,8, this.game.money.toString() + "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900"});
        // Achievements link
        var text = this.game.add.text($(window).width() - 200 ,8, "ACHIEVEMENTS", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.downAchievements, this);
    },

    startDrag: function (indexComponent) {
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

    stopDrag: function (indexComponent) {
        var obj = this;
        var currentComponent = this.game.myComponents[indexComponent];
        var currentSprite = this.game.mySprites[indexComponent];

        if (currentComponent.model.name == "Proton Injector") {
            if (currentSprite.position.x > this.widthInventory) {
                if (obj.game.acceleratorComponents.length == 0) {
                    obj.game.acceleratorComponents.push(indexComponent);
                }
            }
            else {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        }
        else if (obj.game.acceleratorComponents.length != 0) {
            var indexLastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var lastComponent = this.game.myComponents[indexLastComponent];
            var lastSprite = this.game.mySprites[indexLastComponent];
            if (!this.game.physics.arcade.overlap(currentSprite, lastSprite, function() {
                /* If it overlapped */
                lastSprite.input.draggable = false;
                currentSprite.position.x = lastSprite.position.x + lastSprite.width - obj.marginConnector;
                currentSprite.position.y = lastSprite.position.y + lastSprite.height/2 - currentSprite.height/2;
                currentSprite.anchor.setTo(lastSprite.anchor.x, lastSprite.anchor.y);
                obj.game.acceleratorComponents.push(indexComponent)
            })) {
                currentSprite.position.copyFrom(currentComponent.originalPosition);
            }
        }
        else { // This is not an injector and we have nothing on the territory
            currentSprite.position.copyFrom(currentComponent.originalPosition);
        }
        currentComponent.position = currentSprite.position.clone();
        this.saveModel();
    },

    zoomEvent: function (event) {

    },

    downAchievements: function(event) {
        this.game.state.start("AchievementsState")
    }
};

function downShop(item) {
    this.game.state.start("ShopState");
}

function downRun(item) {

    item.text = "clicked";

}

function downSimulate(item) {
    item.text = "clicked ";
    this.game.state.start("SimulationState");

}
