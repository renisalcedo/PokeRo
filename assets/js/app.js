var game = new Phaser.Game(800, 600, Phaser.AUTO, 'pokero', { preload: preload, create: create });

function preload() {
  game.load.spritesheet('novice', 'assets/img/novice.png', 57.1428, 111.75, 85);
}

function create() {
  game.add.sprite(0, 0, 'novice');
}
