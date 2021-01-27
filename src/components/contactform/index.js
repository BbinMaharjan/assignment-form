import React, { Component } from "react";
import "./form.css";
import Button from "../../widgets/button";

class Form extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    errors: {},
  };

  /* handleEmailChange = (e) => {
          this.setState({ email: e.target.value });
        };

        handleNameChange = (e) => {
          this.setState({ name: e.target.value });
        };

        handleMessageChange = (e) => {
          this.setState({ message: e.target.value });
        };
        */

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    //TODO:: Form Validation Check For "valid email" "required""textarea should not exceed 250 charcters" remove whit space

    let isValid = true;

    if (this.state.email === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (this.state.email.lenght < 5) {
      errors.email = "Email should be at least 5 characters";
      isValid = false;
    }

    if (this.state.name === "") {
      errors.name = "Name is required";
      isValid = false;
    } else if (this.state.name.lenght < 5) {
      errors.name = "Name should be at least 5 characters";
      isValid = false;
    }
    if (this.state.message === "") {
      errors.message = "Message is required";
      isValid = false;
    } else if (this.state.name.message < 10) {
      errors.message = "Message should be at least 5 characters";
      isValid = false;
    }

    this.setState({
      errors: errors,
    });

    if (isValid) {
      console.log("The Form is valid plases Proced");
    }
  };

  render() {
    //object Distructuring
    const { email, name, message } = this.state;

    return (
      <div id='contact-form'>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={this.handleChange}
            className={this.state.errors.email ? "error-block" : ""}
          />
          <div className='error'>{this.state.errors.email}</div>
          <hr />
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={this.handleChange}
            className={this.state.errors.name ? "error-block" : ""}
          />
          <div className='error'>{this.state.errors.name}</div>
          <hr />
          <label>Message</label>
          <textarea
            name='message'
            placeholder='Message'
            value={message}
            onChange={this.handleChange}
            className={this.state.errors.massage ? "error-block" : ""}
          />
          <div className='error'>{this.state.errors.message}</div>

          <div className='button'>
            <Button type='submit' title='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
