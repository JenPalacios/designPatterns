/**
 * in the root of the project run: ts-node observerPattern/weatherStation.ts
 */
import { WeatherData } from "./weatherData";
import { CurrentConditionsDisplay } from "./displays/currentConditionsDisplay";
import { StatisticsDisplay } from "./displays/statisticsDisplay";
import { ForecastDisplay } from "./displays/forecastDisplay";

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