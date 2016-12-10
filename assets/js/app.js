var game = new Phaser.Game(800, 600, Phaser.AUTO, 'pokero', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('novice', 'assets/img/novice.png', 57.1428, 111.75, 85);
}

function create() {
  sprite = game.add.sprite(0, 0, 'novice');
  sprite.animations.add('walk');
  sprite.animations.play('walk', 50, true);
  game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
}

function update() {
  if (sprite.x >= 300)
  {
    sprite.scale.x += 0.01;
    sprite.scale.y += 0.01;
  }
}

