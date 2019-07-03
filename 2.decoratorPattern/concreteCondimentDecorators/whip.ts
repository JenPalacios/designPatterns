import { CondimentDecorator } from "../abstractCondimentDecorator";
import { Beverage } from "../abstractBeverage";

export class Whip extends CondimentDecorator {

    private _beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    public getDescription(): string {
        return `${this._beverage.getDescription()}, with whip`;
    }

    public cost() {
        const beverageCost = this._beverage.cost();
        const whipCost = 0.10;

        return beverageCost + whipCost;
    }
}