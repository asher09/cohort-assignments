
interface Games {
    id: String; 
    whitePlayer: String;
    blackPlayer: String;
    moves: String[];

}

export class GameManager {
    games: Games[] = [];
    constructor() {
        this.games = [];
    }
    
    AddMove(gameId: String, move: String) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game=> game.id ===gameId);
        game?.moves.push(move)
    }

    AddGame(gameId: String) {
        const game = {
            id: gameId,
            whitePlayer: "Ash",
            blackPlayer: "Danny",
            moves: []
        }

        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }

}

export const gameManager = new GameManager();