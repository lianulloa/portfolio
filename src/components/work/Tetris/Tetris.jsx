import React, { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import TetrisBoard, { MOVE_DIRECTIONS, ROTATE_DIRECTIONS } from "./tetris"
import { selectors as jobSelectors } from "../../../store/slices/jobs"
import { selectors as tetrisScoresSelectors, actions } from "../../../store/slices/tetris"
import "./Tetris.scss"

//TODO: update to webpack 5 and add all polyfills and replace Material ui with chakra (or mantine.dev)
//https://peaku.co/questions/2520-el-iframe-transparente-bloquea-el-evento-del-mouse-cuando-se-usa-el-inicio-de-scripts-de-reaccion
let board


function Tetris() {
  const [score, setScore] = useState(0)
  const [play, setPlay] = useState(false)
  const ref = useRef()
  const jobs = useSelector(jobSelectors.jobs)
  const scores = useSelector(tetrisScoresSelectors.scores)
  const dispatch = useDispatch()
  const controls = [
    {text: "⬅️", onClick: () => { board.handleMove(MOVE_DIRECTIONS.LEFT) }},
    {text: "➡️", onClick: () => { board.handleMove(MOVE_DIRECTIONS.RIGHT) }},
    {text: "↪️", onClick: () => { board.handleRotation(ROTATE_DIRECTIONS.COUNTER) }},
    {text: "↩️", onClick: () => { board.handleRotation(ROTATE_DIRECTIONS.WISE) }},
    {
      text: "⏬",
      onClick: () => {
        board.handleMove(MOVE_DIRECTIONS.DOWN)
        board.handleMove(MOVE_DIRECTIONS.DOWN)
      }
    },
  ]

  const updateRanking = (score) => {
    dispatch(actions.createScore(score))
  }

  const drawTimeline = () => {
    board.drawBoard()
    if (jobs.length) {
      board.drawTimeline(jobs)
    }
  }

  const startGame = () => {
    board.eraseBoard()
    board.drawBoard()
    board.startGame()
    setPlay(true)
  }

  const stopGame = () => {
    board.stopGame()
    board.eraseBoard()
    drawTimeline()
    setPlay(false)
    setScore(0)
  }

  useEffect(() => {
    if (!scores.length) {
      dispatch(actions.getScores())
    }

    return stopGame
  }, [])

  useEffect(() => {
    const canvas = ref.current
    board = new TetrisBoard(canvas, {
      setScore,
      updateRanking
    })
    drawTimeline()
  }, [jobs])

  return (
    <div id="tetris-canvas">
      <canvas ref={ref} width={300} height={600} />
      {play &&
        <React.Fragment>
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
          <div className="row center-xs">
            Score: {score}
          </div>
          <div className="row center-xs m-t">
            <Button variant="outlined" onClick={stopGame}>
              Stop game
            </Button>
          </div>
        </React.Fragment>
      }
      {!play &&
        <div className="row center-xs m-t">
          <Button variant="outlined" onClick={startGame}>
            Start game
          </Button>
        </div>
      }
    </div>
  )
}

export default Tetris