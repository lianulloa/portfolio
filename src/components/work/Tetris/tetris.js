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
  constructor(canvas, {setScore}) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.squareSide = canvas.height / BOARD_ROWS
    this.board = Array.from({length: BOARD_ROWS}, () => Array(BOARD_COLS).fill(false))
    this.piece = getRandomPiece()
    this.pauseInterval = false
    this.score = 0
    this.setScore = setScore
    this.gameInterval
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
  eraseBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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
  setupPiece(p) {
    const piece = createPiece(p[0], p[1])
    if (p[2]) {
      for (let i = 0; i < p[2]; i++) {
        piece.rotateClockwise()          
      }
    }
    this.drawPiece(piece)
  }
  drawText(text, onBoardSquare, { font } = {}) {
    this.ctx.shadowColor = "#444"
    this.ctx.shadowBlur = 10
    this.ctx.fillStyle = CELL_LINE_COLOR
    this.ctx.font = font || `bold ${ this.squareSide * 0.7 }px 'Open Sans'`
    this.ctx.fillText(text, onBoardSquare[1] * this.squareSide, (onBoardSquare[0] * this.squareSide + (0.8 * this.squareSide)))

    this.ctx.shadowColor = "transparent"
  }
  startGame() {
    this.drawPiece()
    this.gameInterval = setInterval(() => {
      if (!this.pauseInterval) {
        const moved = this.handleMove(MOVE_DIRECTIONS.DOWN)
        if (!moved) {
          this.persistPiece()
          this.checkForFilledRows()
          this.piece = getRandomPiece()
          const topReached = !this.handleMove(MOVE_DIRECTIONS.DOWN)
          if (topReached) {
            clearInterval(this.gameInterval)
            alert("You lose")
          }
        }
      }
    }, 600)
  }
  stopGame() {
    clearInterval(this.gameInterval)
  }
  drawPiece(piece = this.piece) {
    const onBoardSquares = piece.getOnBoardCoordinates()
    for (const onBoardSquare of onBoardSquares) {
      this._drawSquare(onBoardSquare, piece.color)
    }
  }
  clearPiece() {
    const onBoardSquares = this.piece.getOnBoardCoordinates()
    this._clearSquares(onBoardSquares)
  }
  persistPiece(piece = this.piece) {
    for (const onBoardSquare of piece.getOnBoardCoordinates()) {
      this.board[onBoardSquare[0]][onBoardSquare[1]] = piece.color
    }
  }
  checkForFilledRows(piece = this.piece) {
    const filledPromises = []
    const clearedRows = new Set()
    let lowestRow = 0

    for (const onBoardSquare of piece.getOnBoardCoordinates()) {
      let filled = true

      if (clearedRows.has(onBoardSquare[0])) {
        continue
      }

      for (const filledSquare of this.board[onBoardSquare[0]]) {
        if (!filledSquare) {
          filled = false
          break
        }
      }

      if (filled) {
        this.pauseInterval = true
        clearedRows.add(onBoardSquare[0])
        if (onBoardSquare[0] > lowestRow) 
          lowestRow = onBoardSquare[0]
        filledPromises.push(this.clearRowFrom(onBoardSquare))
      }
    }

    if (clearedRows.size) {
      this.score += clearedRows.size * 100
      this.setScore(this.score)
  
      Promise.all(filledPromises).then(() => {
        // This should a function on its own
        this.board.splice(lowestRow - clearedRows.size + 1, clearedRows.size)
        for (let i = 0; i < clearedRows.size; i++) {
          this.board.unshift(Array(BOARD_COLS).fill(false))
        }
  
        for (let i = lowestRow; i >= 0; i--) {
          this._clearSquares(
            Array.from(
              { length: BOARD_COLS },
              (_, j) => [i, j]
            )
          )
          // let updated = false
          this.board[i].map((color, j) => {
            if (color) {
              // updated = true
    
              this._drawSquare([i,j], color)
            }
          })
          // if (!updated) {
          //   break
          // }
        }

        this.pauseInterval = false
      })
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
    if (this._canRotate(Piece.clone(this.piece), rotation)) {
      this.clearPiece()
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
  }
  async clearRowFrom(boardPosition) {
    // Maybe animate how squares are cleared
    this._clearSquares(
      Array.from(
        { length: BOARD_COLS },
        (_, j) => [boardPosition[0], j]
      )
    )
  }
  _movePiece(piece, direction) {
    this.clearPiece() 
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
  
    return !this._areOutOfBoundaries(squares) && !this._areAlreadyUsed(squares)
  }
  _canRotate(piece, rotation) {
    switch (rotation) {
      case ROTATE_DIRECTIONS.COUNTER:
        piece.rotateCounterClockwise()
        break
      case ROTATE_DIRECTIONS.WISE:
        piece.rotateClockwise()
        break
      default:
        console.error("tetris: Rotation not handled", rotation)
    }

    const squares = Piece.getOnBoardCoordinates(piece.boardPosition, piece.squares)

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
  _clearSquares(onBoardSquares) {
    for (const onBoardSquare of onBoardSquares) {
      this.ctx.clearRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)

      this.ctx.lineWidth = CELL_LINE_WIDTH
      this.ctx.strokeStyle = CELL_LINE_COLOR
      this.ctx.strokeRect(onBoardSquare[1] * this.squareSide, onBoardSquare[0] * this.squareSide, this.squareSide, this.squareSide)
    }
  }
  _drawSquare(square, color) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(square[1] * this.squareSide, square[0] * this.squareSide, this.squareSide, this.squareSide)
    this.ctx.strokeRect(square[1] * this.squareSide, square[0] * this.squareSide, this.squareSide, this.squareSide)
  }
}