import { Beverage } from "./abstractBeverage";

export abstract class CondimentDecorator extends Beverage {

    public abstract getDescription(): string;
}