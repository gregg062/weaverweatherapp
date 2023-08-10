'use strict'

const View = require('react-native/Libraries/Components/View/View')

function TEST() {}

module.exports = {
  ...jest.requireActual('react-native-reanimated'),
  Value: TEST,
  event: TEST,
  addWhitelistedNativeProps: TEST,
  createAnimatedComponent: () => View
}
