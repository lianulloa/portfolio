import React, { Component } from "react";
import "./Description.scss";
class Description extends Component {
  state = {
    title: false,
    text: false
  };

  componentDidUpdate() {
    this.handleAnimations();
  }
  handleAnimations() {
    let top = 1000;
    try {
      top = this.instance.getBoundingClientRect().top;
    } catch (error) {
      top = 1000;
    }
    if (top < 400 && !this.state.title) {
      this.setState({ title: !this.state.title });
      this.setState({ text: !this.state.text });
    }
  }

  render() {
    let titleViewed = this.state.title === true ? "viewed" : "no-viewed";
    let textViewed = this.state.text === true ? "viewed" : "no-viewed";
    return (
      <div ref={el => (this.instance = el)}>
        <h1 className={"title " + titleViewed}>How we are?</h1>
        <p className={"text " + textViewed}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          blanditiis fugiat est neque a qui ex facere possimus voluptatem quos
          unde magnam, deserunt itaque tempora, explicabo sed officiis, veniam
          animi!
        </p>
      </div>
    );
  }
}

export default Description;
