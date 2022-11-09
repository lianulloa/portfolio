import React, { useEffect, useState, Suspense } from "react"
import { Container } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import WorkTimeline from "../../components/work/Timeline/Timeline"
import {selectors, actions } from "../../store/slices/jobs"
import { useDispatch, useSelector } from "react-redux"
import { mutations as settingsMutations } from "../../store/slices/settings"
import "./TimelinePage.scss"

const Tetris = React.lazy(() => import("../../components/work/Tetris/Tetris.jsx"))

function TimelinePage() {
  const jobs = useSelector(selectors.jobs)
  const dispatch = useDispatch()
  const [showTetris, setShowTetris] = useState(false)

  useEffect(() => {
    if (!jobs.length) {
      dispatch(actions.getJobs())
    }
  })

  const showBoring = () => {
    if (showTetris) {
      setShowTetris(false)
      dispatch(settingsMutations.rollbackBackgroundRotationOneStep())
    }
  }
  const showFun = () => {
    if (!showTetris) {
      setShowTetris(true)
      dispatch(settingsMutations.setBackgroundRotation("center-bottom"))
    }
  }
  return (
    <div className="App-section" id="App-timeline">
      <Container maxWidth="md">
        <h1 className="m-b-xs">Timeline</h1>
        <div className="row center-xs m-b-md">
          <div className="col-xs-10 col-sm-8">
            <ButtonGroup className="button-group--flat" disableElevation size="small" aria-label="secondary button group">
              <Button onClick={showBoring}>Show boring</Button>
              <Button onClick={showFun}>Show fun <PlayArrowIcon fontSize="small"/></Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {!showTetris && <WorkTimeline jobs={jobs} />}
            {showTetris &&
              //  TODO: Time to implement a loading component
              <Suspense fallback={<label style={{fontSize: 20}}>⏳</label>}>
                <Tetris />
              </Suspense>
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TimelinePage