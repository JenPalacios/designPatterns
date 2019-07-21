import { QuackBehaviour } from "../interface/quackBehaviour";

export class Quack implements QuackBehaviour {
    public quack(): void {
        console.log("Quack!");
    }
}