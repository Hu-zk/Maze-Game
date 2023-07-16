

class Level2Scene extends Phaser.Scene {

    constructor(){
        super({key: 'level2Scene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('level2 Scene is working')

        this.load.image('background', '../assets/Forest-BG2.jfif');
        this.load.image('dungeon_tiles', '../assets/tilemap_packed.png');
        this.load.tilemapTiledJSON('map', '../json/maze2.json');

        this.load.image('player', '../assets/Player1.png');

        this.load.audio('gameMusic','../assets/sounds/gameSound.mp3')
    }


    create(data){

        const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        background.setScale(this.game.config.width / background.width, this.game.config.height / background.height);

        this.mic_off_image =this.add.sprite(0,0,'micOff')
        this.mic_off_image.setScale(0.1)
        this.mic_off_image.x = 15
        this.mic_off_image.y = 584
        this.mic_off_image.setInteractive({useHandCursor: true})
        this.mic_off_image.on('pointerdown',() => this.volumeButton())
        this.mic_off_image.setVisible(false)


        this.mic_on_image =this.add.sprite(0,0,'micOn')
        this.mic_on_image.setScale(0.1)
        this.mic_on_image.x = 15
        this.mic_on_image.y = 584
        this.mic_on_image.setInteractive({useHandCursor: true})
        this.mic_on_image.on('pointerdown',() => this.volumeButton())
        this.volume_on = true    

        this.game_music = this.sound.add('gameMusic')
        this.game_music.play({loop:true})

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

    volumeButton(){
        if(this.volume_on == true)
        {
            this.game_music.stop()
            this.volume_on = false
            this.mic_off_image.setVisible(true)
            this.mic_on_image.setVisible(false)
        }
        else
        {
            this.game_music.play()
            this.volume_on = true
            this.mic_off_image.setVisible(false)
            this.mic_on_image.setVisible(true)
        }
    }

}

export default Level2Scene