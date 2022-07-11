class BasePiece {
  boardPosition = [11, 4]

  // I see a piece as a 3x3 matrix. Except for the row and the square
  squares = [[1, 1], [1, 2], [2, 0], [2, 1]]

  rotateClockwise() {
    // check notes
  }

  rotateCounterClockwise() {
    // I am just lazy
    this.rotateClockwise()
    this.rotateClockwise()
    this.rotateClockwise()
  }
}

export function drawBoard(ctx, width, height) {
  const squareSide = height / 20

  // ctx.beginPath();
  ctx.lineWidth = "2"
  ctx.strokeStyle = "white"
  // ctx.rect(30, 30, 50, 50);
  // ctx.stroke()

  for (let i = 0; i < 20; i ++) {
    for (let j = 0; j < 10; j ++) {
      ctx.strokeRect(j * squareSide, i * squareSide, squareSide, squareSide)
    }
  }

  ctx.fillStyle = "#41b883"
  ctx.fillRect(2 * squareSide, 2*squareSide, squareSide * 4, squareSide)
}