export function VaccumState(game){
    console.log("Starting the Test event");
};

var stateWidth = 850;
var stateHeight = 500;
var lineX = 0;
var lineY = 43;
var crossX = stateWidth-40;
var crossY = 5;
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



VaccumState.prototype = {
    preload: function(){
        console.log("Preloading");
        this.game.load.image('cross', 'images/buttons/button-close.png');
        this.game.load.image('vaccumImage', 'images/shop/Quadruple.png');
        this.game.load.image('vaccumComponent', 'images/components/vacuum-tube-bronze.png');


    },
    create: function(){
      this.game.stage.backgroundColor = "#0053A1";
      this.game.scale.setGameSize(stateWidth, stateHeight);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.refresh();

      //line
      var line = new Phaser.Line(lineX, lineY, stateWidth, lineY);
      var graphics= this.game.add.graphics(0,0);
      graphics.lineStyle(4, 0xffffff, 1);
      graphics.moveTo(line.start.x,line.start.y);//moving position of graphic if you draw mulitple lines
      graphics.lineTo(line.end.x,line.end.y);
      graphics.endFill();

      var crossImage = this.game.add.image(crossX, crossY, 'cross');
      crossImage.inputEnabled = true;
      crossImage.events.onInputDown.add(imageClicked, this);

      //vaccumText
      var text = this.game.add.text(vaccumTextX, vaccumTextY, "Vaccum tube", { font: "30px Arial", fill: "#FFFFFF"});
      text.strokeThickness = 2;
      text.fontWeight = 'bold';

      //vaccumImage----------------------
      var vaccumImage = this.game.add.image(vaccumImageX, vaccumImageY , 'vaccumImage');
      vaccumImage.width = 300;
      vaccumImage.height = 300;
      //text of vaccumImage
      var text = this.game.add.text(vaccumImageTextX, vaccumImageTextY, "You have 0\nCost: 30 M EUR\nQuality: x x x\n\nBasically this is a superhighway for particles in our\naccelerator. The tube is vaccum inside to make sure\nthat air molecules of any kind are not going to interfere\nwith our particles.\nLevel 1: Particle loss at 10%", { font: "18px Arial", fill: "#FFFFFF"});

      //vaccumComponent
      var vaccumComponent = this.game.add.image(vaccumComponentX, vaccumComponentY , 'vaccumComponent');

      //BuYbutton
      var graphics = this.game.add.graphics(0, 0);
      graphics.beginFill("0x00FF00",1);
      graphics.drawRect(buybuttonX, buybuttonY, buybuttonWidth, buybuttonHeight);
      window.graphics = graphics;

      //buyButtonLabel
      var text = this.game.add.text(buyLabelX, buyLabelY, "Buy", { font: "22px Arial", fill: "#000000"});
      text.fontWeight = 'bold';
      text.inputEnabled = true;
      text.events.onInputDown.add(downBuyButton, this);

    }
  };

  function imageClicked () {
        this.game.destroy();
  }

  function downBuyButton () {
        this.game.destroy();
  }
