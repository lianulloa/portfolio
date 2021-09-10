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
  tags: PropTypes.arrayOf(PropTypes.string)
}

function AlgorithmCard({question, title, onAvatarClick, tags=[]}) {
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
          <Typography variant="body2" noWrap>
            {question}
          </Typography>
        }
      />
      <CardActions disableSpacing style={{justifyContent: "flex-end", minHeight: 54}}>
        {tags.map(t => 
          <Tag tag={t} key={t} />
        )}
      </CardActions>
    </Card>
  )
}

export default AlgorithmCard