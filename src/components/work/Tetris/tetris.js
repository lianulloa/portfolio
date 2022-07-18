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
    piece = createPiece("ess", [10,4])
    this.drawPiece(piece)
    piece = createPiece("zed", [7,6])
    this.drawPiece(piece)
    piece = createPiece("jay", [13,3])
    this.drawPiece(piece)
    piece = createPiece("el", [5,2])
    this.drawPiece(piece)
    piece = createPiece("i", [15,6])
    this.drawPiece(piece)
    piece = createPiece("o", [18,3])
    this.drawPiece(piece)

    setTimeout(() => {
      this.erasePiece(piece)
    }, 3000)
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
}