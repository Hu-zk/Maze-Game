

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
        this.load.spritesheet('player','assets/player.png',
                                {
                                    frameWidth:126.41,
                                    frameHeight:152});
    }

    create(data){
        this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')
        this.level1_scene_bg.setScale(0.75)
        this.level1_scene_bg.x = 800/2
        this.level1_scene_bg.y = 600/2
        this.add.sprite(150,250,'player').setScale(0.5)        

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers("player",{start:0,end:3}),
            frameRate:8,
            repeat:-1
        });
        
    
    }

    update (time,delta){

    }
}

export default Level1Scene