import { Alert, Platform } from 'react-native'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

export const checkForLocation = () => {
  const perm =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_ALWAYS
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  const response = check(perm)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)'
          )
          return false
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable'
          )
          return false
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible')
          return false
        case RESULTS.GRANTED:
          console.log('The permission is granted')
          return true
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore')
          return false
      }
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  return response
}

export const requestLocation = async () => {
  try {
    const perm =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

    const result = await request(perm)

    switch (result) {
      case RESULTS.GRANTED:
        return true
      case RESULTS.DENIED:
      case RESULTS.UNAVAILABLE:
      default:
        Alert.alert(
          'Please enable location permissions to see your local weather'
        )
        return false
    }
  } catch (error) {
    console.error('Error requesting location permission:', error)
    return false
  }
}
