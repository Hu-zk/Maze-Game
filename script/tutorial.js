class Tutorial extends Phaser.Scene {
    constructor() {
        super('Tutorial');
    }
    preload() {
        this.load.image('level1_scene_bg','../assets/menuBg.jpg')   
        this.load.image('player', '../assets/Player1.png');

    }
    create() {
 
        this.face = this.add.image(game.config.width / 2, game.config.height / 2, "face");
        this.face.angle = 25;
         
        this.face.setInteractive();
 
 
        var textConfig={fontSize:'20px',color:'#ff0000',fontFamily: 'Arial'};
 
        this.title=this.add.text(game.config.width/2,game.config.height*.75,"HELLO PHASER!!!",textConfig);
         
        //setOrigin() replaces anchor.set()
        //sprites now default to orign 0.5 for both x and y
        this.title.setOrigin(0.5,0.5);
 
       //this will listen for a down event 
       //on every object that is set interactive
       this.input.on('gameobjectdown',this.onObjectClicked);
         
    }
    onObjectClicked(pointer,gameObject)
    {
        gameObject.angle+=10;
    }
    update() {}
}



export default Tutorial
// class Level1Scene extends Phaser.Scene {

//     constructor(){
//       super({key: 'level1Scene'})
//     }

//     init(data){
//       this.cameras.main.setBackgroundColor('#ffffff')
//     }

//     preload(){
//       this.load.image('level1_scene_bg','../assets/menuBg.jpg')
//     }

//     create(data){
//       this.level1_scene_bg =this.add.sprite(0,0,'level1_scene_bg')

//       const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
//       background.setScale(this.game.config.width / background.width, this.game.config.height / background.height);

//       // Calculate the position to center the tileset
//       const centerX = (this.game.config.width - map.widthInPixels) / 2;
//       const centerY = (this.game.config.height - map.heightInPixels) / 2;

//       // Move the tileset layer to the center
//       Layer.setPosition(centerX, centerY);
//       tilesLayer.setPosition(centerX,centerY);


//       // Add player and other game elements
//       const character = this.textures.get('player').getSourceImage();
//       const characterWidth = character.width;
//       const characterHeight = character.height;

//       const playerX = (mapWidth - characterWidth) / 2 + offsetX;
//       const playerY = mapHeight - characterHeight + offsetY;

//       const player = this.physics.add.sprite(playerX, playerY, 'player');
    
//     }

// }


// export default Level1Scene