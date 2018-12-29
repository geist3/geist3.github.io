var game;

window.onload = function(){
  var config = {
    type: Phaser.AUTO,
    antialias:false,
    autoFocus:true,
   canvas:document.getElementById('gameCanvas'),
    width:300,
    height:300,
    backgroundColor: "#000044",
    physics: {
      default: "matter"
    },
    scene: [splashScene],
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