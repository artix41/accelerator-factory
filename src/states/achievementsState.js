export function AchievementsState(game){
    console.log("Starting the achievements event");
};

var stateWidth = 850;
var stateHeight = 500;
var achX = 8;
var achY = 5;
var line;

AchievementsState.prototype = {
    preload: function(){
        console.log("Preloading");
        this.game.load.image('cross', 'images/buttons/button-close.png');
        this.game.load.image('trophy1', 'images/achievements/achievements-generic1.png');
        this.game.load.image('trophy2', 'images/achievements/achievements-generic2.png');
        this.game.load.image('trophy3', 'images/achievements/achievements-generic3.png');
        this.game.load.image('trophy4', 'images/achievements/achievements-generic4.png');
    },
    create: function(){
      this.game.stage.backgroundColor = "#0053A1";
      this.game.scale.setGameSize(stateWidth, stateHeight);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.refresh();

      //Achievements
      var text = this.game.add.text(achX, achY, "Achievements", { font: "30px Arial", fill: "#FFFFFF"});
      text.strokeThickness = 2;
      text.fontWeight = 'bold';

      //Line
      var line = new Phaser.Line(0, achY+38, stateWidth, achY+38);
      var graphics= this.game.add.graphics(0,0);
      graphics.lineStyle(4, 0xffffff, 1);
      graphics.moveTo(line.start.x,line.start.y);//moving position of graphic if you draw mulitple lines
      graphics.lineTo(line.end.x,line.end.y);
      graphics.endFill();

      //cross
      var crossImage = this.game.add.image(stateWidth-40, achY, 'cross');
      crossImage.inputEnabled = true;
      crossImage.events.onInputDown.add(imageClicked, this);

      var trophiesImageX = achX + 3;


      //image1----------------------
      var trophy1 = this.game.add.image(trophiesImageX, achY+65, 'trophy1');
      //text of image1
      var text = this.game.add.text(achX + 130, achY + 65, "First accelerator", { font: "22px Arial", fill: "#FFFFFF"});
      text.fontWeight = 'bold';
      var text = this.game.add.text(achX + 130, achY + 92, "Build your first accelerator.", { font: "22px Arial", fill: "#FFFFFF"});



      //image2---------------------
      var trophy2 = this.game.add.image(trophiesImageX, achY+170, 'trophy2');
      //text of image2
      var text = this.game.add.text(achX + 130, achY + 165, "First collision", { font: "22px Arial", fill: "#FFFFFF"});
      text.fontWeight = 'bold';
      var text = this.game.add.text(achX + 130, achY + 188, "Run your accelerator and collide particles in a detector for the first time.", { font: "22px Arial", fill: "#FFFFFF"});

      //image3----------------------
      var trophy3 = this.game.add.image(trophiesImageX, achY+275, 'trophy3');
      //text of image3
      var text = this.game.add.text(achX + 130, achY + 270, "First discovery", { font: "22px Arial", fill: "#FFFFFF"});
      text.fontWeight = 'bold';
      var text = this.game.add.text(achX + 130, achY + 293, "Discover your first particle.", { font: "22px Arial", fill: "#FFFFFF"});


      //image4----------------------
      var trophy4 = this.game.add.image(trophiesImageX, achY+380, 'trophy4');
      //text of image4
      var text = this.game.add.text(achX + 130, achY + 375, "FCC - First Class Collider", { font: "22px Arial", fill: "#FFFFFF"});
      text.fontWeight = 'bold';
      var text = this.game.add.text(achX + 130, achY + 398, "Build an accelerator entirely from first class components.", { font: "22px Arial", fill: "#FFFFFF"});

    }
};

function imageClicked () {
      this.game.destroy()
}
