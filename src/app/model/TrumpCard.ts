export class TrumpCard {
    private value: number
    private imageName: String 

    constructor(value: number, imageName:String) {
        if (value < 0 || value > 21) {
            this.value = -1
        }
        else{
            this.value = value
        }
        this.imageName = imageName
    }

    public getValue() : number {
        return this.value
    }

    public toString() : string {
        return String(this.value)
    }

    public getImageName() : String {
        return this.imageName
    }
}