export type HourlyWeather = {
  id?: number
  time: string
  condition: string
  temp: string
}

export type weatherDetails = {
  uxi: number
  humidity: number
  wind: number
  sunrise: number
  sunset: number
  timezone: string
}

export type weather = {
  description: string
  icon: string
  id: number
  main: string
}

export type currentWeather = {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: any
  uvi: number
  visibility: number
  weather: weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

type feelsLike = {
  day: number
  eve: number
  morn: number
  night: number
}

export type temps = {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export type weatherObject = {
  clouds: number
  dew_point: number
  dt: number
  feels_like: feelsLike
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  summary: string
  sunrise: number
  sunset: number
  temp: temps
  uvi: number
  weather: weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export type weatherData = {
  city: string
  data: {
    current: {
      clouds: number
      dew_point: number
      dt: number
      feels_like: number
      humidity: number
      pressure: number
      sunrise: number
      sunset: number
      temp: number
      uvi: number
      visibility: number
      weather: any
      wind_deg: number
      wind_gust: number
      wind_speed: number
    }
    daily: weatherObject[]
    hourly: weatherObject[]
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
  }
  state: string
}

export type favoriteWeather = {
  info: weatherInfo
  temp: number
}

export type weatherInfo = {
  icon: string
  id: number
}
