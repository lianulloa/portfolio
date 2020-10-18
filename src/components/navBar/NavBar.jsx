import React, { Component } from "react"
import Scrollchor from "react-scrollchor";
import menu from "../../static/images/toggle_menu.svg";
import logo from "../../logotest.png";
import header from "../../header.jpg";
import "./NavBar.scss"


class NavBar extends Component {
  state = {
    menuHidden: true,
    sections: [
      { text: "About us", link: "#App-about" },
      { text: "Services", link: "#App-services" },
      { text: "Contact", link: "#App-contact" },
      { text: "How find us", link: "#App-footer" }
    ],

  }
  render() {
		let menuOverlay = "App-menu-overlay";
		menuOverlay += this.state.menuHidden === true ? " hidden" : " show";
    
    return (
      <div className="App-navigation fixed" >
        <div className="App-navigation-container">
          <Scrollchor
            to=""
            animate={{ offset: 0, duration: 400 }}
            className="App-link-logo"
          >
            <img src={logo} className="App-menu-logo" alt="Deal" />
          </Scrollchor>
          <ul className="App-navigation-btns" >
            {this.state.sections.map(section => (
              <li key={section.link}>
                <Scrollchor
                  to={section.link}
                  animate={{ offset: 0, duration: 400 }}
                  className="App-nav-link"
                >
                  {section.text}
                </Scrollchor>
              </li>
            ))}
          </ul>
          <button
            className="menu-trigger"
            onClick={this.handleMenuClick}
          >
            <img src={menu} alt="menu" />
          </button>
          <div className={menuOverlay}>
            <div
              className="App-menu-overlay-content"
              onClick={this.handleMenuClick}
            >
              <ul>
                {this.state.sections.map(section => (
                  <li key={section.link}>
                    <Scrollchor
                      to={section.link}
                      animate={{ offset: 0, duration: 400 }}
                      className="App-nav-link"
                    >
                      {section.text}
                    </Scrollchor>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="App-menu-overlay-bg" onClick={this.handleMenuClick}>
            {/* <button className="menu-close">x</button> */}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar