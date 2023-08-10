const mockGetCurrentPosition = jest.fn()
const mockWatchPosition = jest.fn()
const mockStopObserving = jest.fn()
const mockClearWatch = jest.fn()

const mockGeolocation = {
  getCurrentPosition: mockGetCurrentPosition,
  watchPosition: mockWatchPosition,
  clearWatch: mockClearWatch,
  stopObserving: mockStopObserving
}

export default mockGeolocation
