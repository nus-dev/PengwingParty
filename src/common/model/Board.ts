import { Card } from "./Card";

export class Board {
    private cards: Array<Array<Card>>;

    constructor(private totalFloor: number) {
        this.cards = new Array(totalFloor).fill(null).map((_, idx) => new Array(totalFloor - idx).fill(null));
    }

    public alreadyExistCard(floor: number, index: number): boolean {
        return !!this.cards[floor][index];
    }

    public enableJessiCard(floor: number, index: number): boolean {
        // if (this.alreadyExistCard(floor, index)) return false;

        // // 1층
        // if (floor === 0) {
        //     if (this.cards[0].every(card => !card)) return true;
        //     if (this.cards[0].every(card => card)) return false;
        //     if (index > 1) {

        //     }
        // }
        return true;
    }

    public jessiCard(card: Card, floor: number, index: number): void {
        this.cards[floor][index] = card;
    }
}