export class Ingredient {
    _name: string;
    _amount: number;
    _unit: string;

    constructor(public name: string,
                public amount: number,
                public unit: string) {
                    this._name = name;
                    this._amount = amount;
                    this._unit = unit;
                }
}
