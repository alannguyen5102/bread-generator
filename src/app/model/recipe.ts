import { Ingredient } from './ingredient';

export class Recipe {
    public _ingredientList: Array<Ingredient>;
    public _author: string;
    constructor(ingredientList: Array<Ingredient>, author: string) {
        this._ingredientList = ingredientList;
        this._author = author;
    }
}
