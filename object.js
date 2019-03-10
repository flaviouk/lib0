
/**
 * @return {Object<string,any>} obj
 */
export const create = () => Object.create(null)

/**
 * @param {Object<string,any>} obj
 */
export const keys = Object.keys

/**
 * @param {Object<string,any>} obj
 * @param {function(any,string):any} f
 */
export const forEach = (obj, f) => {
  for (let key in obj) {
    f(obj[key], key)
  }
}

/**
 * @template R
 * @param {Object<string,any>} obj
 * @param {function(any,string):R} f
 * @return {Array<R>}
 */
export const map = (obj, f) => {
  const results = []
  for (let key in obj) {
    results.push(f(obj[key], key))
  }
  return results
}

/**
 * @param {Object<string,any>} obj
 * @return {number}
 */
export const length = obj => keys(obj).length

/**
 * @param {Object<string,any>} obj
 * @param {function(any,string):boolean} f
 * @return {boolean}
 */
export const some = (obj, f) => {
  for (let key in obj) {
    if (f(obj[key], key)) {
      return true
    }
  }
  return false
}

/**
 * @param {Object<string,any>} obj
 * @param {function(any,string):boolean} f
 * @return {boolean}
 */
export const every = (obj, f) => {
  for (let key in obj) {
    if (!f(obj[key], key)) {
      return false
    }
  }
  return true
}

/**
 * @param {Object<string,any>} a
 * @param {Object<string,any>} b
 * @return {boolean}
 */
export const equalFlat = (a, b) => a === b || (length(a) === length(b) && every(a, (val, key) => (val !== undefined || b.hasOwnProperty(key)) && b[key] === val))
