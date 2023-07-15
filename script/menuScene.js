

class MenuScene extends Phaser.Scene {

    constructor(){
        super({key: 'menuScene'})
        this.menu_scene_image = null
        this.menu_scene_title = null
        this.menu_scene_title_style = {
            fontFamily: 'poppens',
            backgroundColor:'#7a3f0f',
            fontSize: '60px',
            fontWeight: "bold",
            color: '#ffffff',
            align: 'center'
        }
    }

    init(data){
        this.cameras.main.setBackgroundColor('#000000')
    }

    preload(){
        console.log('menu Scene is working')
        this.load.image('menuSceneBg','../assets/menuBg.jpg')
        this.load.image('startButton','../assets/startButton.jpeg')
        this.load.image('levelButton','../assets/levelButton.jpeg')
        this.load.image('mic','../assets/mic.jpeg')

        this.load.audio('menuMusic','assets/sounds/menuSound.mp3')
    }

    create(data){
        
        this.menu_scene_image =this.add.sprite(0,0,'menuSceneBg')
        this.menu_scene_image.setScale(0.762)
        this.menu_scene_image.x = 800/2
        this.menu_scene_image.y = 600/2
        this.menu_scene_title = this.add.text(450,450, "UnderGround\nMAZE", this.menu_scene_title_style)

        
        this.start_button= this.add.sprite(0,0,'startButton')
        this.start_button.setScale(0.762)
        this.start_button.x = 130
        this.start_button.y = 240
        this.start_button.setInteractive({useHandCursor: true})
        this.start_button.on('pointerdown',() => this.clickStartButton())
        
        
        this.level_button= this.add.sprite(0,0,'levelButton')
        this.level_button.setScale(0.762)
        this.level_button.x = 145
        this.level_button.y = 330
        this.level_button.setInteractive({useHandCursor: true})
        this.level_button.on('pointerdown',() => this.clickLevelButton())

        this.menu_music = this.sound.add('menuMusic')
        this.menu_music.play({loop:true})
        
        this.mic_image =this.add.sprite(0,0,'mic')
        this.mic_image.setScale(0.1)
        this.mic_image.x = 16
        this.mic_image.y = 583
        this.mic_image.setInteractive({useHandCursor: true})

    }

    update (time,delta){
    }

    clickStartButton(){
        this.scene.start('level1Scene')
    }
    clickLevelButton(){
        this.scene.start('level1Scene')
    }
    clickmic(){


    }


}

export default MenuScene