import { fetchWeatherApi } from 'openmeteo'

import WMO_WEATHER_CODES from '@constants/weather'

import { LatLng } from '@utils/getCurrentGeolocation'

export interface Weather {
  rain: number
  snowfall: number
  humidity: number
  temperature: number
  weatherCode: number
  weatherName: string
}

async function getCurrentWeather(geolocation: LatLng): Promise<Weather> {
  const params = {
    latitude: geolocation.lat,
    longitude: geolocation.lng,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'rain',
      'showers',
      'snowfall',
      'weather_code',
      'is_day',
    ],
  }

  const url = 'https://api.open-meteo.com/v1/forecast'
  const [response] = await fetchWeatherApi(url, params)
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const current = response.current()!

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      rain: current.variables(2)!.value(),
      showers: current.variables(3)!.value(),
      snowfall: current.variables(4)!.value(),
      weatherCode: current.variables(5)!.value(),
      isDay: current.variables(6)!.value(),
    },
  }

  return {
    rain: weatherData.current.rain,
    snowfall: weatherData.current.snowfall,
    humidity: weatherData.current.relativeHumidity2m,
    temperature: weatherData.current.temperature2m,
    weatherCode: weatherData.current.weatherCode,
    weatherName:
      WMO_WEATHER_CODES[weatherData.current.weatherCode][
        weatherData.current.isDay ? 'day' : 'night'
      ],
  }
}

export default getCurrentWeather
