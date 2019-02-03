import React, { Component } from "react";

class Input extends Component {
  state = {
    focused: false
  };

  focusedInput() {
    this.setState({ focused: true });
  }
  bluredInput() {
    this.setState({ focused: false });
  }
  render() {
    var labelClass = "field a-field a-field-a1 page__field";
    labelClass += this.state.focused ? " focused" : "";
    return (
      <div className="form-group">
        <label className={labelClass} htmlFor={this.props.name}>
          {this.props.text}
        </label>
        <input
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          onChange={this.props.onChange}
          value={this.props.value}
          onFocus={this.focusedInput.bind(this)}
          onBlur={this.bluredInput.bind(this)}
        />

        <label className="error">{this.props.error}</label>
      </div>
    );
  }
}

export default Input;
