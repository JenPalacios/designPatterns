import { Beverage } from "./abstractBeverage";
import { Espresso } from "./concreteBeverages/espresso";
import { DarkRoast } from "./concreteBeverages/darkRoast";
import { Mocha } from "./concreteCondimentDecorators/mocha";
import { Whip } from "./concreteCondimentDecorators/whip";

export class StarbuzzCoffee {

    public init() {

        const beverage: Beverage = new Espresso();

        console.log(`${beverage.getDescription()} - $${beverage.cost()}`);

        let beverageWithCondiments: Beverage = new DarkRoast();
        beverageWithCondiments = new Mocha(beverageWithCondiments);
        beverageWithCondiments = new Mocha(beverageWithCondiments);
        beverageWithCondiments = new Whip(beverageWithCondiments);

        console.log(`${beverageWithCondiments.getDescription()} - $ ${beverageWithCondiments.cost()}`);

    }
}

const starbuzzCoffee = new StarbuzzCoffee();
starbuzzCoffee.init();