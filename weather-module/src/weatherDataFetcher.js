/**
 * Fetch 5 days forecasts weather data.
 */
export class WeatherDataFetcher {
  /**
   * Represent a WeatherDataFetcher constructor.
   *
   * @param {string} apiKey My api key to feth data.
   */
  constructor (apiKey) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.openweathermap.org/' // Set the base URL for the API
  }

  /**
   * Get city's coordinate.
   *
   * @param {string} country This is the designated country.
   * @param {string} city The weather of a certain city in this country.
   * @returns {object} The city's coordinate.
   */
  async getCoordinates (country, city) {
    try {
      const response = await fetch(`${this.baseUrl}/geo/1.0/direct?q=${city},${country}&limit=1&appid=${this.apiKey}`)
      if (!response.ok) {
        throw new Error(`Error fetching coordinates: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      if (data.length === 0) {
        throw new Error('City not found or invalid country code')
      }
      return data[0]
    } catch (error) {
      // Log and handle the error
      console.error('Error getting coordinates:', error)
      throw error
    }
  }

  /**
   * Represent citys lat, lon.
   *
   * @param {string} lat The citys lat.
   * @param {string} lon The citys lon.
   * @returns {object} The weather data.
   */
  async fetchWeatherData (lat, lon) {
    try {
      const response = await fetch(`${this.baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  }
}
