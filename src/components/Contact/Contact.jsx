import React, { Component } from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section class="contact-us">
      <div class="wrap-contact-us">
        <div class="headline">
          <h2 class="headline-contact">Contact us</h2>
          <p class="subtitle contact-headline-text">
            Proin iaculis purus consequat sem cure.
          </p>
        </div>
        <div class="forms">
          <form>
            <div class="wrap-forms">
              <div class="text-forms">
                <input
                  class="text-form-style"
                  type="text"
                  placeholder="Your name *"
                />
                <input
                  class="text-form-style your-mail"
                  type="text"
                  placeholder="Your e-mail *"
                />
                <input
                  class="text-form-style"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div class="textarea-form">
                <textarea
                  class="textarea-form-style"
                  placeholder="Your message *"
                />
              </div>
            </div>
            <div class="wrap-button">
              <button class="button-style send-message" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
