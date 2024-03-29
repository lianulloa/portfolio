import React from "react"
import PropTypes from "prop-types"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import Typography from "@material-ui/core/Typography"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"
import "./TimelineItem.scss"

function TimelineItemExp(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography className="secondary-color">{props.period}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className="timeline-item-experience" >
          <h3 >
            { props.title }
          </h3>
          <h5>
            {props.companyWebsite && 
              // eslint-disable-next-line react/jsx-no-target-blank
              <a className="secondary-color" href={props.companyWebsite} target="_blank" >
                {props.company} <OpenInNewIcon style={{fontSize: 14}} />
              </a>
            }
            {!props.companyWebsite && 
              props.company
            }
          </h5>
          <ul className="achievements">
            {props.achievements.map(
              (ach, i) => <li key={i} dangerouslySetInnerHTML={{ __html: ach}}/>
            )}
          </ul>
        </div>
      </TimelineContent>
    </TimelineItem>
  )
}

TimelineItemExp.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.string),
  companyWebsite: PropTypes.string,
  company: PropTypes.string,
  period: PropTypes.string,
  title: PropTypes.string
}

export default TimelineItemExp