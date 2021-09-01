import { Paper } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"
import "./Personal.scss"

PersonalProject.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

function PersonalProject(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" >
      <Paper className="personal-project" style={{marginBottom: 10}}>
        <h2 >
          {props.title}
          {props.link && <OpenInNewIcon fontSize="small" />}
        </h2>
        <small>{props.description}</small>
      </Paper>
    </a>
  )
}

export default PersonalProject