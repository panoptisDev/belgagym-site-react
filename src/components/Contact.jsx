import Fade from "react-reveal/Fade";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { GooeyCircleLoader } from "react-loaders-kit";

// import { SMTPClient } from "emailjs";

// const client = new SMTPClient({
//   user: "lahoucine el addali",
//   password: "password",
//   host: "smtp.lahoucineeladdali@gmail.com",
//   ssl: true,
// });

const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

function Contact({ mouse }) {
  const form = useRef();
  let isSuccess = true;
  const loaderProps = {
    loading: true,
    size: 150,
    duration: 3,
    colors: ["#0066b7", "#0066b7", "#0066b7"],
  };

  const handelChange = (e) => {
    // setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    document.querySelector(".Loader-form").style.display = "block";
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hsvs2q",
        "template_e2j0bku",
        form.current,
        "z8AOe7wXokvj3NOG6"
      )
      .then(
        (result) => {
          //
          document.querySelector(".Loader-form").style.display = "none";
          document.querySelector(".alert-success").style.display = "block";

          setTimeout(() => {
            window.location.reload();
          }, 4000);
        },
        (error) => {
          isSuccess = false;
          document.querySelector(".alert-success").style.display = "block";
          console.log("error: " + error);
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="contact section"
      id="contact"
      style={{}}
      onMouseEnter={mouse}
    >
      <div className="container">
        <div className="row">
          <Fade left>
            <div
              className="ml-auto col-lg-5 col-md-6 col-12"
              style={{ paddingTop: "1rem" }}
            >
              <h2
                className="heading-section"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                N'hésitez pas à nous contacter
              </h2>

              <form
                className="contact-form webform"
                data-aos="fade-up"
                data-aos-delay="400"
                role="form"
                ref={form}
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(form);
                  sendEmail(e);
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nom"
                  required
                  onChange={(e) => {
                    handelChange(e);
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Numéro de téléphone"
                  required
                  onChange={(e) => {
                    handelChange(e);
                  }}
                />

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    handelChange(e);
                  }}
                />

                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Message"
                  required
                  onChange={(e) => {
                    handelChange(e);
                  }}
                ></textarea>

                <button
                  type="submit"
                  className="form-control"
                  id="submit-button"
                  name="submit"
                >
                  Envoyer
                </button>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                  style={{
                    position: "absolute",
                    zIndex: "1",
                    marginTop: "-343px",
                    display: "none",
                  }}
                >
                  <strong>{isSuccess ? "Message Envoyé" : "Error !!!"} </strong>{" "}
                  {isSuccess
                    ? "merci d'avoir nous contacté nous vous répondrons dans les plus brefs délais"
                    : "fiald"}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="Loader-form">
                  <GooeyCircleLoader {...loaderProps} />
                </div>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div
              className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12"
              style={{ paddingTop: "1rem" }}
            >
              <h2
                className="heading-section"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Où pouvez-vous<span> nous trouver</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="800">
                <i className="fa fa-map-marker mr-1"></i> 26 avenue Moulay
                Youssef - cité royale SALA AL JADIDA, Salé, Morocco
              </p>
              <div
                className="google-map"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <iframe
                  src="https://maps.google.com/maps?q=belgaform%20avenue%20Moulay%20Youssef%20-%20cit%C3%A9%20royale%20SALA%20AL%20JADIDA,%20Sal%C3%A9,%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="1970"
                  height="310"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Contact;
