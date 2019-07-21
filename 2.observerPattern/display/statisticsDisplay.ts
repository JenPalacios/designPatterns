import { Observer } from "../interface/observer";
import { DisplayElement } from "../interface/displayElement";
import { WeatherData } from "../weatherData";

export class StatisticsDisplay implements Observer, DisplayElement {

    private _maxTemp: number = 0;
    private _minTemp: number = 200
    private _tempSum: number = 0;
    private _numReadings: number = 0;
    private _weatherData: WeatherData;

    constructor(
        weatherData: WeatherData
    ) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number): void {
        this._tempSum += temperature;
        this._numReadings++;

        if (temperature > this._maxTemp) {
            this._maxTemp = temperature;
        }

        if (temperature < this._minTemp) {
            this._minTemp = temperature;
        }

        this.display();
    }

    public display() {
        console.log(`Avg/Max/Min temperature = ${this._tempSum / this._numReadings} / ${this._maxTemp} / ${this._minTemp}`);
    }
}