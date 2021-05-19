import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gareths_service",
        "template_q61ll0f",
        e.target,
        "user_hFbYHPUFkNLYtl302s9yM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="contact-form">
        <header className="form-header">
          Want to Book Kimble? Send an Email!
        </header>
        <input
          type="text"
          placeholder="name"
          className="name-field"
          name="name"
        />
        <input
          type="text"
          placeholder="email"
          className="email-field"
          name="email"
        />
        <input
          type="text"
          placeholder="subject"
          className="subject-field"
          name="subject"
        />
        <textarea
          placeholder="message"
          className="message-field"
          name="message"
        />
        <input type="submit" className="send-button" value="Send" />
      </form>
    </div>
  );
}
