import { Card } from "./Card";
import { TrumpCard } from "./TrumpCard";

export interface IPlayer {
    name: String;
    password: String;
    hand:Array<Card | TrumpCard>

    checkPassword(password:String): Boolean;
}