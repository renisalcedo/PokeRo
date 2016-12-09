var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
  game.load.image('novice', 'assets/img/novice.png');
}

function create() {
  game.add.sprite(0, 0, 'novice');
}
