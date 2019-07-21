import { Duck } from "./Duck";
import { FlyNoWay } from "./flyBehaviour/flyNoWay";
import { Quack } from "./quackBehaviour/quack";

export class ModelDuck extends Duck {
    
    constructor() {
        super();

        this._flyBehaviour = new FlyNoWay();
        this._quackBehaviour = new Quack; 
    }

    public display(): void {
        console.log(' I am a model duck');
    }
}