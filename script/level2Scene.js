

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

       
        let player=this.load.spritesheet('player','assets/player.png',
        {
            frameWidth:126.41,
            frameHeight:152})

        this.load.audio('gameMusic','../assets/sounds/gameSound.mp3')

        this.load.image('coin','../assets/coin.png')
        this.load.image('finish','../assets/finish.jpeg')
        this.load.image('board','../assets/board.png')
        this.load.image('menu','../assets/menu.png')
        this.load.image('next','../assets/next.png')
    }


    create(data){

       
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


        this.input.keyboard.enabled=true;   
        let player=this.player=this.physics.add.sprite(340,540,'player');
        this.player.scale=0.2;
        this.player.depth=1;
        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers("player",{start:0,end:3}),
            frameRate:8,
            repeat:-1
        });
        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers("player",{start:4,end:7}),
            frameRate:8,
            repeat:-1
        });
    
        this.anims.create({
            key:'up',
            frames:this.anims.generateFrameNumbers("player",{start:8,end:11}),
            frameRate:8,
            repeat:-1
        });
        this.anims.create({
            key:'down',
            frames:this.anims.generateFrameNumbers("player",{start:12,end:15}),
            frameRate:8,
            repeat:-1
        });
        this.anims.create({
            key:'thrust',
            frames:this.anims.generateFrameNumbers("player"),
            frameRate:8,
            repeat:-1
        });       

        this.cursors = this.input.keyboard.createCursorKeys();    
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(player,tilesLayer);
        tilesLayer.setCollisionBetween(0,41);


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


        this.pickCoinFar = function(pl, coin){
            coin.destroy();
            this.score += 5;
            this.coinsCounter++;
            this.coinsCounterLabel.setText('You have ' + this.coinsCounter + ' coins');
            console.log('your score is : ' + this.score );
          }
          //finding the near coins to the path
          this.pickCoinNear = function(pl, coin){
            coin.destroy();
            this.score += 1;
            this.coinsCounter++;
            this.coinsCounterLabel.setText('You have ' + this.coinsCounter + ' coins');
            console.log('your score is : ' + this.score );
          }
      
          this.hitFinish = function (pl, finito) {
            
            this.board = this.add.image(90, 100, 'board').setOrigin(0, 0);
            this.board.setScale(2.2)
            
            this.add.text(180, 200, 'You won, your score is:', { fontSize: '42px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff'});
            this.add.text(380, 250, this.score, { fontSize: '42px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff'});
            
            this.menu = this.add.image(330, 300, 'menu').setOrigin(0, 0)
            this.menu.on('pointerdown',() => this.scene.switch('menuScene'))
            this.menu.setInteractive({useHandCursor: true})
    
      
            this.movable = false
          }

         //Creating and Positioning the coins
    this.coin1 = this.physics.add.sprite(80, 350,'coin')
    this.coin2 = this.physics.add.sprite(700, 500,'coin')
    this.coin3 = this.physics.add.sprite(80, 110,'coin')
    this.coin4 = this.physics.add.sprite(540, 350,'coin')
    this.coin5 = this.physics.add.sprite( 650, 155,'coin')
    this.coin6 = this.physics.add.sprite(400, 440,'coin')
    this.coin7 = this.physics.add.sprite(255, 200,'coin')
    this.coin8 = this.physics.add.sprite(360, 320,'coin')

    //Creating and Positioning the Finish point

    this.finish = this.physics.add.sprite(800, 155,'finish')
    this.finish.setScale(0.045, 0.05)

    //Giving the coins the right size
    this.coin1.setScale(0.12)
    this.coin2.setScale(0.12)
    this.coin3.setScale(0.12)
    this.coin4.setScale(0.12)
    this.coin5.setScale(0.12)
    this.coin6.setScale(0.12)
    this.coin7.setScale(0.12)
    this.coin8.setScale(0.12)

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

    //Assigning the overlap coins action
    this.physics.add.overlap(this.player, this.coin1, this.pickCoinFar, null, this);
    this.physics.add.overlap(this.player, this.coin2, this.pickCoinFar, null, this);
    this.physics.add.overlap(this.player, this.coin3, this.pickCoinFar, null, this);
    this.physics.add.overlap(this.player, this.coin4, this.pickCoinFar, null, this);
    this.physics.add.overlap(this.player, this.coin5, this.pickCoinNear, null, this);
    this.physics.add.overlap(this.player, this.coin6, this.pickCoinNear, null, this);
    this.physics.add.overlap(this.player, this.coin7, this.pickCoinNear, null, this);
    this.physics.add.overlap(this.player, this.coin8, this.pickCoinNear, null, this);


    //Assigning the overlap coins action
    this.physics.add.overlap(this.player, this.finish, this.hitFinish, null, this);


    this.movable = true;

    //Setting The Character's speed
    this.speed = 300;

    //Finding the far coins from the path



    this.coinsCounter = 0;
    this.coinsCounterLabel = this.add.text(20, 20, 'You Have : 0 coins', { fontSize: '46px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff' });

    }

  
    update(){
        if (this.movable) { 
            this.player.setVelocity(0);
            if (this.cursors.left.isDown) {
              this.player.setVelocityX(-this.speed);
              this.player.anims.play('left', true);
            } 
            else if (this.cursors.right.isDown) {
              this.player.setVelocityX(this.speed);
              this.player.anims.play('right', true);
            } else {
              this.player.anims.stop();
            }
            
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