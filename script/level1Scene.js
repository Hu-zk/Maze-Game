

class Level1Scene extends Phaser.Scene {

    constructor(){
        super({key: 'level1Scene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('level1 Scene is working')
        this.load.image('level1_scene_bg','../assets/menuBg.jpg')

        this.load.image('background', 'Photos/Forest-BG2');
        this.load.image('dungeon_tiles', 'Photos/tilemap_packed.png');
        this.load.tilemapTiledJSON('map', 'Photos/tilesLayer.json');


         this.load.image('player', 'Photos/Player1.png');

    }

    create(data){
        this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')
        this.level1_scene_bg.setScale(0.75)
        this.level1_scene_bg.x = 800/2
        this.level1_scene_bg.y = 600/2


       const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
            background.setScale(game.config.width / background.width, game.config.height / background.height);

            const map = this.make.tilemap({ key: 'map' });
            const tileset = map.addTilesetImage('tilemap_packed', 'dungeon_tiles');
            const Layer = map.createLayer('Tile Layer 1', tileset, 0, 0);
            const tilesLayer= map.createLayer("tileslayer",tileset,0,0);

            // Calculate the position to center the tileset
            const centerX = (game.config.width - map.widthInPixels) / 2;
            const centerY = (game.config.height - map.heightInPixels) / 2;

            // Move the tileset layer to the center
                Layer.setPosition(centerX, centerY);
                tilesLayer.setPosition(centerX,centerY);
            


  // Add player and other game elements
  const character = this.textures.get('player').getSourceImage();
  const characterWidth = character.width;
  const characterHeight = character.height;

  const mapWidth = map.widthInPixels;
  const mapHeight = map.heightInPixels;

  const offsetX = 60; // Adjust desired offset
  const offsetY = 0; // Adjust  desired offset

  const playerX = (mapWidth - characterWidth) / 2 + offsetX;
  const playerY = mapHeight - characterHeight + offsetY;

  const player = this.physics.add.sprite(playerX, playerY, 'player');

  // Set player properties
  player.setCollideWorldBounds(true);

 
  // Enable physics for the collidable tiles
   this.physics.add.collider(player,tilesLayer);
   tilesLayer.setCollisionBetween(0,41);

  // Set up keyboard input
  const cursors = this.input.keyboard.createCursorKeys();

  // Player movement speed
  const speed = 200;

  // Update function called every frame
  this.update = function() {
    // Horizontal movement
    if (cursors.left.isDown) {
      player.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      player.setVelocityX(speed);
    } else {
      player.setVelocityX(0);
    }

    // Vertical movement
    if (cursors.up.isDown) {
      player.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      player.setVelocityY(speed);
    } else {
      player.setVelocityY(0);
    }


    // Disable the default physics body outline (purple box)
     player.body.debugBodyColor = 0x000000; 

     // Hide the green pointer
     player.body.debugShowDirection = false;




    // Any logic Your code here
  };
 

    }

    update (time,delta){

    }
}


export default Level1Scene