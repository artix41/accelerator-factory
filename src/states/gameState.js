import {Component} from "components"

export function GameState(game){
    this.game = game;
    this.game.money = 0;
    this.game.sizeTerritory = 10;
    this.game.myComponents = [new Component(4,0), new Component(0,0), new Component(1,0)];
    this.game.acceleratorComponents = [this.game.myComponents[0]];

    this.widthInventory = 275;
    this.heightTopBar = 30;
    this.heightButton = 100;
    this.fontTextButton = 30;
};

GameState.prototype = {
    preload: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var obj = this;
        this.game.myComponents.forEach(function(compo) {
            obj.game.load.image(compo.model.name, '../images/components/' + compo.model.texture);
        });
    },
    create: function(){
        this.createInterface()
    },

    update: function(){
    },

    createInterface: function() {
        this.game.stage.backgroundColor = "#0053A1";
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
        graphics.beginFill(0xFFFF00, 1);
        graphics.drawRect(0, $(window).height() - this.heightButton, this.widthInventory, 100);

        // Run button
        graphics.beginFill(0xFF0000, 1);
        graphics.drawRect($(window).width() - 250, 480, 230, this.heightButton);

        // Simulate button
        graphics.beginFill(0x00FF00, 1);
        graphics.drawRect($(window).width() - 250, 380, 230, this.heightButton);


        window.graphics = graphics;

        var text = this.game.add.text(90, $(window).height() - this.heightButton/2 - this.fontTextButton/2, "SHOP", { font: this.fontTextButton.toString() + "px Arial", fill: "#000000", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downShop, this);

        //RUN Button
        var text = this.game.add.text($(window).width() - 170, 515, "RUN", { font: this.fontTextButton.toString() + "px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});
        text.inputEnabled = true;
        text.events.onInputDown.add(downRun, this);

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
        var text = this.game.add.text(130,8, "€", { font: "15px Arial", fill: "#FFFF00", fontWeight: "900"});
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
