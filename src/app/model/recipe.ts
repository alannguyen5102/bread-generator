import { Ingredient } from './ingredient';

export class Recipe {
    public _ingredientList: Array<Ingredient>;
    public _directions: string;
    constructor(ingredientList: Array<Ingredient>, directions: string) {
        this._ingredientList = ingredientList;
        this._directions = directions;
    }
}
