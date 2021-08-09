import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grow,
  IconButton,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import classnames from "classnames"
import Tooltip from "@material-ui/core/Tooltip"
import "./Service.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  service: {
    top: 0,
  },
  cardExpanded: {
    position: "absolute",
    width: "300% !important",
    zIndex: 1
  },
  cardExpandedMiddle: {
    left: "-100%"
  },
  cardExpandedRight: {
    right: 0
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

function Service(props) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = (event) => {
    const col = event.target.closest(".service-col")
    const contentWrapper = col.querySelector(".content-wrapper")
    contentWrapper.style.width = `${contentWrapper.offsetWidth}px`
    setExpanded(!expanded)
  }
  const classes = useStyles()
  return <div className="col-md-4 col-sm-7 col-xs-12 service-col" style={{position: "relative"}}>
    <Card
      elevation={expanded ? 10 : 1}
      className={
        classnames(classes.service, {
          [classes.cardExpandedRight]: props.right,
          [classes.cardExpandedMiddle]: props.middle,
          [classes.cardExpanded]: expanded
        })
      }
      style={{
        transitionDuration: ".3s",
        transitionProperty: "width, left, right",
        width: "100%",
      }}
    >
      <div className="content-wrapper">
        <CardHeader
          subheader={props.serviceTitle}
        />
        <div
          className="card-media"
          style={{
            backgroundImage:  `url(${props.logo.default})`,
            height: 200,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.description }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={classnames(classes.expand, "expand-site-btn", {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ChevronRightIcon />
          </IconButton>
        </CardActions>
        <Grow
          in={expanded}
          timeout={500}
          style={{
            position: "absolute",
            top: 0,
            left: 318,
            width: 610,
            height: "100%"
          }}
        >
          <div>
            {props.tooltip && 
              <Tooltip title={props.tooltip}>
                {
                // eslint-disable-next-line
                  <iframe
                    src={props.frameworkHomePage}
                    style={{ width: "100%", border: "none", height: "100%" }}
                  />
                }
              </Tooltip>
            }
            {!props.tooltip &&
              // eslint-disable-next-line
              <iframe
                src={props.frameworkHomePage}
                style={{ width: "100%", border: "none", height: "100%" }} 
              />
            }
          </div>
        </Grow>
      </div>
    </Card>
  </div>
}

Service.propTypes = {
  description: PropTypes.string,
  frameworkHomePage: PropTypes.string,
  logo: PropTypes.shape({
    default: PropTypes.string
  }),
  middle: PropTypes.bool,
  right: PropTypes.bool,
  serviceTitle: PropTypes.string,
  tooltip: PropTypes.string
}

export default Service
