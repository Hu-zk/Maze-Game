

class NameScene extends Phaser.Scene {

    constructor(){
        super({key: 'nameScene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('name Scene is working')
        this.load.image('name_scene_bg','../assets/menuBg.jpg')
    }

    create(data){
        this.name_scene_bg =this.add.sprite(0,0,'name_scene_bg')
        this.name_scene_bg.setScale(0.75)
        this.name_scene_bg.x = 800/2
        this.name_scene_bg.y = 600/2

    }

    update (time,delta){

    }
}

export default NameScene