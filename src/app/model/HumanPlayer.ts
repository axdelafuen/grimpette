import { IPlayer } from '../model/IPlayer';
import { Card } from './Card';
import { TrumpCard } from './TrumpCard';

export class HumanPlayer implements IPlayer {
    protected _name: IPlayer['name']
    protected _password: IPlayer['password']
    private _hand: IPlayer['hand']
    
    constructor(name:String, password:String, hand: Array<Card | TrumpCard>){
        this._name = name
        this._password = password
        this._hand = hand
    }

    get name() {
        return this._name
    }
    
    get password() {
        return ""
    }

    get hand(){
        return this._hand
    }

    public checkPassword(password: String): Boolean {
        return this._password == password
    }    
} 