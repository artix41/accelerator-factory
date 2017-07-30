import {GameState} from "gameState";

export function AchievementsState(game){
    console.log("Starting the achievements event");
    this.game = game;
    this.stateSize = {
        width: $(window).width()*0.5,
        height: $(window).height()*0.7
    };
    this.statePosition = {
        x: $(window).width()/2 - this.stateSize.width/2,
        y: $(window).height()/2 - this.stateSize.height/2
    };
    this.achievementsText = {
        x: 8 + this.statePosition.x,
        y: 5 + this.statePosition.y
    };
    this.darkBlue = 0x1F3A93;
};



AchievementsState.prototype = {
    preload: function(){
        console.log("Preloading");
        this.game.load.image('cross', '../images/buttons/button-close.png');
        this.game.load.image('trophy1', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy2', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy3', '../images/achievements/achievements-generic.png');
        this.game.load.image('trophy4', '../images/achievements/achievements-generic.png');
    },
    create: function(){
        var gameState = new GameState(this.game);
        gameState.create();
        // Draw achievements panel
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(0,0.3);
        graphics.drawRect(this.statePosition.x-5, this.statePosition.y-5, this.stateSize.width+10,this.stateSize.height+10);
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(this.darkBlue,1);
        graphics.drawRect(this.statePosition.x, this.statePosition.y, this.stateSize.width,this.stateSize.height);

        //Achievements
        var text = this.game.add.text(this.achievementsText.x, this.achievementsText.y, "Achievements", { font: "30px Arial", fill: "#FFFFFF"});
        text.strokeThickness = 2;
        text.fontWeight = 'bold';

        //Line
        var line = new Phaser.Line(this.statePosition.x, this.achievementsText.y+38, this.statePosition.x + this.stateSize.width, this.achievementsText.y+38);
        var graphics= this.game.add.graphics(0,0);
        graphics.lineStyle(4, 0xffffff, 1);
        graphics.moveTo(line.start.x,line.start.y);//moving position of graphic if you draw mulitple lines
        graphics.lineTo(line.end.x,line.end.y);
        graphics.endFill();

        //cross
        var crossImage = this.game.add.image(this.statePosition.x + this.stateSize.width - 35, this.achievementsText.y, 'cross');
        crossImage.inputEnabled = true;
        crossImage.events.onInputDown.add(imageClicked, this);

        var trophiesImageX = this.statePosition.x + 3;


        //image1----------------------
        var trophy1 = this.game.add.image(trophiesImageX, this.achievementsText.y+65, 'trophy1');
        //text of image1
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 65, "First accelerator", { font: "22px Arial", fill: "#FFFFFF"});
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 92, "Build your first accelerator.", { font: "22px Arial", fill: "#FFFFFF"});



        //image2---------------------
        var trophy2 = this.game.add.image(trophiesImageX, this.achievementsText.y+170, 'trophy2');
        //text of image2
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 165, "First collision", { font: "22px Arial", fill: "#FFFFFF"});
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 188, "Run your accelerator and collide particles in a detector for the first time.", { font: "22px Arial", fill: "#FFFFFF"});

        //image3----------------------
        var trophy3 = this.game.add.image(trophiesImageX, this.achievementsText.y+275, 'trophy3');
        //text of image3
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 270, "First discovery", { font: "22px Arial", fill: "#FFFFFF"});
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 293, "Discover your first particle.", { font: "22px Arial", fill: "#FFFFFF"});


        //image4----------------------
        var trophy4 = this.game.add.image(trophiesImageX, this.achievementsText.y+380, 'trophy4');
        //text of image4
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 375, "FCC - First Class Collider", { font: "22px Arial", fill: "#FFFFFF"});
        text.fontWeight = 'bold';
        var text = this.game.add.text(this.statePosition.x + 130, this.achievementsText.y + 398, "Build an accelerator entirely from first class components.", { font: "22px Arial", fill: "#FFFFFF"});
    }
};

function imageClicked () {
    this.game.state.start("GameState");
}
