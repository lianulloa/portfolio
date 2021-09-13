import React, { Component } from "react"
import ChatBubble from "../chat_bubble/ChatBubble"
import {
  Card,
  CardHeader,
  CardContent,
  Hidden
} from "@material-ui/core"
import Tag from "../tag/tag"
import "./Banner.scss"
import tags from "../../assets/tags.json"
class Banner extends Component {
  constructor(props){
    super(props)
    this.state = {
      showBubble1: false,
      showBubble2: false,
      showBubble3: false,
    }
    setTimeout(() => {
      this.setState({
        showBubble1: true
      })
    }, 3500)
    setTimeout(() => {
      this.setState({
        showBubble2: true
      })
    }, 6900)
    setTimeout(() => {
      this.setState({
        showBubble3: true
      })
    }, 10000)
  }

  render() {
    return (
      <header className="App-banner row">
        <div className="col-md-6 col-sm-8 col-xs-12" style={{width:"50%",textAlign:"left"}}>
          <div className="me-pic" />
          <p style={{ fontSize: "1.3rem", textAlign: "justify", color: "white", marginTop: 80}}>
            Full Stack Developer with 5+ years of experience developing new, and improving
            existing software applications based on the cloud. Specialized in API Rest and
            design systems. Creative and clean-coder Computer Scientist.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a className="secondary-color" href="https://www.linkedin.com/in/lian-ulloa/" >
                LinkedIn
              </a>

            </li>
            <li>
              <a className="secondary-color" href="https://github.com/lianulloa" >
                Github
              </a>
            </li>
          </ul>
        </div>
        <Hidden smDown>
          <div className="col-md-6" style={{ textAlign: "left", position: "relative" }}>
            <div style={{position: "absolute", top: "80px", left: 60, padding: "0 30px", boxSizing: "border-box", width: 400}}>
              <ChatBubble bubbleId="1" content="Hello, my name is Lian Ulloa" />
              {this.state.showBubble1 && <ChatBubble bubbleId="2" content="I have a Bachelor Degree in Computer Science" finalWidth="150%" />}
              {this.state.showBubble2 && <ChatBubble bubbleId="3" content="I am passionated about code and music" finalWidth="125%" />}
              {/* {this.state.showBubble3 && <ChatBubble bubbleId="5" content="and AI (of course)" finalWidth="60%" />} */}
            </div>
            <Card
              elevation={5}
              style={{ position: "absolute", bottom: "-80px", right: "-30px", width: "60%", zIndex: "1", borderRadius: 16 }}
            >
              <CardHeader title="Tech Skills" style={{paddingBottom: 0}}/>
              <CardContent>
                <div className="row">
                  {/* TODO: deploy backend (node) to provide skills and work experience*/}
                  {
                    tags.map(tag => <Tag key={tag.tag} {...tag} />)
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        </Hidden>
      </header>
    )
  }
}

export default Banner
