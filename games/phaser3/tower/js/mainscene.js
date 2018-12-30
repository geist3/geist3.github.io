var mainScene = new Phaser.Class({
  Extends: Phaser.Scene,
  crateCount: -1,
  text: '',
  crates: null,
  
  initialize: function mainScene(){
    Phaser.Scene.call(this, {key: "mainScene"});
  },
  
  preload: function()
  {
    this.load.image('crate', 'assets/sprites/crate.png');
  },

  placeCrate: function(pointerX){
    if(game.config.physics.default == 'arcade'){
      this.crates.create(pointerX, 0, "crate").setBounce(0.1).setFriction(1).setMass(0.1).setCollideWorldBounds(true);
    } else {  
      this.matter.add.sprite(pointerX, 0, "crate", null, {
        restitution: 0, 
        friction: 1, 
        density: 1
      });
    }

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
    if(game.config.physics.default == 'arcade'){
      this.crates = this.physics.add.group();
      this.physics.add.collider(this.crates, this.crates);  
    } else{
      this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
    }
    this.placeCrate(game.config.width/2);

    // waiting for user input
    this.input.on("pointerdown", function(pointer){
      this.placeCrate(pointer.x);
    }, this);
  }
})
