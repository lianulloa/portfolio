import { createPiece, Piece, getRandomPiece } from "./piece"
import { BASE_TIMELINE, TEXT_POSITIONS, TIMELINE_GROUPS } from "./piece/pieces"

const CELL_LINE_WIDTH = "2"
const CELL_LINE_COLOR = "white"
const BOARD_ROWS = 20
const BOARD_COLS = 10
export const MOVE_DIRECTIONS = {
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
}
export const ROTATE_DIRECTIONS = {
  COUNTER: "counter",
  WISE: "wise"
}
export default class TetrisBoard {
  constructor(ctx, height) {
    this.ctx = ctx
    this.squareSide = height / BOARD_ROWS
    this.board = Array.from({length: BOARD_ROWS}, () => Array(BOARD_COLS).fill(false))
    this.piece = getRandomPiece()
    // this.board[19][4] = true
  }
  drawBoard() {
    this.ctx.lineWidth = CELL_LINE_WIDTH
    this.ctx.strokeStyle = CELL_LINE_COLOR

    for (let i = 0; i < BOARD_ROWS; i ++) {
      for (let j = 0; j < BOARD_COLS; j ++) {
        this.ctx.strokeRect(j * this.squareSide, i * this.squareSide, this.squareSide, this.squareSide)
      }
    }
  }
  drawTimeline(jobs) {
    this.drawBaseTimeline()

    for (let i = 0; i < 3; i++) {
      const style = { font: `bold ${this.squareSide * 0.5}px 'Open Sans'` }
      const {title, company, period} = jobs[i]
      const group = TIMELINE_GROUPS[i]
      for (const p of group) {
        this.setupPiece(p)
        this.drawText(
          title,
          TEXT_POSITIONS[i][0],
          style
        )
        this.drawText(
          period,
          TEXT_POSITIONS[i][1],
          style
        )
        this.drawText(
          company,
          TEXT_POSITIONS[i][2],
          style
        )
      }
    }
  }
  drawBaseTimeline() {
    for (const p of BASE_TIMELINE) {
      this.setupPiece(p)
    }

    this.drawText("BSc. Computer Science", [18, 0.4])
    this.drawText("at University of Havana", [18.9, 0.8])
  }
  startGame() {
    this.drawPiece()
    const interval = setInterval(() => {
      const moved = this.handleMove(MOVE_DIRECTIONS.DOWN)
      if (!moved) {
        this.persistPiece(this.piece)
        this.piece = getRandomPiece()
        const topReached = !this.handleMove(MOVE_DIRECTIONS.DOWN)
        if (topReached) {
          clearInterval(interval)
          alert("You lose")
        }
      }
    }, 600)
  }
  setupPiece(p) {
    const piece = createPiece(p[0], p[1])
    if (p[2]) {
      for (let i = 0; i < p[2]; i++) {
        piece.rotateClockwise()          
      }
    }
    this.drawPiece(piece)
  }
  drawPiece(piece = this.piece) {
    const onBoardSquares = piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      this.ctx.fillStyle = piece.color
      this.ctx.fillRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
      this.ctx.strokeRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
    }
  }
  drawText(text, onBoardSquare, { font } = {}) {
    this.ctx.shadowColor = "#444"
    this.ctx.shadowBlur = 10
    this.ctx.fillStyle = CELL_LINE_COLOR
    this.ctx.font = font || `bold ${ this.squareSide * 0.7 }px 'Open Sans'`
    this.ctx.fillText(text, onBoardSquare[1] * this.squareSide, (onBoardSquare[0] * this.squareSide + (0.8 * this.squareSide)))

    this.ctx.shadowColor = "transparent"
  }
  erasePiece() {
    const onBoardSquares = this.piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      this.ctx.clearRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)

      this.ctx.lineWidth = CELL_LINE_WIDTH
      this.ctx.strokeStyle = CELL_LINE_COLOR
      this.ctx.strokeRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
    }
  }
  persistPiece(piece) {
    for (const onBoardSquare of piece.getOnBoardCoordinates()) {
      this.board[onBoardSquare[0]][onBoardSquare[1]] = piece.color
    }
  }
  handleMove(direction) {
    if (this._canMoveTo(this.piece, direction)) {
      this._movePiece(this.piece, direction)
      return true
    }
    return false
  }
  handleRotation(rotation) {
    this.erasePiece() 
    switch (rotation) {
      case ROTATE_DIRECTIONS.COUNTER:
        this.piece.rotateCounterClockwise()
        break
      case ROTATE_DIRECTIONS.WISE:
        this.piece.rotateClockwise()
        break
      default:
        console.error("tetris: Rotation not handled", rotation)
    }
    this.drawPiece()
  }
  _movePiece(piece, direction) {
    this.erasePiece() 
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
    this.drawPiece()
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

    const squares = Piece.getOnBoardCoordinates(position, piece.squares)
  
    //TODO: need to check if it collides with previous pieces on board
    return !this._areOutOfBoundaries(squares) && !this._areAlreadyUsed(squares)
  }
  _areOutOfBoundaries(onBoardSquares) {
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
  _areAlreadyUsed(onBoardSquares) {
    for (const onBoardSquare of onBoardSquares) {
      if (
        this.board[onBoardSquare[0]][onBoardSquare[1]]
      ) return true
    }
    return false
  }

}