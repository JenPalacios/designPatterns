import { QuackBehaviour } from "../interface/quackBehaviour";

export class Squack implements QuackBehaviour {

    public quack(): void {
        console.log("Squeak");
    }
}