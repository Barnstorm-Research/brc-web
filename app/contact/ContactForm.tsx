"use client";
import React from "react";

type State = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};
class ContactForm extends React.Component<State> {
  state = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
  };

  onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ fullName: e.currentTarget.value });
  };

  onChangePhone = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ phone: e.currentTarget.value });
  };

  onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  };

  onChangeMessage = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ message: e.currentTarget.value });
  };

  render() {
    return (
      <div className="w-full mb-0 mt-0 mb-[15px] mx-0">
        <form>
          <label>
            Name:{" "}
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.onChangeName}
            />
          </label>
          <hr />
          <label>
            Phone:{" "}
            <input
              type="text"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </label>
          <hr />
          <label>
            Email:{" "}
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </label>
          <hr />
          <label>
            Write us a quick message:{" "}
            <input
              type="text"
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
          </label>
          <hr />
          <label>
            Checkbox: <input type="checkbox" name="myCheckbox" />
          </label>
          <hr />
          <p>
            Radio buttons:
            <label>
              <input type="radio" name="myRadio" value="option1" />
              Option 1
            </label>
            <label>
              <input type="radio" name="myRadio" value="option2" />
              Option 2
            </label>
            <label>
              <input type="radio" name="myRadio" value="option3" />
              Option 3
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactForm;
