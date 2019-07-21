import { FlyBehaviour } from "../interface/flyBehaviour";

export class FlyRocketPowered implements FlyBehaviour {
    
    public fly(): void {
        console.log('I am flying with a rocket!');
    }
}