

class TitleScene extends Phaser.Scene {

    constructor(){
        super({key: 'titleScene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('title Scene is working')
        this.load.image('titleSceneBg','../assets/title.png')
    }

    create(data){
        this.title_scene_bg =this.add.sprite(0,0,'titleSceneBg')
        this.title_scene_bg.x = 800/2
        this.title_scene_bg.y = 600/2

    }

    update (time,delta){
        if(time>3000)
        {
            this.scene.switch('menuScene')
        }
    }
}

export default TitleScene