import { FlyBehaviour } from "../interface/flyBehaviour";

export class FlyWithWings implements FlyBehaviour {

    public fly(): void {
        console.log("I am flying!");
    }
}