import React, { Component } from "react";

class TextArea extends Component {
  state = {};
  render() {
    return (
      <div className="form-group">
        <label className="field" htmlFor={this.props.name}>
          {this.props.text}
        </label>
        <textarea
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          rows={this.props.rows}
          onChange={this.props.onChange}
          value={this.props.value}
        />

        <label className="error">{this.props.error}</label>
      </div>
    );
  }
}

export default TextArea;
