import { QuackBehaviour } from "../interface/quackBehaviour";

export class MuteQuack implements QuackBehaviour {

    public quack(): void {
        console.log("<<silence>>");
    }
}