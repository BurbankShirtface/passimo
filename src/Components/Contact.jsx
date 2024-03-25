import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.css";

const Contact = ({ language }) => {
  const [state, handleSubmit] = useForm("xnqegapl");
  if (state.succeeded) {
    return (
      <>
        {language === "english" ? (
          <div className="contact-container">
            <h1 className="contact-title">Contact Us Today</h1>
            <a href="mailto:passimoesthetique@gmail.com">
              <h3 className="email">passimoesthetique@gmail.com</h3>
            </a>
            <h3 className="phone">(613) 581-2243</h3>
            <p className="thank-you-message">
              Thank you! We will be contacting you soon.
            </p>
          </div>
        ) : (
          <div className="contact-container">
            <h1 className="contact-title">Contactez-nous aujourd'hui</h1>
            <a href="mailto:passimoesthetique@gmail.com">
              <h3 className="email">passimoesthetique@gmail.com</h3>
            </a>
            <h3 className="phone">(613) 581-2243</h3>
            <p className="thank-you-message">
              Merci! Nous vous contacterons bientôt.
            </p>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {language === "english" ? (
        <div className="contact-container">
          <h1 className="contact-title">Contact Us Today</h1>
          <a href="mailto:passimoesthetique@gmail.com">
            <h3 className="email">passimoesthetique@gmail.com</h3>
          </a>
          <h3 className="phone">(613) 581-2243</h3>
          <form className="contact-form-container" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Name</label> */}
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Some info about your vehicle, location, when you would like to book, etc..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="contact-submit-button"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
          {/* <a
            href="https://www.picktime.com/d5bc7e33-2478-4551-89aa-c13bea9b99fe"
            className="ptbkbtn"
            target="_blank"
            // style={{"float:none;"}}
          >
            <img
              className="bkbtnimg"
              border="none"
              src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-black.png"
              alt="Book an appointment with Passimo"
            />
          </a> */}
        </div>
      ) : (
        <div className="contact-container">
          <h1 className="contact-title">Contactez-nous aujourd'hui</h1>
          <a href="mailto:passimoesthetique@gmail.com">
            <h3 className="email">passimoesthetique@gmail.com</h3>
          </a>
          <h3 className="phone">(613) 581-2243</h3>
          <form className="contact-form-container" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Name</label> */}
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Nom"
            />
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Quelques informations sur votre véhicule, votre localisation, la date à laquelle vous souhaitez réserver, etc..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="contact-submit-button"
              type="submit"
              disabled={state.submitting}
            >
              Soumettre
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
