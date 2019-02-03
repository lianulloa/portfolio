import React, { Component } from "react";
import "./Member.scss";

class Member extends Component {
  state = {
    image: false,
    text: false,
    social: false
  };

  componentDidUpdate() {
    this.handleAnimations();
  }
  handleAnimations() {
    let imagetop = window.innerHeight;
    let texttop = window.innerHeight;
    let socialtop = window.innerHeight;
    try {
      imagetop = this.imageinstance.getBoundingClientRect().top;
      texttop = this.textinstance.getBoundingClientRect().top;
      socialtop = this.socialinstance.getBoundingClientRect().top;
    } catch (error) {
      imagetop = window.innerHeight;
      texttop = window.innerHeight;
      socialtop = window.innerHeight;
    }
    if (imagetop < (3 * window.innerHeight) / 4 && !this.state.image) {
      this.setState({ image: !this.state.image });
    }
    if (imagetop > (3 * window.innerHeight) / 4 && this.state.image) {
      this.setState({ image: !this.state.image });
    }
    if (texttop < (3 * window.innerHeight) / 4 && !this.state.text) {
      this.setState({ text: !this.state.text });
    }
    if (texttop > (3 * window.innerHeight) / 4 && this.state.text) {
      this.setState({ text: !this.state.text });
    }
    if (socialtop < (3 * window.innerHeight) / 4 && !this.state.social) {
      this.setState({ social: !this.state.social });
    }
    if (socialtop > (3 * window.innerHeight) / 4 && this.state.social) {
      this.setState({ social: !this.state.social });
    }
  }

  render() {
    const { thumb, name, resume, social } = this.props.member;
    let styles = {
      backgroundImage: 'url("'.concat(thumb, '")'),
      height: 0,
      paddingTop: "56.25%"
    };
    let imageClass = "card-image";
    let contentClass = "card-content";
    let socialClass = "card-social";
    imageClass += this.state.image === true ? " viewed" : " no-viewed";
    contentClass += this.state.text === true ? " viewed" : " no-viewed";
    socialClass += this.state.social === true ? " viewed" : " no-viewed";

    return (
      <div className="member-card">
        <div
          className={imageClass}
          style={styles}
          ref={el => (this.imageinstance = el)}
        />
        <div className={contentClass} ref={el => (this.textinstance = el)}>
          <h4 className="card-name">{name}</h4>
          <p className="card-resume">{resume}</p>
        </div>
        <div className={socialClass} ref={el => (this.socialinstance = el)}>
          {social[0]}
          {social[1]}
          {social[2]}
        </div>
      </div>
    );
  }
}

export default Member;
