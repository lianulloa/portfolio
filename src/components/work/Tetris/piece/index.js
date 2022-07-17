import { ESS, ZED, EL, JAY, TEE, I, O } from "./pieces"
import { _rotate3x3Clockwise } from "./rotateBehaviors"

class Piece {
  constructor(boardPosition, piece, rotateClockwise = _rotate3x3Clockwise) {
    this.boardPosition = boardPosition
    // I see a piece as a 3x3 matrix. Except for the row and the square
    this.squares = piece.squares
    this.color = piece.color
    
    this.rotateClockwise = rotateClockwise
  }

  rotateCounterClockwise() {
    // I am just lazy
    this.rotateClockwise()
    this.rotateClockwise()
    this.rotateClockwise()
  }

  getOnBoardCoordinates() {
    const onBoardSquares = []
    for (const square of this.squares) {
      const delta = [square[0] - 1, square[1] - 1]
      onBoardSquares.push([this.boardPosition[0] + delta[0], this.boardPosition[1] + delta[1]])
    }
    return onBoardSquares
  }
}

export function getRandomPiece() {
  const pieces = ["ess", "zed", "el", "jay", "tee", "i", "o"]
  return createPiece(
    pieces[Math.floor(Math.random() * 7)],
    [0, 5]
  )
}

export function createPiece(type, boardPosition) {
  switch (type) {
    case "ess":
      return new Piece(boardPosition, ESS)
    case "zed":
      return new Piece(boardPosition, ZED)
    case "el":
      return new Piece(boardPosition, EL)
    case "jay":
      return new Piece(boardPosition, JAY)
    case "tee":
      return new Piece(boardPosition, TEE)
    //TODO: Implement rotation for these two below
    case "i":
      return new Piece(boardPosition, I)
    case "o":
      return new Piece(boardPosition, O)
    default:
      throw new Error(`Piece [${type}] not supported`)
  }
}
