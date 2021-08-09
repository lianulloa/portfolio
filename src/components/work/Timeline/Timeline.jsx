import React from "react"
import PropTypes from "prop-types"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "./TimelineItem"

export default function OppositeContentTimeline(props) {
  return (
    <React.Fragment>
      <Timeline>
        {props.jobs.map( (job, i) =>  <TimelineItem key={i} {...job} />)}
      </Timeline>
    </React.Fragment>
  )
}

OppositeContentTimeline.propTypes = {
  jobs: PropTypes.string
}