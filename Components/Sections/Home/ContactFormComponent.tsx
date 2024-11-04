// Components/ContactFormComponent.tsx
import React, { useRef, useState, FormEvent } from "react";
import FormButton from "./FormButton";
import emailjs from "@emailjs/browser";

const ContactFormComponent: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: FormEvent) => {
    // e.preventDefault(); // Prevent the default form submission

    if (form.current) {
      setIsLoading(true);
      setSuccess(false);
      setError(false);

      emailjs
        .sendForm("service_0qkob2y", "template_mnzk4uc", form.current, "6Iz6j9YWRI_DaJ-s6")
        .then(
          () => {
            setSuccess(true);
            setIsLoading(false);
          },
          () => {
            setError(true);
            setIsLoading(false);
          }
        );
    }
  };

  const handleRetry = () => {
    setError(false);
  };

  return (
    <section className="py-5 uxup-color-neutral-100">
      <div className="container">
        <div className="row gx-5">
          {/* Contact Information */}
          <div className="col-12 col-lg-5">
            <h1 className="uxup-fs-h2 fw-bold text-gradient">Contact Us</h1>
            <p className="uxup-fs-paragraph uxup-color-text-300 uxup-color-text-100 my-4">
              Aenean vel massa quis mauris vehicula lacinia. Integer in sapien duis sapien nunc.
            </p>
            <div className="contact-info">
              <div className="mb-3">
                <h5 className="uxup-fs-caption-large uxup-color-text-300">Send us an email</h5>
                <p className="uxup-fs-paragraph">
                  <strong>info@UXup.io</strong>
                </p>
              </div>
              <div>
                <h5 className="uxup-fs-caption-large uxup-color-text-300">Give us a call</h5>
                <p className="uxup-fs-paragraph">
                  <strong>(000) 666 555 444</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Conditional Rendering for Form, Success, and Error States */}
          <div className="col-12 col-lg-7">
            {success ? (
              <div className="p-4 uxup-bg-neutral-900 contact-form">
                <img className="frame-icon" alt="Success" src="/success.svg" />
                <div className="content-body-text-base">
                  <div className="text-header">
                    <b className="uxup-fs-h4 fw-bold text-gradient"><br/>Message Sent Successfully</b>
                    <p className="uxup-fs-paragraph uxup-color-text-300 uxup-color-text-100">
                    <br/>Thanks for reaching out. A representative of UXup will contact you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="p-4 uxup-bg-neutral-900 contact-form">
                <img className="frame-icon" alt="Error" src="/error.svg" />
                <div className="content-body-text-base">
                  <div className="text-header">
                    <b className="uxup-fs-h4 fw-bold text-gradient"><br/>Message Failed to Send</b>
                    <p className="uxup-fs-paragraph uxup-color-text-300 uxup-color-text-100">
                    <br/>Something went wrong. Please try sending your message again.
                    </p>
                    <FormButton
                      id="retry-button"
                      onClick={handleRetry}
                      text="Retry"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <form className="p-4 uxup-bg-neutral-900 contact-form" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label uxup-fs-paragraph">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="input-field form-control uxup-bg-neutral-950 uxup-color-neutral-100"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label uxup-fs-paragraph">
                      Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      className="input-field form-control uxup-bg-neutral-950 uxup-color-neutral-100"
                      id="email"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label uxup-fs-paragraph">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="from_tel"
                      className="input-field form-control uxup-bg-neutral-950 uxup-color-neutral-100"
                      id="phone"
                      placeholder="+XXX XXXX XXX"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label uxup-fs-paragraph">
                    Message
                  </label>
                  <textarea
                    className="input-area form-control uxup-bg-neutral-950 uxup-color-neutral-100"
                    name="message"
                    id="message"
                    placeholder="I want ..."
                  ></textarea>
                </div>

                <FormButton
                  id="send-message-button"
                  text={isLoading ? "Sending..." : "Send Message"}
                  isDisabled={isLoading}
                  onClick={sendEmail}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponent;
