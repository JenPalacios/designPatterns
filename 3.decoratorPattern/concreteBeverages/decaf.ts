import { Beverage } from "../abstractBeverage";

export class Decaf extends Beverage {

    constructor() {
        super();
        this._description = "Decaf Coffee";
    }

    public cost(): number {
        return 1.05;
    }
}