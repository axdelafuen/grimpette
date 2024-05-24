import { Card } from "./Card";
import { HumanPlayer } from "./HumanPlayer";
import { IPlayer } from "./IPlayer";
import { InitDeck } from "./InitDeck";
import { TrumpCard } from "./TrumpCard";

export class Game{

    private cards: Array<Card | TrumpCard>
    private _player1: IPlayer
    private _player2: IPlayer
    private _river: Array<Card | TrumpCard> = new Array<Card | TrumpCard>
    private _heartDeck: Array<Card | TrumpCard> = new Array<Card | TrumpCard>
    private _diamondsDeck: Array<Card | TrumpCard> = new Array<Card | TrumpCard>
    private _spadesDeck: Array<Card | TrumpCard> = new Array<Card | TrumpCard>
    private _clubsDeck: Array<Card | TrumpCard> = new Array<Card | TrumpCard>
    private _trumpsDeck: Array<Card | TrumpCard> = new Array<Card | TrumpCard>

    constructor(){
        this.cards = new InitDeck().getDeck()
        this.shuffleDeck()

        for (let i = 0; i < 6; i++) {
            const randIndex = Math.floor(Math.random() * this._river.length);
            const val = this.cards.splice(randIndex, 1)[0];
            this._river.push(val);
        }

        this._player1 = new HumanPlayer("Player 1", "", this.cards.slice(0, Math.ceil(this.cards.length/2)))
        this._player2 = new HumanPlayer("Player 2", "", this.cards.slice(Math.ceil(this.cards.length/2)))
    }

    public shuffleDeck() {
        let currentIndex = this.cards.length,  randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }

    get river(){
        return this._river
    }

    get player1(){
        return this._player1
    }

    get player2(){
        return this._player2
    }

    get heartDeck(){
        return this._heartDeck
    }

    get diamondsDeck(){
        return this._diamondsDeck
    }

    get clubsDeck(){
        return this._clubsDeck
    }

    get spadesDeck(){
        return this._spadesDeck
    }

    get trumpsDeck(){
        return this._trumpsDeck
    }
}