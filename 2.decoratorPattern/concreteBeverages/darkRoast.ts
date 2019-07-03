import { Beverage } from "../abstractBeverage";

export class DarkRoast extends Beverage {

    constructor() {
        super();
        this._description = "Dark Roast Coffee";
    }

    public cost(): number {
        return 0.99;
    }
}