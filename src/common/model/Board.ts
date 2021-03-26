import { Card } from "./Card";

export class Board {
    private cards: Array<Array<Card>>;

    constructor(private totalFloor: number) {
        this.cards = new Array(totalFloor).map(_ => []);
    }

    public addBottomCard(index: number): void {

    }
}