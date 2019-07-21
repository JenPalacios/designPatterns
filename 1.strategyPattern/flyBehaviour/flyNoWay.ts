import { FlyBehaviour } from "../interface/flyBehaviour";

export class FlyNoWay implements FlyBehaviour {

    public fly(): void {
        console.log("I cannot fly!");
    }
}