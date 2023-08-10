let cache = {}

export default {
  setItem: jest.fn((key, value) => {
    return new Promise((resolve, reject) => {
      if (typeof key !== 'string' || typeof value !== 'string') {
        reject(new Error('key and value must be string'))
      } else {
        cache[key] = value
        resolve(null)
      }
    })
  }),
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      if (cache[key]) {
        resolve(cache[key])
      } else {
        resolve(null)
      }
    })
  }),
  clear: jest.fn(() => {
    cache = {}
    return Promise.resolve(null)
  })
}
