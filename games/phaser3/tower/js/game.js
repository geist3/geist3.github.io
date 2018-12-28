var game;

window.onload = function(){
  var config = {
    type: Phaser.AUTO,
    antialias:false,
    autoFocus:true,
   canvas:document.getElementById('gameCanvas'),
    width:300,
    height:300,
    autoresize:true,
    backgroundColor: "#000044",
    physics: {
      default: "matter"
    },
    scene: [playGame],
    title: 'Tower',
    banner: {
        text: '#ffffff',
        background: [
            '#fff200',
            '#38f0e8',
            '#00bff3',
            '#ec008c'
        ],
        hidePhaser: true
    }
  };

  game = new Phaser.Game(config);
}

var playGame = new Phaser.Class({
  Extends: Phaser.Scene,
  
  initialize: function playGame(){
    Phaser.Scene.call(this, {key: "playGame"});
  },
  
  preload: function()
  {
    console.log('preload');
    this.load.image('crate', 'assets/sprites/crate.png');
  },

  create: function(){
     var text = this.add.text(
       20, 
       20, 
       'Game Title: ' + game.config.gameTitle, 
       { font: '16px Courier', fill: '#ffffff' }
  );
 
    // setting Matter world bounds
 this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

      this.matter.add.sprite(game.config.width/2, 1, "crate");
    
    // waiting for user input
    this.input.on("pointerdown", function(pointer){
      this.matter.add.sprite(pointer.x, pointer.y, "crate");
    }, this);
  }
})

