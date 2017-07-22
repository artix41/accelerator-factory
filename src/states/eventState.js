export function EventState(game){
    console.log("Starting the event");
};

var screenHeight = $(window).height();
var screenWidth  = $(window).width();
var ourscreenWidth = screenWidth/2;
var ourscreenHeight = screenWidth/3;
var npfTextX = 14;
var npfTextY = 10;

EventState.prototype = {
    preload: function(){
        console.log("Preloading");
        this.game.load.image('higgs', '/accelerator-factory/images/higgs.png');
    },
    create: function(){
      this.game.stage.backgroundColor = "#0053A1";
      this.game.scale.setGameSize(ourscreenWidth, ourscreenHeight);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.refresh();

      //New particle found!
      var text = this.game.add.text(npfTextX, npfTextY, "New particle found!", { font: "30px Arial", fill: "#FFFFFF", align: "center"});
      text.strokeThickness = 2;
      text.fontWeight = 'bold';

      //Higgs
      var text = this.game.add.text(npfTextX, npfTextY + 100, "Higgs!", { font: "30px Arial", fill: "#FFFFFF", align: "center"});
      text.strokeThickness = 2;
      text.fontWeight = 'bold';

      //at 125 GeV
      var text = this.game.add.text(npfTextX, npfTextY + 140, "at 125 GeV", { font: "30px Arial", fill: "#FFFFFF", align: "center"});
      text.strokeThickness = 2;

      //Theorised by Francois Englert and Peter Higgs, this "missing piece" of the Standard Model gives rise to mass couplings for gauge bosons in Electroweak theory. In layman's terms, this particle gives mass to other particles, or so to speak, it is the mother of all particles.
      //To celebrate the discovery, Member States has granted you a bonus of 500 M€, 5 scientists, and 10 engineers
      var text = this.game.add.text(npfTextX, npfTextY + 190, "Theorised by Francois Englert and Peter Higgs, this missing\npiece of the Standard Model gives rise to mass couplings for\ngauge bosons in Electroweak theory. In layman's terms, this\nparticle gives mass to other particles, or so to speak, it is the\nmother of all particles.", { font: "13px Arial", fill: "#FFFFFF"});
      text.fontWeight = 'bold';


      //Read more Button
      var text = this.game.add.text(npfTextX, npfTextY + 330, "Read more", { font: "20px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});
      text.inputEnabled = true;
      text.events.onInputDown.add(downReadmore, this);

      //Carry on Button
      var text = this.game.add.text(npfTextX, npfTextY + 365, "Carry on", { font: "20px Arial", fill: "#FFFFFF", align: "center", fontWeight: "900"});
      text.inputEnabled = true;
      text.events.onInputDown.add(downCarryon, this);

      //Higgs Image
      var image = this.game.add.image(ourscreenWidth - 220, ourscreenHeight - 300, 'higgs');

    }
};

function downReadmore(item) {

    item.text = "clicked";

}

function downCarryon(item) {

    item.text = "clicked";

}
