

class Level2Scene extends Phaser.Scene {

    constructor(){
        super({key: 'level2Scene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('level2 Scene is working')
        this.load.image('level2_scene_bg','../assets/menuBg.jpg')
    }

    create(data){
        this.level2_scene_bg =this.add.sprite(0,0,'level2_scene_bg')
        this.level2_scene_bg.setScale(0.75)
        this.level2_scene_bg.x = 800/2
        this.level2_scene_bg.y = 600/2

    }

    update (time,delta){

    }
}

export default Level2Scene