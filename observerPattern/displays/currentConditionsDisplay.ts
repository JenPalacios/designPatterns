import { Observer } from "../interfaces/observer";
import { DisplayElement } from "../interfaces/displayElement";
import { Subject } from "../interfaces/subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private _temperature: number;
    private _humidity: number;
    private _weatherData: Subject;

    constructor(
        weatherData: Subject
    ) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number) {
        this._temperature = temperature;
        this._humidity = humidity;
        this.display();
    }

    public display() {
        console.log(`Current conditions: ${this._temperature} C degrees and ${this._humidity} % humidity`);
    }
}