class EndScene extends Phaser.Scene {

    constructor(){
        super({key: 'endScene'})
    }

    init(data){
        this.cameras.main.setBackgroundColor('#000')
    }

    preload(){
        console.log('level2 Scene is working')


        this.load.image('troll','../assets/troll.jpeg')
        this.load.image('menu','../assets/menu.png')
        
        }


    create(data){

        this.troll = this.add.image(250, 100, 'troll').setOrigin(0, 0);
        this.troll.setScale(0.5)
        this.add.text(50, 400, 'Nabiha was safe all along she was just pranking you\nAnd you fell for it, NOOOOBB!!!!', { fontSize: '32px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff'});
        this.menu = this.add.image(300, 300, 'menu').setOrigin(0, 0)
        this.menu.setInteractive({useHandCursor: true})
        this.menu.on('pointerdown',() =>  {
            this.scene.switch('menuScene')
        })

    }

    update(){
    } 
}

    export default EndScene