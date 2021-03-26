import BoardDC from "../../common/dc/BoardDC";
import { Board } from "../../common/model/Board";
import { MainVC } from "../vc/MainVC";

class MainContoller {
    private mainVC: MainVC;

    constructor() {
        this.mainVC = new MainVC();
        BoardDC.setBoard(new Board(7));
        setInterval(() => {
            this.mainVC.renderView();
        }, 500);
    }
}

export default new MainContoller();