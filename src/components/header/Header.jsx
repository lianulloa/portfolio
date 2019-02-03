import React, { Component } from "react";
// import './Header.scss';
import logo from "../../logotest.svg";
// import laptop from "../../static/images/laptop.svg";
import menu from "../../static/images/toggle_menu.svg";
import Scrollchor from "react-scrollchor";
class Header extends Component {
  state = {
    menuHidden: true,
    sections: [
      { text: "About us", link: "#App-about" },
      { text: "Services", link: "#App-services" },
      { text: "Contact", link: "#App-contact" },
      { text: "How find us", link: "#App-footer" }
    ]
  };

  handleMenuClick = () => {
    this.setState({ menuHidden: !this.state.menuHidden });
  };

  render() {
    const { fixed, width } = this.props;
    let navclass = "App-navigation";
    navclass += fixed === true ? " fixed" : " no-fixed";
    let menuOverlay = "App-menu-overlay";
    menuOverlay += this.state.menuHidden === true ? " hidden" : " show";

    return (
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="Deal"
          style={{ top: 25 + window.scrollY / 10 + "%" }}
        />
        {/* <img
          src={laptop}
          className="App-laptop"
          alt="Laptop"
          style={{ top: -30 - window.scrollY / 5 + "%" }}
        /> */}
        <div className={navclass}>
          <div className="App-navigation-container">
            <Scrollchor
              to=""
              animate={{ offset: 0, duration: 500 }}
              className="App-link-logo"
            >
              <img src={logo} className="App-menu-logo" alt="Deal" />
            </Scrollchor>
            <ul style={{ display: width <= 764 ? "none" : "flex" }}>
              {this.state.sections.map(section => (
                <li>
                  <Scrollchor
                    to={section.link}
                    animate={{ offset: 0, duration: 500 }}
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
              style={{ display: width > 764 ? "none" : "block" }}
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
                    <li>
                      <Scrollchor
                        to={section.link}
                        animate={{ offset: 0, duration: 500 }}
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
      </header>
    );
  }
}

export default Header;
