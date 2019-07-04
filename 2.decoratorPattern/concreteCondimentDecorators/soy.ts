import { CondimentDecorator } from "../abstractCondimentDecorator";
import { Beverage } from "../abstractBeverage";
import { Size } from "../enums";

export class Soy extends CondimentDecorator {
    
    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    public getDescription(): string {
        return `${this._beverage.getDescription()}, with soy`;
    }

    public cost() {
        const beverageCost = this._beverage.cost();

        let soyCost = 0;

        if (Size.TALL === this._beverage.getSize()) {
            soyCost = 0.10;
        } else if (Size.GRANDE === this._beverage.getSize()) {
            console.log("I AM GRANDE!");
            soyCost = 0.15;
        } else if (Size.VENTI === this._beverage.getSize() ) {
            soyCost = 0.20;
        }

        return beverageCost + soyCost;
    }
}