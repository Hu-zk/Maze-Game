import Level2Scene from "./level2Scene.js"
import Level1Scene from "./level1Scene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import TutorialScene from "./tutorialScene.js"

const tutorial_scene=new TutorialScene()
const level2_scene = new Level2Scene()
const level1_scene = new Level1Scene()
const title_scene = new TitleScene()
const menu_scene = new MenuScene()


const config = {
    type: Phaser.AUTO,
    width:800,
    height: 600,
    scene:[TitleScene,MenuScene,Level1Scene,Level2Scene,TutorialScene],
    physics:{
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

}

const game = new Phaser.Game(config)

game.scene.add('level1Scene', level1_scene)
game.scene.add('level2Scene', level2_scene)
game.scene.add('titleScene', title_scene)
game.scene.add('menuScene', menu_scene)
game.scene.add('tutorialScene',tutorial_scene)
game.scene.start('iitleScene',title_scene)