import { Observer } from "../interfaces/observer";
import { DisplayElement } from "../interfaces/displayElement";
import { Subject } from "../interfaces/subject";

export class StatisticsDisplay implements Observer, DisplayElement {
    private _weatherData: Subject;
    private _temperature: number;
    private _humidity: number;
    private _pressure: number;

    constructor(
        weatherData: Subject
    ) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number) {
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
        this.display();
    }

    public display() {
        console.log(`Statistics: ${this._temperature} C degrees, ${this._humidity} % humidity and ${this._pressure} the pressure`);
    }
}