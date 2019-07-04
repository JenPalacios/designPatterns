import { Beverage } from "../abstractBeverage";
import { CondimentDecorator } from "../abstractCondimentDecorator";

export class SteamedMild extends CondimentDecorator {

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    public getDescription(): string {
        return `${this._beverage.getDescription}, with steamed milk`;
    }

    public cost() {
        const beverageCost = this._beverage.cost();
        const steamedMilkCost = 0.10;

        return beverageCost + steamedMilkCost;
    }
}