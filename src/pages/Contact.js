import React, { useState } from 'react';
import emailjs from '@emailjs/browser';  // Updated package
import './Contact.css';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    emailjs.sendForm('service_m9m927y', 'template_x3pzi77', event.target, 'nQUk62A8QXSNXmc6S')
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setFormStatus('Failed to send message. Please try again later.');
        }
      );

    event.target.reset();
  }

  return (
    <div className="contact-page">
      <h1>Ask Away</h1>
      <p>Don't be shy</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

export default Contact;
