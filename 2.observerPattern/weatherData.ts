import { Subject } from "./interface/subject";
import { Observer } from "./interface/observer";

export class WeatherData implements Subject {

    private _temperature: number;
    private _humidity: number;
    private _pressure: number;
    private _observers: Array<Observer>;

    constructor() {
        this._observers = new Array;
    }
    
    public registerObserver(observer: Observer) {
        this._observers.push(observer);
    }

    public removeObserver(observer: Observer) {
        const index = this._observers.indexOf(observer);

        if (-1 < index) {
            this._observers.splice(index, 1);
        }
    }

    public notifyObservers() {
        for (let observer of this._observers) {
            observer.update(this._temperature, this._humidity, this._pressure);
        }
    }

    public measurementsChanged() {
        this.notifyObservers();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number) {
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
        this.measurementsChanged();
    }
}