import { CondimentDecorator } from "../abstractCondimentDecorator";
import { Beverage } from "../abstractBeverage";

export class Soy extends CondimentDecorator {
    
    private _beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    public getDescription(): string {
        return `${this._beverage.getDescription()}, with soy`;
    }

    public cost() {
        const beverageCost = this._beverage.cost();
        const soyCost = 0.15;

        return beverageCost + soyCost;
    }
}