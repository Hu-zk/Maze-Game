

import Level2Scene from "./level2Scene.js"
import Level1Scene from "./level1Scene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"

const level2_scene = new Level2Scene()
const level1_scene = new Level1Scene()
const title_scene = new TitleScene()
const menu_scene = new MenuScene()


const config = {
    type: Phaser.AuTO,
    width:800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true
        }
    },

}

const game = new Phaser.Game(config)

game.scene.add('level1Scene', level1_scene)
game.scene.add('level2Scene', level2_scene)
game.scene.add('titleScene', title_scene)
game.scene.add('menuScene', menu_scene)

game.scene.start('titleScene')