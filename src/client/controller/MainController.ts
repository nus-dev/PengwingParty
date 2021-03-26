import BoardDC from "../../common/dc/BoardDC";
import { Board } from "../../common/model/Board";
import { Card } from "../../common/model/Card";
import { MainVC } from "../vc/MainVC";

class MainContoller {
    private mainVC: MainVC;

    constructor() {
        this.mainVC = new MainVC();
        const board = new Board(7);
        BoardDC.setBoard(board);

        (async () => {
            for (let floor = 0; floor < 7; floor++) {
                for (let index = 0; index < 7 - floor; index++) {
                    board.jessiCard(new Card(), floor, index);
                    this.mainVC.renderView();

                    await new Promise<void>(r => setTimeout(() => r(), 500));
                }
            }
        })();
    }
}

export default new MainContoller();