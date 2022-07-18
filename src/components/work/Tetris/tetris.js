import {createPiece} from "./piece"

const CELL_LINE_WIDTH = "2"
const CELL_LINE_COLOR = "white"
export default class TetrisBoard {
  constructor(ctx, height) {
    this.ctx = ctx
    this.squareSide = height / 20
  }

  drawBoard() {
    this.ctx.lineWidth = CELL_LINE_WIDTH
    this.ctx.strokeStyle = CELL_LINE_COLOR

    for (let i = 0; i < 20; i ++) {
      for (let j = 0; j < 10; j ++) {
        this.ctx.strokeRect(j * this.squareSide, i * this.squareSide, this.squareSide, this.squareSide)
      }
    }

    let piece = createPiece("tee", [2,5])
    this.drawPiece(piece)

    let i = 0
    const downInterval = setInterval(() => {
      this.movePieceDown(piece)
      if (i % 6 === 0) {
        this.erasePiece(piece)
        piece.rotateClockwise()
        this.drawPiece(piece)
      }
      i++
    }, 500)
    
    setTimeout(() => clearInterval(downInterval), 8500)
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
  movePieceDown(piece) {
    this.erasePiece(piece) 
    piece.boardPosition[0] += 1
    this.drawPiece(piece)
  }
}