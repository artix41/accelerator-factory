import {Component} from "components"
import {SimulationState} from "simulationState"

export function GameState(game){
    this.game = game;
    this.game.money = 100;
    this.game.sizeTerritory = 10;
    this.indexInjector = 5;

    this.game.myComponents = [new Component(this.indexInjector,0), new Component(2,0), new Component(3,0), new Component(0,2), new Component(1,0), new Component(1,1), new Component(1,2), new Component(4,0)];
    this.game.acceleratorComponents = []

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
};

GameState.prototype = {
    preload: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var obj = this;
        this.game.myComponents.forEach(function(compo, iCompo) {
            console.log(compo.model.texture[compo.upgrade])
            obj.game.load.image(compo.model.name + iCompo.toString(), '../images/components/' + compo.model.texture[compo.upgrade]);
        });
    },
    create: function(){
        this.createInterface();

        var obj = this;

        this.game.compoGroup = this.game.add.group();
        this.game.stage.addChild(this.game.compoGroup);
        this.game.compoGroup.inputEnableChildren = true;

        var nextY = 100;
        this.game.myComponents.forEach(function(compo, iCompo) {
            if (!compo.inAccelerator) {
                var spriteCompo = obj.game.compoGroup.create(0, 0, compo.model.name + iCompo.toString());
                spriteCompo.scale.setTo(obj.scaleFactorSprites, obj.scaleFactorSprites);
                compo.sprite = spriteCompo;
                spriteCompo.component = compo;
                spriteCompo.position.x = obj.widthInventory/2 - spriteCompo.width / 2;
                spriteCompo.position.y = nextY;
                spriteCompo.originalPosition = spriteCompo.position.clone();
                obj.game.physics.arcade.enable(spriteCompo);

                spriteCompo.inputEnabled = true;
                spriteCompo.input.enableDrag();
                spriteCompo.events.onDragStart.add(function(currentSprite) {
                    obj.startDrag(currentSprite);
                }, obj);
                spriteCompo.events.onDragStop.add(function(currentSprite) {
                    obj.stopDrag(currentSprite);
                }, obj);
                nextY = spriteCompo.position.y + spriteCompo.height + obj.inventoryMargin.y;
            }
        });
        this.game.input.mouse.mouseWheelCallback = this.zoomEvent;
        this.game.state.start("SimulationState");
    },

    update: function(){
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


        //window.graphics = graphics;
        this.stage.addChild(graphics)

        // SHOP Text
        var text = this.game.add.text(130, $(window).height() - this.heightButton/2 - this.fontTextButton/2, "SHOP", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downShop, this);
        this.stage.addChild(text);

        //RUN Button
        var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downRun, this);
        this.stage.addChild(text);

        //SIMULATE Button
        var text = this.game.add.text($(window).width() - 215, 415, "SIMULATE", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downSimulate, this);
        this.stage.addChild(text);

        //Inventory Text
        var text = this.game.add.text(10, 40, "Inventory", { font: this.fontTextButton.toString() + "px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});
        this.stage.addChild(text);

        //Center-of-Mass energy
        var text = this.game.add.text($(window).width() - 240, 90, "Center-of-Mass\nenergy", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});
        this.stage.addChild(text);

        //Peak luminosity
        var text = this.game.add.text($(window).width() - 240, 190, "Peak luminosity", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});
        this.stage.addChild(text);

        //Last particle found at
        var text = this.game.add.text($(window).width() - 240, 270, "Last particle\nfound at", { font: "20px Arial", fill: "#FFFFFF", fontWeight: "900"});
        this.stage.addChild(text);

        //Text For Top Menu bar
        var text = this.game.add.text(15,8, "TRIAL", { font: "15px Arial", fill: "#FFFFFF", fontWeight: "700"});
        this.stage.addChild(text);
        var text = this.game.add.text(130,8, this.game.money.toString() + "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900"});
        this.stage.addChild(text);

    },

    startDrag: function (currentSprite) {
        /* If we drag an object from the accelerator (ie lastSprite == currentSprite),
        it should be popped from the accelerator at the beginning
        */
        var obj = this;
        if (obj.game.acceleratorComponents.length != 0) {
            var lastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            if (lastComponent.sprite == currentSprite) {
                obj.game.acceleratorComponents.pop();
                if (obj.game.acceleratorComponents.length != 0) {
                    obj.game.acceleratorComponents.slice(-1)[0].sprite.input.draggable = true;
                }
            }
        }
    },

    stopDrag: function (currentSprite) {
        var obj = this;

        if (currentSprite.component.model.name == "Proton Injector") {
            if (currentSprite.position.x > this.widthInventory) {
                if (obj.game.acceleratorComponents.length == 0) {
                    obj.game.acceleratorComponents.push(currentSprite.component);
                }
            }
            else {
                currentSprite.position.copyFrom(currentSprite.originalPosition);
            }
        }
        else if (obj.game.acceleratorComponents.length != 0) {
            var lastComponent = obj.game.acceleratorComponents.slice(-1)[0];
            var endSprite = lastComponent.sprite;
            if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
                /* If it overlapped */
                endSprite.input.draggable = false;
                currentSprite.position.copyFrom({
                    x: endSprite.position.x + endSprite.width - obj.marginConnector,
                    y: endSprite.position.y + endSprite.height/2 - currentSprite.height/2,
                    type: endSprite.position.type
                });
                currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y);
                obj.game.acceleratorComponents.push(currentSprite.component)
            })) {
                currentSprite.position.copyFrom(currentSprite.originalPosition);
            }
        }
        else { // This is not an injector and we have nothing on the territory
            currentSprite.position.copyFrom(currentSprite.originalPosition);
        }
    },

    zoomEvent: function (event) {

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
