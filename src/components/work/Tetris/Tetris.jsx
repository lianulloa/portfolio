import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import TetrisBoard from "./tetris"
import {selectors} from "../../../store/slices/jobs"
import "./Tetris.scss"

function Tetris() {
  let board
  const jobs = useSelector(selectors.jobs)
  useEffect(() => {
    const canvas = document.querySelector("canvas#tetris-canvas")
    board = new TetrisBoard(canvas.getContext("2d"), canvas.height)
    window.board = board
    board.drawBoard()
    if (jobs.length) {
      board.drawTimeline(jobs)
    }
    // board.startGame()

  }, [jobs])
  return <canvas id="tetris-canvas" width={300} height={600} />
}

export default Tetris