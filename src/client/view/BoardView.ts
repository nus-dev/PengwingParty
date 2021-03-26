import { Board } from "../../common/model/Board";
import { View, ViewContents } from "./View";

export class BoardViewContents extends ViewContents {
    constructor(public board: Board) {
        super();
    }

    public equals(contents: this): boolean {
        return super.equals(contents);
    }
}

export class BoardView extends View<BoardViewContents> {
    protected createElement(): void { 
        this.container = document.createElement('div');
    }

    protected getInitialContents(): BoardViewContents {
        return new BoardViewContents(undefined);
    }

    protected renderView(): void {
        console.log(this.contents.board);
    }
}