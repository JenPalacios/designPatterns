import { Observer } from "../interface/observer";
import { DisplayElement } from "../interface/displayElement";
import { WeatherData } from "../weatherData";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private _temperature: number;
    private _humidity: number;
    private _weatherData: WeatherData;

    constructor(
        weatherData: WeatherData
    ) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number) {
        this._temperature = temperature;
        this._humidity = humidity;
        this.display();
    }

    public display() {
        console.log(`Current conditions: ${this._temperature} C degrees and ${this._humidity} % humidity`);
    }
}