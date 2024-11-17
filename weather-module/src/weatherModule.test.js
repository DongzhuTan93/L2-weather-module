/**
 * Test suite for WeatherModule.(Motify the testing method base to the feedback from Test Report for "weather-module".)
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { WeatherModule } from './weatherModule.js'

/**
 * Test function that runs all weather module tests with some small data.
 */
const runWeatherModuleTests = () => {
  const testData = {
    temperaturesInKelvin: [173.15, 273.15, 400.15, 200],
    humidities: [4, 6, 2, 8, 7],
    windSpeeds: [1, 5, 2, 3],
    rainfall: [2, 5, 7, 9, 2, 4]
  }

  const weatherModule = new WeatherModule(
    testData.temperaturesInKelvin,
    testData.humidities,
    testData.windSpeeds,
    testData.rainfall
  )

  /**
   * Test average temperature calculation.
   */
  const testAverageTemperatureCalculation = () => {
    const expectedKelvin = 261.6
    const actualKelvin = Number(weatherModule.countAverageTemperature().toFixed(1))   // Keep one round to one decimal place, convert string back to number after toFixed().
    const actualCelsius = Number(weatherModule.convertKelvinToCelsius(actualKelvin))
    const expectedCelsius = -11.5

    if (Math.abs(actualKelvin - expectedKelvin) < 0.1 && Math.abs(actualCelsius - expectedCelsius) < 0.1) {
      console.log('✅ TC1 - Temperature Calculation: PASSED')
      console.log(`   Expected: ${expectedKelvin}K (${expectedCelsius}°C)`)
      console.log(`   Actual: ${actualKelvin}K (${actualCelsius}°C)`)
    } else {
      console.log('❌ TC1 - Temperature Calculation: FAILED')
      console.log(`   Expected: ${expectedKelvin}K (${expectedCelsius}°C)`)
      console.log(`   Actual: ${actualKelvin}K (${actualCelsius}°C)`)
    }
  }

  /**
   * Test average humidity calculation.
   */
  const testAverageHumidityCalculation = () => {
    const expected = 5.4
    const actual = weatherModule.countAverageHumidity()

    if (actual === expected) {
      console.log('✅ TC2 - Humidity Calculation: PASSED')
      console.log(`   Expected: ${expected}%`)
      console.log(`   Actual: ${actual}%`)
    } else {
      console.log('❌ TC2 - Humidity Calculation: FAILED')
      console.log(`   Expected: ${expected}%`)
      console.log(`   Actual: ${actual}%`)
    }
  }

  /**
   * Test wind speed calculation.
   */
  const testWindSpeedCalculation = () => {
    const expected = 2.8
    const actual = weatherModule.countAverageWindSpeed()

    if (actual === expected) {
      console.log('✅ TC3 - Wind Speed Calculation: PASSED')
      console.log(`   Expected: ${expected}m/s`)
      console.log(`   Actual: ${actual}m/s`)
    } else {
      console.log('❌ TC3 - Wind Speed Calculation: FAILED')
      console.log(`   Expected: ${expected}m/s`)
      console.log(`   Actual: ${actual}m/s`)
    }
  }

  /**
   * Test maximum rainfall calculation.
   */
  const testMaxRainfallCalculation = () => {
    const expected = 9
    const actual = weatherModule.countMaximumRainfall()

    if (actual === expected) {
      console.log('✅ TC4 - Maximum Rainfall: PASSED')
      console.log(`   Expected: ${expected}mm`)
      console.log(`   Actual: ${actual}mm`)
    } else {
      console.log('❌ TC4 - Maximum Rainfall: FAILED')
      console.log(`   Expected: ${expected}mm`)
      console.log(`   Actual: ${actual}mm`)
    }
  }

  console.log('\n----------------------- WeatherModule Test Results -----------------------\n')
  testAverageTemperature()
  testAverageHumidity()
  testWindSpeed()
  testMaxRainfall()
  console.log('\n-----------------------')
}

runWeatherModuleTests()
