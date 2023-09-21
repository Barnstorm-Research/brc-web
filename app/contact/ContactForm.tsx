"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PatternFormat } from "react-number-format";
import type { NumberFormatValues } from "react-number-format";
import emailjs from "@emailjs/browser";

interface FormElements extends HTMLFormControlsCollection {
  fullNameInput: HTMLInputElement;
  emailInput: HTMLInputElement;
  phoneInput: HTMLInputElement;
  messageInput: HTMLInputElement;
}
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

class ContactForm extends React.Component {
  form = React.createRef<HTMLFormElement>();

  state = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
    submissionMessage: "",
  };

  onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ fullName: e.currentTarget.value });
  };

  onChangePhone = (value: string): void => {
    this.setState({ phone: value });
  };

  onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  };

  onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ message: e.currentTarget.value });
  };

  sendEmail = (event: React.FormEvent<ContactFormElement>): void => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_w3t6jpk",
        "template_f4z57ar",
        this.form.current,
        "5CNZFpSQqD8Bqr38I"
      )
      .then(
        (result) => {
          console.log(result);
          this.setState({
            submissionMessage:
              "Thank you for reaching out! We will be in touch shortly.",
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            submissionMessage:
              "We apologize! Unfortunately, a problem occurred. Please make sure the form contents are correct or try again later.",
          });
        }
      );
  };

  render() {
    return (
      <div className="w-full mb-0 mt-0 mb-[15px] mx-0">
        <form onSubmit={this.sendEmail} ref={this.form}>
          <label
            htmlFor="fullNameInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="fullNameInput"
              name="fullName"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={this.state.fullName}
              onChange={this.onChangeName}
              required
            />
          </div>

          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              id="emailInput"
              name="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>

          <label
            htmlFor="phoneInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path
                  data-name="layer2"
                  d="M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z"
                ></path>
                <path
                  data-name="layer1"
                  d="M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z"
                ></path>
              </svg>
            </div>
            <PatternFormat
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="tel"
              id="phoneInput"
              name="phone"
              format="(###) ###-####"
              mask="_"
              onValueChange={(value: NumberFormatValues) =>
                this.onChangePhone(value.formattedValue)
              }
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="messageInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write us a quick message!
            </label>
            <textarea
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="messageInput"
              name="message"
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
          </div>

          {/* <div className="flex flex-col xs:flex-row gap-6 items-center justify-center sm:justify-start"> */}
          <div className="mb-6">
            <Button type="submit" variant="accent" className="w-40">
              <span>Submit</span>
            </Button>
          </div>
        </form>
        <p className="text-neutral-500 text-md md:text-lg py-10 font-light mb-8 sm:mb-16 text-center sm:text-left max-w-xl">
          {this.state.submissionMessage}
        </p>
      </div>
    );
  }
}

export default ContactForm;
