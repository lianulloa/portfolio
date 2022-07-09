import React, { useEffect } from "react"
import { drawBoard } from "./tetris.hooks"
import "./Tetris.scss"

function Tetris() {
  useEffect(() => {
    const canvas = document.querySelector("canvas#tetris-canvas")
    drawBoard(canvas.getContext("2d"),canvas.width, canvas.height)
  }, [])
  return <canvas id="tetris-canvas" width={300} height={600} />
}

export default Tetris