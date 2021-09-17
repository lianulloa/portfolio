import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import React from "react"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"
import Tag from "../tag/tag"
import "./Personal.scss"

PersonalProject.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

function PersonalProject({ link, title, description, tags }) {
  //TODO: unified this with AlgorithmCard
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" >
      <Card
        className="personal-project m-b-md"
        elevation={2}
      >
        <CardHeader
          title={
            <Typography variant="subtitle1" noWrap>
              <b>
                {title}
                {link && <OpenInNewIcon fontSize="small" />}
              </b>
            </Typography>
          }
          subheader={
            <Typography variant="body2" style={{minHeight: 40}}>
              <span className="description">
                {description}
              </span>
            </Typography>
          }
        />
        <CardActions disableSpacing style={{
          justifyContent: "space-between", minHeight: 54
        }}>
          <small style={{ textAlign: "left", marginLeft: 10 }}>
            {/* <b>Source</b><br /> {source} */}
          </small>
          <div>
            {tags && tags.map(t => 
              <Tag tag={t} key={t} style={{marginRight: 0}}/>
            )}
          </div>
        </CardActions>
      </Card>
    </a>
  )
}

export default PersonalProject