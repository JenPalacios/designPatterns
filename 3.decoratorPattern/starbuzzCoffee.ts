/**
 * in the root of the project run: ts-node 3.decoratorPattern/starbuzzCoffee.ts
 */
import { Beverage } from "./abstractBeverage";
import { Espresso } from "./concreteBeverages/espresso";
import { DarkRoast } from "./concreteBeverages/darkRoast";
import { HouseBlend } from "./concreteBeverages/houseBlend";
import { Decaf } from "./concreteBeverages/decaf";

import { Mocha } from "./concreteCondimentDecorators/mocha";
import { Whip } from "./concreteCondimentDecorators/whip";
import { Soy } from "./concreteCondimentDecorators/soy";
import { Size } from "./enums";

export class StarbuzzCoffee {

    public init() {

        const beverage: Beverage = new Espresso();
        console.log(`${beverage.getDescription()} - $${beverage.cost()}`);

        let beverageWithCondiments: Beverage = new DarkRoast();
        beverageWithCondiments = new Mocha(beverageWithCondiments);
        beverageWithCondiments = new Mocha(beverageWithCondiments);
        beverageWithCondiments = new Whip(beverageWithCondiments);
        console.log(`${beverageWithCondiments.getDescription()} - $ ${beverageWithCondiments.cost()}`);

        let beverageWithOtherCondiments: Beverage = new HouseBlend();
        beverageWithOtherCondiments = new Soy(beverageWithOtherCondiments);
        beverageWithOtherCondiments = new Mocha(beverageWithOtherCondiments);
        beverageWithOtherCondiments = new Whip(beverageWithOtherCondiments);
        console.log(`${beverageWithOtherCondiments.getDescription()} - $ ${beverageWithOtherCondiments.cost()}`);

        let beverageWithSize: Beverage = new Decaf();
        beverageWithSize.setSize(Size.GRANDE);
        beverageWithSize = new Soy(beverageWithSize);
        console.log(`${beverageWithSize.getDescription()} $ ${beverageWithSize.cost()}`);

    }
}

const starbuzzCoffee = new StarbuzzCoffee();
starbuzzCoffee.init();