import React, { useEffect, useState } from "react"
import { Container } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import WorkTimeline from "../../components/work/Timeline/Timeline"
import {selectors, actions } from "../../store/slices/jobs"
import { useDispatch, useSelector } from "react-redux"
import Tetris from "../../components/work/Tetris/Tetris.jsx"
import "./TimelinePage.scss"

function TimelinePage() {
  const jobs = useSelector(selectors.jobs)
  const dispatch = useDispatch()
  const [showTetris, setShowTetris] = useState(false)

  useEffect(() => {
    if (!jobs.length) {
      dispatch(actions.getJobs())
    }
  })
  return (
    <div className="App-section" id="App-timeline">
      <Container maxWidth="md">
        <h1 className="m-b-xs">Timeline</h1>
        <div className="row center-xs m-b-md">
          <div className="col-xs-10 col-sm-8">
            <ButtonGroup className="button-group--flat" disableElevation size="small" aria-label="secondary button group">
              <Button onClick={()=> setShowTetris(false)}>Show boring</Button>
              <Button onClick={()=> setShowTetris(true)}>Show fun <PlayArrowIcon fontSize="small"/></Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {!showTetris && <WorkTimeline jobs={jobs} />}
            {showTetris && <Tetris />}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TimelinePage