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
 * @returns {string} TReturn the average temperature, humidity, wind speed, temperature to celsius.
 */
export const main = async (city, country) => {
  try {
    const apiKey = '677d6e7a6780b8cf980ba095587ac1d3'
    const weatherFetcher = new WeatherDataFetcher(apiKey)

    const coordinates = await weatherFetcher.getCoordinates(city, country)
    const weatherData = await weatherFetcher.fetchWeatherData(coordinates.lat, coordinates.lon)
    console.log(weatherData)

    // Save corresponding to an array and sent it to corresponding function.
    const weatherDataList = weatherData.list
    const temperaturesInKelvin = weatherDataList.map(item => item.main.temp)
    const humidities = weatherDataList.map(item => item.main.humidity)
    const windSpeeds = weatherDataList.map(item => item.wind.speed)
    const rainfall = weatherDataList.map(item => item.rain && item.rain['3h'] ? item.rain['3h'] : 0) // Check if item.rain exists and has a property '3h'

    const weatherModule = new WeatherModule(temperaturesInKelvin, humidities, windSpeeds, rainfall)

    const averageTemperatureInCelsius = await weatherModule.countAverageTemperature(temperaturesInKelvin)
    console.log('The average temperature in kelvin for the next 40 days is about: ' + averageTemperatureInCelsius)

    const averageHumidity = await weatherModule.countAverageHumidity(humidities)
    console.log('The average humidity for the next 40 days is about is about: ' + averageHumidity)

    const averageWindSpeed = await weatherModule.countAverageWindSpeed(windSpeeds)
    console.log('The average wind speed for the next 40 days is about is about is about: ' + averageWindSpeed)

    const maxRainfall = await weatherModule.countMaximumRainfall(rainfall)
    console.log('The maximum rainfall for the next 40 days is about: ' + maxRainfall + 'mm')

    return {
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
