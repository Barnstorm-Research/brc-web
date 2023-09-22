"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Phone } from "lucide-react";
import { PatternFormat, NumberFormatValues } from "react-number-format";
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
            fullName: "",
            phone: "",
            email: "",
            message: "",
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
      <div className="w-full mt-0 mb-[15px] mx-0">
        <form onSubmit={this.sendEmail} ref={this.form}>
          <label
            htmlFor="fullNameInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <div className="flex mb-6">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <Contact
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                size={20}
              />
            </span>
            <input
              type="text"
              id="fullNameInput"
              name="fullName"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={this.state.fullName}
              placeholder={this.state.fullName}
              onChange={this.onChangeName}
              required
            />
          </div>

          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Mail
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                size={20}
              />
            </div>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              id="emailInput"
              name="email"
              value={this.state.email}
              placeholder={this.state.email}
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
              <Phone
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                size={20}
              />
            </div>
            <PatternFormat
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="tel"
              id="phoneInput"
              name="phone"
              format="(###) ###-####"
              value={this.state.phone}
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
              placeholder={this.state.message}
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
        <p className="text-neutral-500 text-md md:text-lg py-4 font-light text-center sm:text-left max-w-xl">
          {this.state.submissionMessage}
        </p>
      </div>
    );
  }
}

export default ContactForm;
