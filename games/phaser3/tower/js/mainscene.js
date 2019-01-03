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
    this.load.image('crate2', 'assets/sprites/crates_study_x2.png');
    
  },

  placeCrate: function(pointerX, pointerY){
    if(game.config.physics.default == 'arcade'){
      this.crates.create(pointerX, 100, "crate2").
      setBounce(0.1).
      setFriction(1).
      setMass(1).
      setCollideWorldBounds(true);
    } else {  
      this.matter.add.sprite(pointerX, pointerY, "crate2");//.setDisplaySize(50, 50);
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
      // add floor
      this.matter.add.sprite(game.config.width / 2, 
        game.config.height-10, 
        'crate', 
        null, 
        {
          restitution: 0, 
          friction: 1,
          frictionStatic: 1, 
          density: 0,
          inertia: Infinity
        }).
        setDisplaySize(game.config.width, 10).
        setStatic(true)
      this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
    }
    this.placeCrate(game.config.width/2);

    // waiting for user input
    this.input.on("pointerdown", function(pointer){
      this.placeCrate(pointer.x,pointer.y);
    }, this);
  }
})
