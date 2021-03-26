import { Card } from "./Card";

export class Player {
    private readonly deck : Array<Card>;

    /**
    제출 가능한 카드가 있다면 return card, 없다면 return null
     */
    protected getAvailableCard(colors: Array<CardColor>) : Card {
        return colors.find(color => deck.find(card => card.color === color));
    }
}