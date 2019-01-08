import React, { Component } from "react";
// import './Header.scss';
import logo from "../../logotest.svg";
import menu from "../../static/images/toggle_menu.svg";
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
        <div className={navclass}>
          <div className="App-navigation-container">
            <a href="#" className="App-link-logo">
              <img src={logo} className="App-menu-logo" alt="Deal" />
            </a>
            <ul style={{ display: width <= 764 ? "none" : "flex" }}>
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#"> Services </a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> How find us? </a>
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
