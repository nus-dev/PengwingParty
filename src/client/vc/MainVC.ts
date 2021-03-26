import {VC} from "./VC";
import {BoardVC} from "./BoardVC";

export class MainVC extends VC {
    private boardVC: BoardVC;

    constructor() {
        super();

        this.boardVC = new BoardVC();
    }
    
    public renderView(): void {
        this.boardVC.renderView();
    }
}