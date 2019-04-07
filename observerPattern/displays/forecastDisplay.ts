import { Observer } from "../interfaces/observer";
import { DisplayElement } from "../interfaces/displayElement";
import { WeatherData } from "../weatherData";

export class ForecastDisplay implements Observer, DisplayElement {

    private _currentPressure: number = 29.92;
    private _lastPressure: number;
    private _weatherData: WeatherData;

    constructor(
        weatherData: WeatherData
    ) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number) {
        this._lastPressure = this._currentPressure;
        this._currentPressure = pressure;
        this.display();
    }

    public display() {
        console.log("Forecast:");
        if (this._currentPressure > this._lastPressure) {
            console.log("Improving weather on the way!");
        } else if (this._currentPressure === this._lastPressure) {
            console.log("More of the same");
        } else if (this._currentPressure < this._lastPressure) {
            console.log("Watch out for cooler, rainy weather!");
        }
    }
}