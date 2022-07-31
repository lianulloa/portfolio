import {createPiece, Piece} from "./piece"

const CELL_LINE_WIDTH = "2"
const CELL_LINE_COLOR = "white"
const BOARD_ROWS = 20
const BOARD_COLS = 10
const MOVE_DIRECTIONS = {
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
}
export default class TetrisBoard {
  constructor(ctx, height) {
    this.ctx = ctx
    this.squareSide = height / BOARD_ROWS
  }

  drawBoard() {
    this.ctx.lineWidth = CELL_LINE_WIDTH
    this.ctx.strokeStyle = CELL_LINE_COLOR

    for (let i = 0; i < BOARD_ROWS; i ++) {
      for (let j = 0; j < BOARD_COLS; j ++) {
        this.ctx.strokeRect(j * this.squareSide, i * this.squareSide, this.squareSide, this.squareSide)
      }
    }

    let piece = createPiece("tee", [2,5])
    this.drawPiece(piece)
    const interval = setInterval(() => {
      const moved = this.handleMove(piece, MOVE_DIRECTIONS.DOWN)
      if (!moved) {
        clearInterval(interval)
      }
    }, 1000)
  }
  drawPiece(piece) {
    const onBoardSquares = piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      this.ctx.fillStyle = piece.color
      this.ctx.fillRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
    }
  }
  erasePiece(piece) {
    const onBoardSquares = piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      this.ctx.clearRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)

      this.ctx.lineWidth = CELL_LINE_WIDTH
      this.ctx.strokeStyle = CELL_LINE_COLOR
      this.ctx.strokeRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
    }
  }
  handleMove(piece, direction) {
    if (this._canMoveTo(piece, direction)) {
      this._movePiece(piece, direction)
      return true
    }

    return false
  }
  _movePiece(piece, direction) {
    this.erasePiece(piece) 
    switch (direction) {
      case MOVE_DIRECTIONS.DOWN:
        piece.boardPosition[0] += 1
        break
      case MOVE_DIRECTIONS.LEFT:
        piece.boardPosition[1] -= 1
        break
      case MOVE_DIRECTIONS.RIGHT:
        piece.boardPosition[1] += 1
        break
      default:
        console.log("[Tetris Board] Unhandled direction", direction)
        break
    }
    this.drawPiece(piece)
  }
  _areOutOfBoundaries(onBoardSquares) {
    // const onBoardSquares = piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      if (
        onBoardSquare[0] < 0 ||
        onBoardSquare[0] >= BOARD_ROWS ||
        onBoardSquare[1] < 0 ||
        onBoardSquare[1] >= BOARD_COLS
      ) return true
    }
    return false
  }
  _canMoveTo(piece, direction) {
    let position

    switch (direction) {
      case MOVE_DIRECTIONS.DOWN:
        position = piece.getDownBoardPosition()
        break
      case MOVE_DIRECTIONS.LEFT:
        position = piece.getLeftBoardPosition()
        break
      case MOVE_DIRECTIONS.RIGHT:
        position = piece.getRightBoardPosition()
        break
      default:
        console.log("[Tetris Board] Unhandled move direction", direction)
        break
    }
  
    return !this._areOutOfBoundaries(
      Piece.getOnBoardCoordinates(position, piece.squares)
    )
  }
}