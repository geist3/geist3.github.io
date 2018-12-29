var game;

window.onload = function(){
  var config = {
    type: Phaser.AUTO,
    antialias:false,
    autoFocus:true,
    parent: 'game',
    width:300,
    height:300,
    backgroundColor: "#000044",
    physics: {
      default: "matter",
      matter: {
        gravity: {y: 1},
        enableSleep: true // performance over accuracy
      }
    },
    scene: [splashScene],
    title: 'Tower',
    pixelArt: true,
    banner: {
        text: '#ffffff',
        background: [
            '#fff200',
            '#38f0e8',
            '#00bff3',
            '#ec008c'
        ],
        hidePhaser: true
    },
    callbacks: {
      postBoot: function (game) {
        game.canvas.style.width = '100%';
        game.canvas.style.height = '100%';
      }
    }
  };

  game = new Phaser.Game(config);
}