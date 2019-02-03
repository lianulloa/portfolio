import React, { Component } from "react";
import "./Description.scss";
import Members from "../members/Members";
class Description extends Component {
  state = {
    title: false,
    text: false
  };

  componentDidUpdate() {
    this.handleAnimations();
  }
  handleAnimations() {
    // console.log(this.titleinstance);
    // console.log(this.textinstance);
    let titletop = window.innerHeight;
    let texttop = window.innerHeight;
    try {
      titletop = this.titleinstance.getBoundingClientRect().top;
      texttop = this.textinstance.getBoundingClientRect().top;
    } catch (error) {
      titletop = window.innerHeight;
      texttop = window.innerHeight;
    }
    if (titletop < (70 * window.innerHeight) / 100 && !this.state.title) {
      this.setState({ title: !this.state.title });
    }
    if (titletop > (70 * window.innerHeight) / 100 && this.state.title) {
      this.setState({ title: !this.state.title });
    }
    if (texttop < (70 * window.innerHeight) / 100 && !this.state.text) {
      this.setState({ text: !this.state.text });
    }
    if (texttop > (70 * window.innerHeight) / 100 && this.state.text) {
      this.setState({ text: !this.state.text });
    }
  }

  render() {
    let titleViewed = this.state.title === true ? "viewed" : "no-viewed";
    let textViewed = this.state.text === true ? "viewed" : "no-viewed";
    return (
      <div>
        <h1
          ref={el => (this.titleinstance = el)}
          className={"title " + titleViewed}
        >
          How we are?
        </h1>
        <p
          className={"text " + textViewed}
          ref={el => (this.textinstance = el)}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          blanditiis fugiat est neque a qui ex facere possimus voluptatem quos
          unde magnam, deserunt itaque tempora, explicabo sed officiis, veniam
          animi!
        </p>
        <Members />
      </div>
    );
  }
}

export default Description;
