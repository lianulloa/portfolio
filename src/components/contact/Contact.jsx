import React, { Component } from "react";
import Input from "./Input";
import "./Contact.scss";
class Contact extends Component {
  state = {
    fields: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    fieldsError: {
      name: false,
      email: false,
      phone: false,
      message: false
    },
    fieldFocus: {
      name: false,
      email: false,
      phone: false,
      message: false
    },
    fieldErrors: []
  };
  onFormSubmit = evt => {
    const fields = this.state.fields;
    const fieldsError = this.state.fieldsError;
    var errors = false;
    if (!fields.name) {
      fieldsError["name"] = true;
      errors = true;
    }
    if (!fields.email) {
      fieldsError["email"] = true;
      errors = true;
    }
    if (!fields.message) {
      fieldsError["message"] = true;
      errors = true;
    }
    evt.preventDefault();
    if (errors) {
      this.setState({
        fieldErrors: ["Complete los campos requeridos."],
        fieldsError,
        fields
      });
    }
  };
  onInputFocus = evt => {
    const fieldFocus = this.state.fieldFocus;
    fieldFocus[evt.target.name] = true;
    this.setState({ fieldFocus });
  };
  onInputBlur = evt => {
    const fieldFocus = this.state.fieldFocus;
    fieldFocus[evt.target.name] = false;
    this.setState({ fieldFocus });
  };
  onInputChange = evt => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };
  render() {
    var nameClass = "initial";
    var emailClass = "initial";
    var phoneClass = "initial";
    var messageClass = "initial";
    if (this.state.fieldFocus.name || this.state.fields.name !== "")
      nameClass = "used";
    if (this.state.fieldFocus.email || this.state.fields.email !== "")
      emailClass = "used";
    if (this.state.fieldFocus.phone || this.state.fields.phone !== "")
      phoneClass = "used";
    if (this.state.fieldFocus.message || this.state.fields.message !== "")
      messageClass = "used";
    return (
      <div className="App-section" id="App-contact">
        <form onSubmit={this.onFormSubmit}>
          <div className="formErrors" style={{ color: "red" }}>
            <span>
              {this.state.fieldErrors.length !== 0
                ? this.state.fieldErrors[0]
                : ""}
            </span>
          </div>
          <div className="formInputs" style={{ display: "flex" }}>
            <div className="formFirstPart">
              <div className="formInput">
                <label
                  className={
                    (nameClass += this.state.fieldsError.name ? " error" : "")
                  }
                  htmlFor="nameInput"
                >
                  Nombre
                </label>
                <input
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                  id="nameInput"
                  autoComplete={"off"}
                  type="text"
                  name="name"
                  value={this.state.fields.name}
                />
              </div>
              <div className="formInput">
                <label className={emailClass} htmlFor="emailInput">
                  Email
                </label>
                <input
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                  id="emailInput"
                  autoComplete={"off"}
                  type="email"
                  name="email"
                  value={this.state.fields.email}
                />
              </div>
              <div className="formInput">
                <label className={phoneClass} htmlFor="phoneInput">
                  Teléfono
                </label>
                <input
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                  id="phoneInput"
                  autoComplete={"off"}
                  type="tel"
                  name="phone"
                  value={this.state.fields.phone}
                />
              </div>
            </div>
            <div className="formSecondPart">
              <div className="formInput">
                <label className={messageClass} htmlFor="messageInput">
                  Mensaje
                </label>
                <textarea
                  onChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                  id="messageInput"
                  autoComplete={"off"}
                  name="message"
                  cols="30"
                  rows="10"
                  value={this.state.fields.message}
                />
              </div>
            </div>
          </div>
          <Input name={"Firts Name"} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Contact;
