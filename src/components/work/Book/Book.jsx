import React from "react"
import PropTypes from "prop-types"
import { Paper } from "@material-ui/core"
import "./Book.scss"

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
}

function Book(props) {
  return (
    <Paper className="book">
      {/* <div className="row">
        <div className="col-xs-3"> */}
      <img
        src={props.img}
        style={{ width: "40%", display: "block", margin: "auto" }}
        alt="clean-code" />
      {/* </div>
        <div className="col-xs-9"> */}
      <p className="title"><b>{ props.title }</b></p>
      <p>{props.description}</p>
      <p>
            by: {props.author}
      </p>
      {/* </div>
      </div> */}
    </Paper>
  )
}



export default Book