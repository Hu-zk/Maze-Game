

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
        let player=this.load.spritesheet('player','assets/player.png',
        {
            frameWidth:126.41,
            frameHeight:152})
     }
    

    create(data){
        this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')
        this.level1_scene_bg.setScale(0.75)
        this.level1_scene_bg.x = 800/2
        this.level1_scene_bg.y = 600/2
        this.input.keyboard.enabled=true;   
        let player=this.player=this.physics.add.sprite(150,250,'player');
        this.player.scale=0.5;
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
    
    }

     update(){
        this.player.setVelocity(0);
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-50);
            this.player.anims.play('left', true);
        } 
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(50);
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-50);
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(50);
            this.player.anims.play('down', true);
        } 
        else {
            this.player.anims.stop();
        }
    }
    
}

export default Level1Scene