

class TutorialScene extends Phaser.Scene {

    constructor(){
        super({key: 'tutorialScene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#ffffff')
        this.tutorial_title = null
        this.tutorial_title_style = {
            fontFamily: 'poppens',
            fontSize: '50px',
            fontWeight: "bold",
            color: '#ffffff',
            align: 'center'
        }
        this.tut={
            fontFamily: 'poppens',
            fontSize: '30px',
            fontWeight: "lighter",
            color: '#ffffff',
        }
    }

    preload(){
        console.log('tutorial Scene is working')
        this.load.image('menuSceneBg','../assets/menuBg.jpg')
        this.load.image('homeIcon', '../assets/homeIcon.png')
        this.load.image('micOn','../assets/micOn.png')
        this.load.image('micOff','../assets/micOff.png')
        this.load.audio('menuMusic','../assets/sounds/menuSound.mp3')
        this.load.image('textBg','../assets/textBg.png')

        this.load.image('coin','../assets/coin.png')
        this.load.image('finish','../assets/finish.jpeg')
        this.load.image('keys','../assets/keys.png')

    }

    create(data){

        this.menu_scene_image =this.add.sprite(0,0,'menuSceneBg')
        this.menu_scene_image.setScale(0.762)
        this.menu_scene_image.x = 800/2
        this.menu_scene_image.y = 600/2

        this.title_bg = this.add.sprite(0,0,'textBg')
        this.title_bg.setScale(1.3)
        this.title_bg.x = 400
        this.title_bg.y = 235


        this.key = this.add.sprite(250,170,'keys').setScale(0.2)
        this.coin= this.add.sprite(250,260,'coin').setScale(0.3)
        this.finish=this.add.sprite(250,350,'finish').setScale(0.09)
        

        this.tutorial_title = this.add.text(200,80, "GAME TUTORIAL", this.tutorial_title_style)
        this.key_tut = this.add.text(350,165, "Move the player", this.tut)
        this.coin_tut= this.add.text(350,245, "Collect coins", this.tut)
        this.finish_tut= this.add.text(350,335, "Reach the finish line", this.tut)

        this.menu_music = this.sound.add('menuMusic')
        this.menu_music.play({loop:true})

        this.mic_off_image =this.add.sprite(0,0,'micOff')
        this.mic_off_image.setScale(0.1)
        this.mic_off_image.x = 23
        this.mic_off_image.y = 577
        this.mic_off_image.setInteractive({useHandCursor: true})
        this.mic_off_image.on('pointerdown',() => this.volumeButton())
        this.mic_off_image.setVisible(false)


        this.mic_on_image =this.add.sprite(0,0,'micOn')
        this.mic_on_image.setScale(0.1)
        this.mic_on_image.x = 23
        this.mic_on_image.y = 577
        this.mic_on_image.setInteractive({useHandCursor: true})
        this.mic_on_image.on('pointerdown',() => this.volumeButton())
        this.volume_on = true

        this.home_icon =this.add.sprite(0,0,'homeIcon')
        this.home_icon.setScale(0.1)
        this.home_icon.x = 780
        this.home_icon.y = 580
        this.home_icon.setInteractive({useHandCursor: true})
        this.home_icon.on('pointerdown',() => this.homeIcon())


    }

    update (time,delta){

    }

    volumeButton(){
        if(this.volume_on == true)
        {
            this.menu_music.stop()
            this.volume_on = false
            this.mic_off_image.setVisible(true)
            this.mic_on_image.setVisible(false)
        }
        else
        {
            this.menu_music.play()
            this.volume_on = true
            this.mic_off_image.setVisible(false)
            this.mic_on_image.setVisible(true)
        }
    }

    homeIcon(){
        
        this.scene.stop('tutorialScene'); 
        this.scene.start('menuScene')
        this.menu_music.stop()
    }
}

export default TutorialScene