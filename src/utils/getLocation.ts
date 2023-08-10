import { StateName } from '../types/location'
import Geolocation from '@react-native-community/geolocation'
import { checkForLocation } from './permissions'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateStoredLocations } from './saveLocation'
import { Alert } from 'react-native'

const MAP_API_KEY = 'AIzaSyCCkQl06VrNa0si7GS3T3PMkdXcNTGdeQc'
const API_KEY = '4f7c37788aac9350622549efdb76bdd5'

type StateAbbreviations = {
  [K in StateName]?: string
}

export const getStateAbbreviation = (stateName: StateName): string => {
  return stateAbbreviations[stateName] || stateName
}

const stateAbbreviations: StateAbbreviations = {
  Alabama: 'AL',
  Alaska: 'AK',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Connecticut: 'CT',
  Delaware: 'DE',
  Florida: 'FL',
  Georgia: 'GA',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Pennsylvania: 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY'
}

export const getMyCurrentLocation = async () => {
  try {
    const result = await checkForLocation()

    if (!result) return null

    const info = await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject)
    })

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${info.coords.latitude},${info.coords.longitude}&key=${MAP_API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch location data from Google Maps API.')
    }

    const data = await response.json()

    const city = data.results[0].address_components.find((address: any) =>
      address.types.includes('locality')
    )

    const state = data.results[0].address_components.find((address: any) =>
      address.types.includes('administrative_area_level_1')
    )

    const location = {
      city: city.long_name,
      state: state.long_name
    }

    return location
  } catch (error) {
    console.error('Error getting current location:', error)
    Alert.alert('Error retrieving weather')
    return null
  }
}

export const fetchCityFromZip = async (zipCode: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${API_KEY}`

  try {
    const response = await axios.get(url)
    const weatherResponse = await fetchWeatherData(response.data.name)
    return weatherResponse
  } catch (error) {
    console.error('Error fetching city from zip:', error)
    Alert.alert('Error retrieving weather from ', zipCode)
    return null
  }
}

export const fetchWeatherData = async (input: string) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    input
  )}&limit=1&appid=${API_KEY}`

  try {
    const response = await axios.get(url)

    const { lat, lon, name, state } = response.data[0]

    const data = await getDatafor7days(lat, lon)

    const favData = await AsyncStorage.getItem('favoriteStorage')
    let favorites = []

    if (favData) {
      favorites = JSON.parse(favData)
    }

    const alreadyExists = favorites?.find((f: any) => f.city === name)

    if (!alreadyExists) {
      await updateStoredLocations('recentStorage', name, state)
    }

    return {
      city: name,
      state,
      data
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
    Alert.alert('Error retrieving weather from ', input)
    return null
  }
}

const getDatafor7days = async (lat: string, lon: string) => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=imperial&appid=${API_KEY}`
  try {
    let res = await fetch(url)
    let data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentWeather = async (city: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

  const response = await fetch(url)

  if (response.ok) {
    const data = await response.json()
    return {
      info: {
        icon: data.weather[0].icon,
        id: data.weather[0].id
      },
      temp: data.main.temp
    }
  } else {
    console.error(`Error fetching weather for ${city}: ${response.statusText}`)
  }
}
