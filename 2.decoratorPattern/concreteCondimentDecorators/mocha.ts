import { CondimentDecorator } from "../abstractCondimentDecorator";
import { Beverage } from "../abstractBeverage";

export class Mocha extends CondimentDecorator {

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    public getDescription(): string {
        return `${this._beverage.getDescription()}, Mocha`;
    }

    public cost(): number {
        const beverageCost = this._beverage.cost();
        const mochaCost = 0.20;

        return beverageCost + mochaCost;
    }
}