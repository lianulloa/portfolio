import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from "./TimelineItem"

export default function OppositeContentTimeline(props) {
  return (
    <React.Fragment>
      <Timeline>
        {props.jobs.map( (job, i) =>  <TimelineItem key={i} {...job} />)}
      </Timeline>
    </React.Fragment>
  );
}