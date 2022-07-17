export function _rotate3x3Clockwise() {
  const rotatedMatrix = []
  for (const coordinate of this.squares) {
    rotatedMatrix.push([coordinate[1], 2 - coordinate[0]])
  }
  return this.squares = rotatedMatrix
}
