var splashScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function splashScene(){
    Phaser.Scene.call(this, {key: "splashScene"})
  },

  preload: function(){
    this.load.image('crate', 'assets/sprites/crate.png');
  },

  create: function(){
    // Start Button
    btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2, 'crate').setInteractive();
    btnStart.setDisplaySize(game.config.width, game.config.width);
    btnStart.on('pointerover', function (event) { });
    btnStart.on('pointerout', function (event) { });
    btnStart.on('pointerdown', function(event){
      this.scene.add('mainScene', new mainScene('mainScene'), true);
      this.scene.start('mainScene');
    }, this);

    var text = this.add.text(20,20,'Game: TOWER' + 
    '\n\nClick to drop crates' +
    '\nand build a tower as high' +
    '\nas you can.'+ 
    '\n\nClick to start.',
    {font: '16px Courier', fill: '#ffff00'})
  }
})