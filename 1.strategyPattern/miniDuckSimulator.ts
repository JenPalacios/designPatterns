/**
 * in the root of the project run: ts-node 1.strategyPattern/miniDuckSimulator.ts
 */
import { Duck } from "./Duck";
import { MallardDuck } from "./mallardDuck";

class MiniDuckSimulator {

    public init() {
        const mallardDuck: Duck = new MallardDuck();

        mallardDuck.performQuack();
        mallardDuck.performFly();
    }
}

const miniDuckSimulator = new MiniDuckSimulator();
miniDuckSimulator.init();