import { gameManager } from './store';
import {startLogger} from './logger'

startLogger();

setInterval(()=> {
    gameManager.AddGame(Math.random().toString())   
}, 5000)