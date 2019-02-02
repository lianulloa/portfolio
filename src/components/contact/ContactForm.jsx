import React, { Component } from "react";
import toastr from "toastr";
import Input from "./Input";
import TextArea from "./TextArea";
import * as emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Mínimo 3 caracteres";
      formIsValid = false;
    }

    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = "Mínimo 3 caracteres";
      formIsValid = false;
    }

    if (!this.state.message || this.state.message.length < 10) {
      errors.message = "Mínimo 10 caracteres";
      formIsValid = false;
    }

    if (this.state.message.length > 2000) {
      errors.message = "Máximo 2000 caracteres";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "Por favor inserte un email válido";
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  sendMessage(event) {
    event.preventDefault();
    if (!this.validateMail()) {
      return;
    }

    var templateParams = {
      from_name: this.state.name + "(" + this.state.email + ")",
      to_name: "dealmanipulusmailbox@gmail.com",
      subject: this.state.subject,
      message_html: this.state.message
    };
    emailjs
      .send(
        "service_gmail",
        "template_test",
        templateParams,
        "user_pZ0c90ZKiFGazNOD2ufph"
      )
      .then(
        function(response) {
          toastr.success("Mensaje enviado con éxito");
        },
        function(error) {
          toastr.error(error);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  state = {};
  render() {
    return (
      <div>
        <form
          id={this.props.id}
          className="contact-form"
          name="contact-form"
          method="post"
          action=""
        >
          <Input
            type="text"
            name="name"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.name}
            error={this.state.errors.name}
          />
          <Input
            type="email"
            name="email"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.email}
            error={this.state.errors.email}
          />
          <Input
            type="text"
            name="subject"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.subject}
            error={this.state.errors.subject}
          />
          <TextArea
            name="message"
            id="message"
            className="form-control"
            required="required"
            rows="8"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.message}
            error={this.state.errors.message}
          />
          {/* <Button
            onClick={this.sendMessage.bind(this)}
            type="button"
            name="submit"
            className="btn btn-primary btn-lg"
            required="required"
          /> */}
        </form>
      </div>
    );
  }
}

export default ContactForm;
