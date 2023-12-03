/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { WeatherModule } from './weatherModule.js'
import { WeatherDataFetcher } from './weatherDataFetcher.js'

/**
 * The main function of the application.
 *
 * @param {string} city The input city to fetch.
 * @param {string} country The input country to fetch.
 * @returns {string} Return the average temperature, temperature to celsius ,humidity, and wind speed.
 */
export const main = async (city, country) => {
  try {
    const apiKey = '677d6e7a6780b8cf980ba095587ac1d3'
    const weatherFetcher = new WeatherDataFetcher(apiKey)

    const coordinates = await weatherFetcher.getCoordinates(city, country)
    const weatherData = await weatherFetcher.fetchWeatherData(coordinates.lat, coordinates.lon)

    // Save corresponding to an array and sent it to corresponding function.
    const weatherDataList = weatherData.list
    const temperaturesInKelvin = weatherDataList.map(item => item.main.temp)
    const humidities = weatherDataList.map(item => item.main.humidity)
    const windSpeeds = weatherDataList.map(item => item.wind.speed)
    const rainfall = weatherDataList.map(item => item.rain && item.rain['3h'] ? item.rain['3h'] : 0) // Check if item.rain exists and has a property '3h'

    const weatherModule = new WeatherModule(temperaturesInKelvin, humidities, windSpeeds, rainfall)

    const averageTemperature = await weatherModule.countAverageTemperature(temperaturesInKelvin)

    const averageTemperatureInCelsius = await weatherModule.convertKelvinToCelsius(averageTemperature)

    const averageHumidity = await weatherModule.countAverageHumidity(humidities)

    const averageWindSpeed = await weatherModule.countAverageWindSpeed(windSpeeds)

    const maxRainfall = await weatherModule.countMaximumRainfall(rainfall)

    return {
      averageTemperature,
      averageTemperatureInCelsius,
      averageHumidity,
      averageWindSpeed,
      maxRainfall
    }
  } catch (error) {
    console.error(error.message)
  }
}

main()
