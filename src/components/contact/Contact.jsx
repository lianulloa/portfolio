import React, { Component } from "react";
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
  onInputSelect = evt => {
    console.log(evt.target.focus);
  };
  onInputChange = evt => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };
  render() {
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
                <label className="used" for="nameInput">
                  Nombre
                </label>
                <input
                  onChange={this.onInputChange}
                  onSelect={this.onInputSelect}
                  id="nameInput"
                  autoComplete={"off"}
                  type="text"
                  name="name"
                  value={this.state.fields.name}
                />
              </div>
              <div className="formInput">
                <label className="initial" for="emailInput">
                  Email
                </label>
                <input
                  onChange={this.onInputChange}
                  onSelect={this.onInputSelect}
                  id="emailInput"
                  autoComplete={"off"}
                  type="email"
                  name="email"
                  value={this.state.fields.email}
                />
              </div>
              <div className="formInput">
                <label className="initial" for="phoneInput">
                  Teléfono
                </label>
                <input
                  onChange={this.onInputChange}
                  onSelect={this.onInputSelect}
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
                <label className="initial" for="messageInput">
                  Mensaje
                </label>
                <textarea
                  onChange={this.onInputChange}
                  onSelect={this.onInputSelect}
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
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Contact;
