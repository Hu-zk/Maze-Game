

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

      this.load.image('background', '../assets/Forest-BG2.jfif');
      this.load.image('dungeon_tiles', '../assets/tilemap_packed.png');
      this.load.tilemapTiledJSON('map', '../json/tilesLayer.json');


      this.load.image('player', '../assets/Player1.png');
      this.load.image('coin','../assets/coin-box.png')

    }

    create(data){
      this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')
      this.level1_scene_bg.setScale(0.75)
      this.level1_scene_bg.x = 800/2
      this.level1_scene_bg.y = 600/2


      const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
      background.setScale(this.game.config.width / background.width, this.game.config.height / background.height);

      const map = this.make.tilemap({ key: 'map' });
      const tileset = map.addTilesetImage('tilemap_packed', 'dungeon_tiles');
      const Layer = map.createLayer('Tile Layer 1', tileset, 0, 0);
      const tilesLayer= map.createLayer("tileslayer",tileset,0,0);

      // Calculate the position to center the tileset
      const centerX = (this.game.config.width - map.widthInPixels) / 2;
      const centerY = (this.game.config.height - map.heightInPixels) / 2;

      // Move the tileset layer to the center
      Layer.setPosition(centerX, centerY);
      tilesLayer.setPosition(centerX,centerY);


      // Add player and other game elements
      const character = this.textures.get('player').getSourceImage();
      const characterWidth = character.width;
      const characterHeight = character.height;

      const mapWidth = map.widthInPixels;
      const mapHeight = map.heightInPixels;

      const offsetX = 0; // Adjust desired offset
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
    
        // Any logic Your code herethis.coin1 = this.add.sprite(80, 350,'coin')
        this.coin1 = this.add.sprite(80, 350,'coin')
      this.coin2 = this.add.sprite(700, 500,'coin')
      this.coin3 = this.add.sprite(80, 90,'coin')
      this.coin4 = this.add.sprite(540, 350,'coin')
      this.coin5 = this.add.sprite(700, 90,'coin')

      this.coin1.setScale(0.15)
      this.coin2.setScale(0.15)
      this.coin3.setScale(0.15)
      this.coin4.setScale(0.15)
      this.coin5.setScale(0.15)

      this.score = 0;
      this.physics.add.overlap(player, this.coin1, this.pickCoinNear, null, this);
      this.physics.add.collider(player,this.coin2);
      this.physics.add.collider(player,this.coin3);
      this.physics.add.collider(player,this.coin4);
      this.physics.add.collider(player,this.coin5);

      };
    }
    update (time,delta){
  
    }

}


export default Level1Scene