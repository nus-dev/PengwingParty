import BoardDC from "../../common/dc/BoardDC";
import { BoardView, BoardViewContents } from "../view/BoardView";
import { VC } from "./VC";

export class BoardVC extends VC {
    private boardView: BoardView;

    constructor() {
        super();

        this.boardView = new BoardView();
    }
    public renderView(): void {
        this.boardView.setContents(new BoardViewContents(BoardDC.getBoard()));
    }
}