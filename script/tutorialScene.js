class TutorialScene extends Phaser.Scene {


    constructor(){
        super({key: 'tutorialScene'})
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
        this.load.image('textBg','../assets/textBg.png')
        this.load.image('coin','../assets/coin.png')
        this.load.image('finish','../assets/finish.jpeg')
        this.load.image('keys','../assets/keys.png')
    }
    create(){
        let bg=this.title_bg = this.add.sprite(100,10,'textBg').setOrigin(0,0)
        bg.scale=1.2
        let key=this.key = this.add.sprite(250,170,'keys').setScale(0.2)
        
        let coin=this.coin= this.add.sprite(250,260,'coin').setScale(0.3)
        let finish=this.finish=this.add.sprite(250,350,'finish').setScale(0.09)
        

        this.tutorial_title = this.add.text(200,80, "GAME TUTORIAL", this.tutorial_title_style)
        this.key_tut = this.add.text(350,165, "Move the player", this.tut)
        this.coin_tut= this.add.text(350,245, "Collect coins", this.tut)
        this.finish_tut= this.add.text(350,335, "Reach the finish line", this.tut)
    }
    update(){


    }    
    
}
export default TutorialScene