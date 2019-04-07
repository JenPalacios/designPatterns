import { Observer } from "../interfaces/observer";
import { DisplayElement } from "../interfaces/displayElement";
import { Subject } from "../interfaces/subject";

export class ForecastDisplay implements Observer, DisplayElement {

    private _weatherData: Subject;
    private _temperature: number;
    private _humidity: number;

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
        console.log(`The forecast is: ${this._temperature} C degrees and ${this._humidity} % of humidity.`);
    }
}