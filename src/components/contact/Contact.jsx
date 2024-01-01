import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nxrj92t','template_jkqs4c3', e.target,'TDfkg8l7LueZ6CywQ');
    e.target.reset();
  }
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email</p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your Name"
                name="from_name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="email_from"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
                name="email_subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
