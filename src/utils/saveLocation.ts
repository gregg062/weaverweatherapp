import AsyncStorage from '@react-native-async-storage/async-storage'
import { location } from '../types/location'

export const updateStoredLocations = async (
  type: string,
  city: string,
  state: string
) => {
  const existingData = await AsyncStorage.getItem(type)
  let data = []
  if (existingData) {
    data = JSON.parse(existingData)
  }
  const alreadyExists = data.find(
    (l: location) => l.city === city && l.state === state
  )
  if (!alreadyExists) {
    data.unshift({ city: city, state: state })
    AsyncStorage.setItem(type, JSON.stringify(data))
  }
}
