import React from "react"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "./Footer.scss"

function Footer () {
  return (
    <footer
      className="App-footer"
      id="App-footer"
      // ref={el => (this.instance = el)}
    >
      <div className="row" style={{flex: 1, justifyContent: "center"}}>
        <div className="col-md-6">
          <ul>
            <li>
              <a className="secondary-color" href="mailto:lianulloa808@gmail.com"><EmailIcon style={{ fontSize: 22 }} /> lianulloa808@gmail.com</a>
            </li>
            <li>
              <a className="secondary-color" href="https://www.linkedin.com/in/lian-ulloa/" >
                <LinkedInIcon style={{ fontSize: 22 }} /> LinkedIn
              </a>
            </li>
            <li className="secondary-color">
              Why do C# and Java developers keep breaking their keyboards?<br />
              Because they use a strongly typed language.🥁
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
