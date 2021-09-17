import React from "react"
import PropTypes from "prop-types"
import { Box } from "@material-ui/core"
import "./Book.scss"

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
}

function Book(props) {
  return (
    <Box className="book">
      <img
        src={props.img}
        style={{ width: 120, display: "block", margin: "auto" }}
        alt={props.title} />
      {/* <p className="title"><b>{ props.title }</b></p>
      <p>{props.description}</p>
      <p>
            by: {props.author}
      </p> */}
    </Box>
  )
}



export default Book