import { Beverage } from "./abstractBeverage";

export abstract class CondimentDecorator extends Beverage {
    public _beverage: Beverage;

    public abstract getDescription(): string;

    public getSize(): any {
        return this._beverage.getSize();
    }
}