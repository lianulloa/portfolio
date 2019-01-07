import React, { Component } from "react";
import "./Member.scss";

class Member extends Component {
  state = {};
  render() {
    const { thumb, name, resume, social } = this.props.member;
    let styles = {
      backgroundImage: 'url("'.concat(thumb, '")'),
      height: 0,
      paddingTop: "56.25%"
    };

    return (
      <div className="member-card">
        <div className="card-image" style={styles} />
        <div className="card-content">
          <h4 className="card-name">{name}</h4>
          <p className="card-resume">{resume}</p>
        </div>
        <div className="card-social">
          {social[0]}
          {social[1]}
          {social[2]}
        </div>
      </div>
    );
  }
}

export default Member;
