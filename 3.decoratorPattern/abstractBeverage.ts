import { Size } from "./enums";

export abstract class Beverage {

    public _description: string = "Unkown Beverage";
    public _size: Size = Size.TALL;

    public getDescription(): string {
        return this._description;
    }

    public abstract cost(): number;

    public setSize(size: Size): void {
        this._size = size;
    }

    public getSize(): Size {
        return this._size;
    }

}