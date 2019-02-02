import React, { Component } from "react";

class TextArea extends Component {
  state = {};
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.name} *</label>
        <textarea
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          rows={this.props.rows}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}

export default TextArea;
