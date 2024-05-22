import { CardColor } from '../model/CardColor';
import { CardValue } from '../model/CardValue';

export class Card {
    private color: CardColor
    private value: CardValue
    private imageName: String


    constructor(color:CardColor, value:CardValue, imageName:String) {
        this.color = color
        this.value = value
        this.imageName = imageName
    }

    public getColor() : CardColor {
        return this.color
    }

    public getValue() : CardValue {
        return this.value
    }

    public getImageName() : String {
        return this.imageName
    }

    public toString() : string {
        return this.value+' of '+this.color
    }
}