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
      <form onSubmit={sendEmail} class="contact-form">
        <header>Want to Book Kimble? Send an Email!</header>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="subject" name="subject" />
        <textarea placeholder="message" name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
