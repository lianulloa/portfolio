import { Paper } from "@material-ui/core";
import React from "react";
import "./Personal.scss"

function PersonalProject(props) {
  return (
    <a href={props.link}>
      <Paper className="personal-project" >
        <h2 >
          { props.title }
        </h2>
        <small>{props.description}</small>
      </Paper>
    </a>
)
}

export default PersonalProject;