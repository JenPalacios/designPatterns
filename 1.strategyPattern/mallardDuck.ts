import { Duck } from "./Duck";
import { QuackBehaviour } from "./interface/quackBehaviour";
import { Quack } from "./quackBehaviour/quack";
import { FlyBehaviour } from "./interface/flyBehaviour";
import { FlyWithWings } from "./flyBehaviour/flyWithWings";

export class MallardDuck extends Duck {

    public _quackBehaviour: QuackBehaviour = new Quack();
    public _flyBehaviour: FlyBehaviour = new FlyWithWings();

    public display(): void {
        console.log("I am a real Mallard duck");
    }

}