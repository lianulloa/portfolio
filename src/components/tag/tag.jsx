import React, {useState, useRef} from "react"
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import "./tag.scss"

function TooltipTag(props) {
  const chip = useRef(null)
  let [animationIterationCount, setAnimationIterationCount] = useState(30)
  let [timesHasIterated, setTimesHasIterated] = useState(0)

  const stopBouncing = () => {
    let timesToEnd = 1
    if (timesHasIterated%2===0) timesToEnd = 2

    setAnimationIterationCount(Math.min(timesHasIterated + timesToEnd, animationIterationCount))
  }

  const imgWidth = 300
  let imgHeight
  const img = new Image()
  img.onload = function () {
    imgHeight = (this.height * imgWidth)/this.width
  }
  const imgSrc = require("../../assets/certs/" + props.img)
  img.src = imgSrc

  const label = <React.Fragment>
    <Typography color="inherit">Certificate</Typography>
    <a href={props.imgLink} target="_blank" rel="noreferrer noopener">
      <img style={{width: imgWidth, height: imgHeight}} src={imgSrc} alt={ props.img}/>
    </a>
  </React.Fragment>

  return (
    <Tooltip
      title={label}
      placement="left"
      interactive

    >
      <Chip
        ref={chip}
        style={{ userSelect: "none", animationIterationCount}}
        className="bouncing-chip Tag"
        label={props.tag}
        onMouseEnter={stopBouncing}
        onAnimationIteration={() => {
          setTimesHasIterated(timesHasIterated += 1)
        }}
      />
    </Tooltip>
  )
}

function Tag(props) {
  if (props.bounce) {
    return <TooltipTag  {...props}/>
  } else {
    return (
      <Chip className="Tag" label={props.tag} style={{ userSelect: "none" }} />
    )

  }
}

export default Tag