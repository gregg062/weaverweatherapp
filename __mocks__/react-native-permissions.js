const PERMISSIONS = {
  ANDROID: {
    ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION'
  },
  IOS: {
    LOCATION_ALWAYS: 'ios.permission.LOCATION_ALWAYS'
  }
}

const RESULTS = {
  UNAVAILABLE: 'unavailable',
  DENIED: 'denied',
  LIMITED: 'limited',
  GRANTED: 'granted',
  BLOCKED: 'blocked'
}

const mockCheck = jest.fn(() => Promise.resolve(RESULTS.GRANTED))
const mockRequest = jest.fn(() => Promise.resolve(RESULTS.GRANTED))

export default {
  PERMISSIONS,
  RESULTS,
  check: mockCheck,
  request: mockRequest
}
