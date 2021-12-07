class Crab{
    private _horizontalPosition:number;
    constructor(horizontalPosition:number) {
        this._horizontalPosition = horizontalPosition;
    }

    get horizontalPosition(): number {
        return this._horizontalPosition;
    }

    set horizontalPosition(value: number) {
        this._horizontalPosition = value;
    }
}

export default Crab