/**
 * in the root of the project run: ts-node 2.observerPattern/weatherStation.ts
 */
import { WeatherData } from "./weatherData";
import { CurrentConditionsDisplay } from "./display/currentConditionsDisplay";
import { StatisticsDisplay } from "./display/statisticsDisplay";
import { ForecastDisplay } from "./display/forecastDisplay";

export class WeatherStation {
 
    public init() {
        const weatherData: WeatherData = new WeatherData();

        new CurrentConditionsDisplay(weatherData);
        new StatisticsDisplay(weatherData);
        new ForecastDisplay(weatherData);

        weatherData.setMeasurements(25, 65, 30);
        weatherData.setMeasurements(10, 85, 10);
    }

}

const weatherStation = new WeatherStation();
weatherStation.init();