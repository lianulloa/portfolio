import React, {useState, useEffect} from "react"
import {
  Card,
  CardHeader,
  Hidden,
  Paper,
  Tooltip
} from '@material-ui/core';
import skills from "./skills.js"
import "./MainSills.scss"

function MainSkills() {
  const [active, setActive] = useState({
    i: 0,
    ...skills[0]
  })
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.screen.width)
    }
  }, [])
  const ITooltip = active.tooltip ? Tooltip : "div"
  const showActive = width >= 1024
  return (
    <div className="row MainSills" style={{ paddingBottom: 40}}>
      <div className="col-md-4 col-xs-12">
        {
          skills.map((skill, i) => 
            <Card
              key={i}
              className={i === active.i && showActive ? "active" : ""}
              elevation={i === active.i && showActive ? 8 : 3}
              onClick={() => setActive({
                i,
                ...skill
              })}
            >
              <CardHeader
                avatar={
                  <div
                    className="avatar" 
                    style={{ backgroundImage: `url(${skill.avatar})` }}
                  />
                }
                title={skill.title}
                subheader={skill.desc}
              />
            </Card>
          )
        }
      </div>
      <Hidden smDown>
        <div className="col-md-8 col-xs-12">
          <Paper
            elevation="3"
            style={{
              height: "100%",
              borderRadius: "16px",
              overflow: "hidden"
            }}
          >
            <ITooltip
              title={active.tooltip}
              style={{ height: "100%" }}
              open={true}
            >
              <iframe
                title={active.frameworkTitle}
                src={active.frameworkHomePage}
                style={{ width: "100%", border: "none", height: "100%" }} />
            </ITooltip>
          </Paper>
        </div>
      </Hidden>
    </div>
  )
}

export default MainSkills