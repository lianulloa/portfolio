import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import Tag from "../../tag/tag"
import Typography from "@material-ui/core/Typography"
import "./AlgorithmCard.scss"

AlgorithmCard.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

function AlgorithmCard({
  question, title, onAvatarClick, source, tags = []
}) {
  return (
    <Card
      className="AlgorithmCard"
      elevation={3}
    >
      <CardHeader
        avatar={
          <IconButton onClick={onAvatarClick}>
            <PlayArrowIcon />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" >
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2">
            {question}
          </Typography>
        }
      />
      <CardActions disableSpacing style={{
        justifyContent: "space-between", minHeight: 54
      }}>
        <small style={{ textAlign: "left", marginLeft: 10 }}>
          <b>Source</b><br /> {source}
        </small>
        <div>
          {tags.map(t => 
            <Tag tag={t} key={t} style={{marginRight: 0}}/>
          )}
        </div>
      </CardActions>
    </Card>
  )
}

export default AlgorithmCard