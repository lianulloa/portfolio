import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import { mdIt } from "../../../utils/mdIt"
import Tag from "../../tag/tag"
import Typography from "@material-ui/core/Typography"
import "./AlgorithmCard.scss"

//TODO: unified this with PersonalProject


AlgorithmCard.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

function AlgorithmCard({
  question, title, difficulty, onClick, source, tags = []
}) {
  return (
    <Card
      className="AlgorithmCard"
      elevation={2}
      onClick={onClick}
    >
      <CardHeader
        avatar={
          <div style={{display: "flex", flexDirection: "column"}}>
            <IconButton>
              <PlayArrowIcon />
            </IconButton>
            <Tag tag={difficulty} size="small" />
          </div>
        }
        title={
          <Typography variant="h6" noWrap>
            <b>
              {title}
            </b>
          </Typography>
        }
        subheader={
          <Typography variant="body2" style={{minHeight: 40}}>
            <span className="question-preview" dangerouslySetInnerHTML={{ __html: mdIt.render(question)}}/>
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