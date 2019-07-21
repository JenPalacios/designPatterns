import { FlyBehaviour } from "./interface/flyBehaviour";
import { QuackBehaviour } from "./interface/quackBehaviour";

export abstract class Duck {

    public _flyBehaviour: FlyBehaviour
    public _quackBehaviour: QuackBehaviour;

    public abstract display(): void;

    public performFly() : void {
        this._flyBehaviour.fly();
    }

    public performQuack(): void {
        this._quackBehaviour.quack();
    }

    public swim(): void {
        console.log("All ducks float, even decoys!");
    }

    public setFlyBehaviour(flyBehaviour: FlyBehaviour): void {
        this._flyBehaviour = flyBehaviour;
    }

    public setQuackBehaviour(quackBehaviour: QuackBehaviour): void {
        this._quackBehaviour = quackBehaviour;
    }


}