/**
 * in the root of the project run: ts-node 1.strategyPattern/miniDuckSimulator.ts
 */
import { Duck } from "./Duck";
import { MallardDuck } from "./mallardDuck";
import { ModelDuck } from "./modelDuck";
import { FlyRocketPowered } from "./flyBehaviour/flyRocketPowered";

class MiniDuckSimulator {

    public init() {
        const mallardDuck: Duck = new MallardDuck();

        mallardDuck.performQuack();
        mallardDuck.performFly();

        const model: Duck = new ModelDuck();
        model.performFly();
        model.setFlyBehaviour(new FlyRocketPowered());
        model.performFly();
    }
}

const miniDuckSimulator = new MiniDuckSimulator();
miniDuckSimulator.init();