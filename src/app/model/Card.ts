import { CardColor } from '../model/CardColor';
import { CardValue } from '../model/CardValue';

export class Card {
    private color: CardColor;
    private value: CardValue;

    constructor(color:CardColor, value:CardValue) {
        this.color = color;
        this.value = value;
    }

    public getColor() : CardColor {
        return this.color;
    }

    public getValue() : CardValue {
        return this.value;
    }

    public toString() : string {
        return this.value+' of '+this.color;
    }
}