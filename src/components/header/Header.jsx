import React, { Component } from "react";
// import './Header.scss';
import logo from "../../logotest.svg";
// import laptop from "../../static/images/laptop.svg";
import menu from "../../static/images/toggle_menu.svg";
import Scrollchor from "react-scrollchor";
class Header extends Component {
  render() {
    const { fixed, width } = this.props;
    let navclass = "App-navigation";
    navclass += fixed === true ? " fixed" : " no-fixed";

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
              animate={{ offset: 0, duration: 700 }}
              className="App-link-logo"
            >
              <img src={logo} className="App-menu-logo" alt="Deal" />
            </Scrollchor>
            <ul style={{ display: width <= 764 ? "none" : "flex" }}>
              <li>
                <Scrollchor
                  to="#App-about"
                  animate={{ offset: 0, duration: 700 }}
                  className="App-nav-link"
                >
                  About Us
                </Scrollchor>
              </li>
              <li>
                <Scrollchor
                  to="#App-services"
                  animate={{ offset: 0, duration: 700 }}
                  className="App-nav-link"
                >
                  Services
                </Scrollchor>
              </li>
              <li>
                <Scrollchor
                  to="#App-contact"
                  animate={{ offset: 0, duration: 700 }}
                  className="App-nav-link"
                >
                  Contact Us
                </Scrollchor>
              </li>
              <li>
                <Scrollchor
                  to="#App-footer"
                  animate={{ offset: 0, duration: 700 }}
                  className="App-nav-link"
                >
                  How find us?
                </Scrollchor>
              </li>
            </ul>
            <button
              className="menu-trigger"
              onClick={this.handleMenuClick}
              style={{ display: width > 764 ? "none" : "block" }}
            >
              <img src={menu} alt="menu" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
