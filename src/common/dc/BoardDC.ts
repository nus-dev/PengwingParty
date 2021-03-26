import {Board} from "../model/Board";

class BoardDC {
    private board: Board;

    public setBoard(board: Board): void {
        this.board = board;
    }

    public getBoard(): Board {
        return this.board;
    }
}

export default new BoardDC();