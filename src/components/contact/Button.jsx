import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="form-group">
        <button
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          onClick={this.props.onClick}
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default Button;
