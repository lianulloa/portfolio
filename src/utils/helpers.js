export function searchForInsertionPosition(array, value, from, to) {
  if (to - from === 0) {
    return array[0] >= value ? 1 : 0
  }
  
  const middle = parseInt((to - from) / 2) + from
  if (array[middle] >= value) {
    if ((array[middle + 1] || -Infinity) <= value) {
      return middle + 1
    } else {
      return searchForInsertionPosition(array, value, middle, to)
    }
  } else {
    return searchForInsertionPosition(array, value, from, middle)
  }
}