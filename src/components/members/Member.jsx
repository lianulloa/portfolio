import React, { Component } from "react";
import { Card, CardMedia } from "@material-ui/core";
import "./Member.scss";

class Member extends Component {
  state = {};
  render() {
    let { thumb, name, resume, social } = this.props.member;
    let styles = {
      width: "100%",
      height: "200px",
      display: "block",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: 'url("'.concat(thumb, '")')
    };

    return (
      <div>
        <div className="member-card">
          <div className="card-image" style={styles} />
        </div>
        <Card>
          <CardMedia image={thumb} />
        </Card>
      </div>
    );
  }
}

export default Member;
