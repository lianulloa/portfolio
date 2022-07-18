import React, { useEffect } from "react"
import TetrisBoard from "./tetris"
import "./Tetris.scss"

function Tetris() {
  let board
  useEffect(() => {
    const canvas = document.querySelector("canvas#tetris-canvas")
    board = new TetrisBoard(canvas.getContext("2d"), canvas.height)
    board.drawBoard()
    // drawBoard(canvas.getContext("2d"),canvas.height)
  }, [])
  return <canvas id="tetris-canvas" width={300} height={600} />
}

export default Tetris