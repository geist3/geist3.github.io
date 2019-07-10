import Phaser from "phaser"
import rect from './assets/rect.png';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 300,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
let player, cursors;

function preload() {
  this.load.image("rect", rect)
}

function create() {
  this.cameras.main.setBackgroundColor(0xffbaba)
  player = this.physics.add.sprite(100,50,'rect')
  cursors = this.input.keyboard.createCursorKeys();
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
}

function update () {

  if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
    }
    
    if (cursors.up.isDown)
    {
        player.setVelocityY(-100);
    }
}