export abstract class Beverage {
    
    public _description: string = "Unkown Beverage";

    public getDescription(): string {
        return this._description;
    }

    public abstract cost(): number;

}