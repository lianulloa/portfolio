import {createPiece} from "./piece"

//TODO: create board class
let squareSide
export function drawBoard(ctx, height) {
  squareSide = height / 20

  ctx.lineWidth = "2"
  ctx.strokeStyle = "white"

  for (let i = 0; i < 20; i ++) {
    for (let j = 0; j < 10; j ++) {
      ctx.strokeRect(j * squareSide, i * squareSide, squareSide, squareSide)
    }
  }

  let piece = createPiece("tee", [2,5])
  drawPiece(ctx, piece)
  piece = createPiece("ess", [10,4])
  drawPiece(ctx, piece)
  piece = createPiece("zed", [7,6])
  drawPiece(ctx, piece)
  piece = createPiece("jay", [13,3])
  drawPiece(ctx, piece)
  piece = createPiece("el", [5,2])
  drawPiece(ctx, piece)
  piece = createPiece("i", [15,6])
  drawPiece(ctx, piece)
  piece = createPiece("o", [18,3])
  drawPiece(ctx, piece)
}

export function drawPiece(ctx, piece) {
  const onBoardSquares = piece.getOnBoardCoordinates()
  for (const onBoardSquare of onBoardSquares) {
    ctx.fillStyle = piece.color
    ctx.fillRect(onBoardSquare[1] * squareSide, onBoardSquare[0] * squareSide, squareSide, squareSide)
  }
}