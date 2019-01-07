import React, { Component } from "react";
import "./Member.scss";

class Member extends Component {
  state = {};
  render() {
    let { thumb, name, resume, social } = this.props.member;

    return (
      <div className="member-card">
        <div className="card-image">
          <img src={thumb} alt={name + "photo"} />
        </div>
      </div>
    );
  }
}

export default Member;
