import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import TetrisBoard, { MOVE_DIRECTIONS, ROTATE_DIRECTIONS } from "./tetris"
import {selectors} from "../../../store/slices/jobs"
import "./Tetris.scss"

//TODO: update to webpack 5 and add all polyfills and replace Material ui with chakra
//https://peaku.co/questions/2520-el-iframe-transparente-bloquea-el-evento-del-mouse-cuando-se-usa-el-inicio-de-scripts-de-reaccion


function Tetris() {
  let board
  const jobs = useSelector(selectors.jobs)
  const controls = [
    {text: "⬅️", onClick: () => { board.handleMove(MOVE_DIRECTIONS.LEFT) }},
    {text: "➡️", onClick: () => { board.handleMove(MOVE_DIRECTIONS.RIGHT) }},
    {text: "↪️", onClick: () => { board.handleRotation(ROTATE_DIRECTIONS.COUNTER) }},
    {text: "↩️", onClick: () => { board.handleRotation(ROTATE_DIRECTIONS.WISE) }},
    {text: "⏬", onClick: () => { board.handleMove(MOVE_DIRECTIONS.DOWN) }},
  ]

  useEffect(() => {
    const canvas = document.querySelector("#tetris-canvas > canvas")
    board = new TetrisBoard(canvas.getContext("2d"), canvas.height)
    window.board = board
    board.drawBoard()
    // if (jobs.length) {
    //   board.drawTimeline(jobs)
    // }
    board.startGame()

  }, [jobs])
  return (
    <div id="tetris-canvas">
      <canvas  width={300} height={600} />
      <div className="control-container row center-xs">
        {controls.map(control => (
          <div
            key={control.text}
            className="control m-x"
            onClick={control.onClick}
          >
            {control.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tetris