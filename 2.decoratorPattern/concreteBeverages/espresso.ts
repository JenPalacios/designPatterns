import { Beverage } from "../abstractBeverage";

export class Espresso extends Beverage {

    constructor() {
        super();
        this._description = "Espresso";
    }

    public cost(): number {
        return 1.99;
    }

}