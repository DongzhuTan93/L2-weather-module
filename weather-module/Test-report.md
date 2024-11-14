# Test Report for "weather-module" 

The "Weather Module" has been tested using automated testing to verify that its functions produce the expected results. Each function was executed with predefined input data, and the outputs were automatically compared to the expected values. The tests covered calculations for average temperature, humidity calculations, wind speed, and maximum rainfall detection.

## Test Execution
Command used: npm run test:module
The tests were executed using the above command, which runs all defined test cases for the module.

## Automated Test Cases
### Test Case ID: TC1
**Title**: Verify Average Temperature Calculation

**Preconditions**: The `WeatherModule` class is properly imported and instantiated with a set of temperature data in Kelvin.

**Input Data**: 
- temperaturesInKelvin: `[173.15, 273.15, 400.15, 200]`

**Steps**:
1. Call the `countAverageTemperature` and `averageTemperatureInCelsiusmethod` method of the `WeatherModule` instance with the input data.
2. Observe the returned value.

**Expected Result**:
- The method should return the average temperature in Kelvin, formatted to one decimal place.

**Actual Result**: The average temperature in kelvin is around 261.6 K which is (261.6 - 273.15) = -11.5°C in Celsius.

**Status**: [Pass]

### Test Case ID: TC2
**Title**: Verify Average Humidity Calculation

**Preconditions**: The `WeatherModule` class is properly imported and instantiated with a set of humidity data.

**Input Data**: 
- humidities: `[4, 6, 2, 8, 7]`

**Steps**:
1. Call the `averageHumidity` method of the `WeatherModule` instance with the input data.
2. Observe the returned value.

**Expected Result**:
- The method should return the average humidity, formatted to one decimal place.

**Actual Result**: The average humidity is: 4 + 6 + 2 + 8 + 7 = 27, 27/5 = 5.4 %.

**Status**: [Pass]

### Test Case ID: TC3
**Title**: Verify Wind Speed Calculation

**Preconditions**: The `WeatherModule` class is properly imported and instantiated with a set of wind speed data.

**Input Data**: 
- windSpeeds: `[1, 5, 2, 3]`

**Steps**:
1. Call the `averageWindSpeed` method of the `WeatherModule` instance with the input data.
2. Observe the returned value.

**Expected Result**:
- The method should return the average windSpeed, formatted to one decimal place. The expected result is 2.8 m/s..

**Actual Result**: The average wind speed is: 1 + 5 + 2 + 3 = 11, 11/4 = 2.8 m/s.

**Status**: [Pass]

### Test Case ID: TC4
**Title**: Verify Rainfall Calculation

**Preconditions**: The `WeatherModule` class is properly imported and instantiated with a set of rainfall data.

**Input Data**: 
- rainfall: `[2, 5, 7, 9, 2, 4]`

**Steps**:
1. Call the `maxRainfall` method of the `WeatherModule` instance with the input data.
2. Observe the returned value.

**Expected Result**:
- The method should return the maximum rainfall amount. The expected result is 9 mm.

**Actual Result**: The max rainfall was calculated as 9 mm.

**Status**: [Pass]


## Test Results
| Test Case ID | Description                    | Result   |
|--------------|--------------------------------|----------|
| TC1          | Average Temperature Calculation| Pass |
| TC2          | Average Humidity Calculation   | Pass |
| TC3          | Wind Speed Calculation         | Pass |
| TC4          | Max Rainfall Calculation           | Pass |

## Test Execution Summary
The module was tested with automated test cases, and all tests passed successfully. The results confirm that the module’s functions are reliable and produce correct outputs.