import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState; // sets default values to empty string
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value }); // reads data input for object: name, email, message
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>Contact Details</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          />
          {/* handle change will update the form state object to user input */}
          {/* default value reads the initial empty string as set in the form state */}
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
