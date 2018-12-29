var mainScene = new Phaser.Class({
  Extends: Phaser.Scene,
  crateCount: -1,
  text: '',
  
  initialize: function mainScene(){
    Phaser.Scene.call(this, {key: "mainScene"});
  },
  
  preload: function()
  {
    this.load.image('crate', 'assets/sprites/crate.png');
  },

  placeCrate: function(pointerX){
    this.matter.add.sprite(pointerX, 0, "crate");
    this.crateCount++;
    this.text.setText('Game: ' + game.config.gameTitle + '\nCrates used: ' + this.crateCount);
  },

  create: function(){
    this.text = this.add.text(
      20, 
      20, 
      '', 
      { font: '16px Courier', fill: '#ffffff' }
    );
 
    // setting Matter world bounds
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

    this.placeCrate(game.config.width/2);

    // waiting for user input
    this.input.on("pointerdown", function(pointer){
      this.placeCrate(pointer.x);
    }, this);
  }
})
