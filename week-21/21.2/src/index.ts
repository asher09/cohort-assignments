// import { gameManager } from './store';
// import {startLogger} from './logger'

// startLogger();

// setInterval(()=> {
//     gameManager.AddGame(Math.random().toString())   
// }, 5000)


import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);