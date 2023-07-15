

import NameScene from "./nameScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"

const name_scene = new NameScene()
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

game.scene.add('nameScene', name_scene)
game.scene.add('titleScene', title_scene)
game.scene.add('menuScene', menu_scene)

game.scene.start('titleScene')