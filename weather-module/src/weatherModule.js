/**
 * Repersent a weather module class.
 */
export class WeatherModule {
  /**
   * Represent a weatherModule constructor.
   *
   * @param {Array} temperaturesInKelvin The input temperatures data.
   * @param {Array} humidities The input humidities data.
   * @param {Array} windSpeeds The input wind speeds data.
   * @param {Array} rainfall The input rainfall data.
   */
  constructor (temperaturesInKelvin, humidities, windSpeeds, rainfall) {
    this.temperaturesInKelvin = temperaturesInKelvin
    this.humidities = humidities
    this.windSpeeds = windSpeeds
    this.rainfall = rainfall
  }

  /**
   * Calculate average temperaturesInKelvin for the next 40 days.
   *
   * @returns {number} 40 days average temperatures in celsius.
   */
  countAverageTemperature () {
    console.log('temperaturesInKelvin:', this.temperaturesInKelvin)
    // const temperatureStrings = this.temperaturesInKelvin.map(temp => `${temp}K`).join('. ')
    // console.log('The temperature in kelvin for the next 40 days are: ' + temperatureStrings) // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    // Convert each temperature from Kelvin to Celsius before summing
    const temperaturesInKelvinSum = this.temperaturesInKelvin.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    console.log('type:' + typeof temperaturesInKelvinSum)
    const averageTemperatureKelvin = temperaturesInKelvinSum / this.temperaturesInKelvin.length
    console.log('length: ' + this.temperaturesInKelvin.length)
    const averageTemperatureCelsius = Number(this.convertKelvinToCelsius(averageTemperatureKelvin).toFixed(1))
    console.log('type:' + typeof averageTemperatureCelsius)
    console.log(averageTemperatureCelsius)

    // Calculation results are kept to one decimal place.
    return averageTemperatureCelsius + '°C'
  }

  /**
   * Calculate the average humidity for the next 40 days.
   *
   * @returns {number} 40 days average humidity.
   */
  countAverageHumidity () {
    const humiditieStrings = this.humidities.map(temp => `${temp}%`).join('. ')
    console.log('The humidities for the next 40 days are: ' + humiditieStrings)

    const humiditySum = this.humidities.reduce((acc, curr) => acc + curr, 0)
    const averageHumidity = humiditySum / this.humidities.length

    // Calculation results are kept to one decimal place.
    return Number(averageHumidity.toFixed(1)) + '%'
  }

  /**
   * Calculate the average wind speed for the next 40 days.
   *
   * @returns {string} 40 days average wind speed.
   */
  countAverageWindSpeed () {
    const windStrings = this.windSpeeds.map(temp => `${temp}m/s`).join('. ')
    console.log('The wind speed for the next 40 days are: ' + windStrings)

    const windSpeedSum = this.windSpeeds.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageWindSpeed = windSpeedSum / this.windSpeeds.length

    // Calculation results are kept to one decimal place.
    return Number(averageWindSpeed.toFixed(1)) + 'm/s'
  }

  /**
   * Convert temperature in Kelvin to Celsius.
   *
   * @param {number} inputTemperatureKelvin input temperature in Kelvin.
   * @returns {string} The temperatures in celsius.
   */
  convertKelvinToCelsius (inputTemperatureKelvin) {
    return inputTemperatureKelvin - 273.15 // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
  }

  /**
   * Calculate the maximum rainfall for the next 40 days.
   *
   * @returns {string} Maximum rainfall in mm.
   */
  countMaximumRainfall () {
    console.log('Received rainfall data:', this.rainfall)
    // Convert to numbers and calculate maximum
    const rainfallAmounts = this.rainfall.map(rain => Number(rain))
    const maxRainfall = Math.max(...rainfallAmounts)

    // Log the calculated maximum rainfall
    console.log('Maximum rainfall calculated:', maxRainfall)
    return maxRainfall + 'mm' || 0
  }
}
