import { CardColor } from "./CardColor";
import { CardValue } from "./CardValue";
import { Card } from "./Card";
import { TrumpCard } from "./TrumpCard";

export class InitDeck {
    
    private cards: Array<Card | TrumpCard> = new Array<Card | TrumpCard>

    constructor(){
        this.generateDeck()
    }

    public getDeck() : Array<Card | TrumpCard> {
        return this.cards
    }

    private generateDeck() {
        this.cards.push(new TrumpCard(0, "00-TheFool"))
        this.cards.push(new TrumpCard(1, "01-TheMagician"))
        this.cards.push(new TrumpCard(2, "02-TheHighPriestess"))
        this.cards.push(new TrumpCard(3, "03-TheEmpress"))
        this.cards.push(new TrumpCard(4, "04-TheEmperor"))
        this.cards.push(new TrumpCard(5, "05-TheHierophant"))
        this.cards.push(new TrumpCard(6, "06-TheLovers"))
        this.cards.push(new TrumpCard(7, "07-TheChariot"))
        this.cards.push(new TrumpCard(8, "08-Strength"))
        this.cards.push(new TrumpCard(9, "09-TheHermit"))
        this.cards.push(new TrumpCard(10, "10-WheelOfFortune"))
        this.cards.push(new TrumpCard(11, "11-Justice"))
        this.cards.push(new TrumpCard(12, "12-TheHangedMan"))
        this.cards.push(new TrumpCard(13, "13-Death"))
        this.cards.push(new TrumpCard(14, "14-Temperance"))
        this.cards.push(new TrumpCard(15, "15-TheDevil"))
        this.cards.push(new TrumpCard(16, "16-TheTower"))
        this.cards.push(new TrumpCard(17, "17-TheStar"))
        this.cards.push(new TrumpCard(18, "18-TheMoon"))
        this.cards.push(new TrumpCard(19, "19-TheSun"))
        this.cards.push(new TrumpCard(20, "20-Judgement"))
        this.cards.push(new TrumpCard(21, "21-TheWorld"))
        
        this.cards.push(new Card(CardColor.Heart, CardValue.As, "Cups01"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Two, "Cups02"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Three, "Cups03"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Four, "Cups04"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Five, "Cups05"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Six, "Cups06"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Seven, "Cups07"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Eight, "Cups08"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Nine, "Cups09"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Ten, "Cups10"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Jack, "Cups11"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Knight, "Cups12"))
        this.cards.push(new Card(CardColor.Heart, CardValue.Queen, "Cups13"))
        this.cards.push(new Card(CardColor.Heart, CardValue.King, "Cups14"))

        this.cards.push(new Card(CardColor.Diamonds, CardValue.As, "Pentacles01"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Two, "Pentacles02"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Three, "Pentacles03"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Four, "Pentacles04"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Five, "Pentacles05"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Six, "Pentacles06"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Seven, "Pentacles07"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Eight, "Pentacles08"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Nine, "Pentacles09"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Ten, "Pentacles10"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Jack, "Pentacles11"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Knight, "Pentacles12"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.Queen, "Pentacles13"))
        this.cards.push(new Card(CardColor.Diamonds, CardValue.King, "Pentacles14"))

        this.cards.push(new Card(CardColor.Spades, CardValue.As, "Swords01"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Two, "Swords02"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Three, "Swords03"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Four, "Swords04"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Five, "Swords05"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Six, "Swords06"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Seven, "Swords07"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Eight, "Swords08"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Nine, "Swords09"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Ten, "Swords10"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Jack, "Swords11"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Knight, "Swords12"))
        this.cards.push(new Card(CardColor.Spades, CardValue.Queen, "Swords13"))
        this.cards.push(new Card(CardColor.Spades, CardValue.King, "Swords14"))

        this.cards.push(new Card(CardColor.Clubs, CardValue.As, "Wands01"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Two, "Wands02"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Three, "Wands03"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Four, "Wands04"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Five, "Wands05"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Six, "Wands06"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Seven, "Wands07"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Eight, "Wands08"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Nine, "Wands09"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Ten, "Wands10"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Jack, "Wands11"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Knight, "Wands12"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.Queen, "Wands13"))
        this.cards.push(new Card(CardColor.Clubs, CardValue.King, "Wands14"))
    }
}