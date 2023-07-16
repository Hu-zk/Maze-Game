

class Level1Scene extends Phaser.Scene {

    constructor(){
      super({key: 'level1Scene'})
    }

    init(data){
      this.cameras.main.setBackgroundColor('#ffffff')
    }

<<<<<<< Updated upstream
    preload(){
      console.log('level1 Scene is working')
      this.load.image('level1_scene_bg','../assets/menuBg.jpg')
=======
        this.load.image('coin','../assets/coin.png')
        this.load.image('finish','../assets/finish.jpeg')
        this.load.image('board','../assets/board.png')
     }

  create(data){
  
>>>>>>> Stashed changes

      this.load.image('background', '../assets/Forest-BG2.jfif');
      this.load.image('dungeon_tiles', '../assets/tilemap_packed.png');
      this.load.tilemapTiledJSON('map', '../json/tilesLayer.json');


      this.load.image('player', '../assets/Player1.png');
      this.load.image('coin','../assets/coin-box.png')
      this.load.image('finish','../assets/finish.jpeg')

    }

    create(data){
      this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')
      this.level1_scene_bg.setScale(0.75)
      this.level1_scene_bg.x = 800/2
      this.level1_scene_bg.y = 600/2

<<<<<<< Updated upstream
=======
    this.hitFinish = function (pl, finito) {
      this.board = this.add.image(100, 100, 'board').setOrigin(0, 0);
      this.board.setScale(2)
      this.add.text(150, 200, 'You won, your score is: ' + this.score, { fontSize: '42px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff'});
      this.menu = this.add.image(100, 100, 'board').setOrigin(0, 0);
      this.movable = false
    }
>>>>>>> Stashed changes

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


      //Finding the far coins from the path
      this.pickCoinFar = function(pl, coin){
        coin.destroy();
        this.score += 5;
        console.log('your score is : ' + this.score );
      }

      //finding the near coins to the path
      this.pickCoinNear = function(pl, coin){
        coin.destroy();
        this.score += 1;
        console.log('your score is : ' + this.score );
      }

      this.hitFinish = function (pl, finito) {
        this.add.text(200, 200, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', Color: '#ff0000' });
      }
      
      //Creating and Positioning the coins
      this.coin1 = this.physics.add.sprite(80, 350,'coin')
      this.coin2 = this.physics.add.sprite(700, 500,'coin')
      this.coin3 = this.physics.add.sprite(80, 90,'coin')
      this.coin4 = this.physics.add.sprite(540, 350,'coin')
      this.coin5 = this.physics.add.sprite( 650, 190,'coin')
      this.coin6 = this.physics.add.sprite(400, 450,'coin')
      this.coin7 = this.physics.add.sprite(250, 200,'coin')
      this.coin8 = this.physics.add.sprite(350, 330,'coin')

      //Creating and Positioning the Finish point

      this.finish = this.physics.add.sprite(625, 60,'finish')
      this.finish.setScale(0.045, 0.05)



      //Giving the coins the right size
      this.coin1.setScale(0.15)
      this.coin2.setScale(0.15)
      this.coin3.setScale(0.15)
      this.coin4.setScale(0.15)
      this.coin5.setScale(0.15)
      this.coin6.setScale(0.15)
      this.coin7.setScale(0.15)
      this.coin8.setScale(0.15)

      //Set coins to be Immovable

      this.coin1.setImmovable(true)
      this.coin2.setImmovable(true)
      this.coin3.setImmovable(true)
      this.coin4.setImmovable(true)
      this.coin5.setImmovable(true)
      this.coin6.setImmovable(true)
      this.coin7.setImmovable(true)
      this.coin8.setImmovable(true)

      this.finish.setImmovable(true)


      this.score = 0;

      //Assigning the overlap action
      this.physics.add.overlap(player, this.coin1, this.pickCoinFar, null, this);
      this.physics.add.overlap(player, this.coin2, this.pickCoinFar, null, this);
      this.physics.add.overlap(player, this.coin3, this.pickCoinFar, null, this);
      this.physics.add.overlap(player, this.coin4, this.pickCoinFar, null, this);
      this.physics.add.overlap(player, this.coin5, this.pickCoinNear, null, this);
      this.physics.add.overlap(player, this.coin6, this.pickCoinNear, null, this);
      this.physics.add.overlap(player, this.coin7, this.pickCoinNear, null, this);
      this.physics.add.overlap(player, this.coin8, this.pickCoinNear, null, this);


      
      

      this.update = function() {
        // Horizontal movement
        if (cursors.left.isDown) {
          player.setVelocityX(-speed);
        } else if (cursors.right.isDown) {
          player.setVelocityX(speed);
        } else {
          player.setVelocityX(0);
        }
<<<<<<< Updated upstream
    
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

=======
        
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-this.speed);
            this.player.anims.play('up', true);
          }
          else if (this.cursors.down.isDown) {
            this.player.setVelocityY(this.speed);
            this.player.anims.play('down', true);
          } 
          else {
            this.player.anims.stop();
          }
        } else {
          this.player.anims.stop();
          this.player.setVelocityY(-5);
        }
      } 
>>>>>>> Stashed changes

      //Creating and possitioning the coins
      

      };
    }
    update (time,delta){
  
    }

}


export default Level1Scene