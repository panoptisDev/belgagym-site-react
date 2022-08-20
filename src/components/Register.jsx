import React from "react";
import emailjs from "@emailjs/browser";
import { GooeyCircleLoader } from "react-loaders-kit";
import { useRef } from "react";
const Register = () => {
  const loaderProps = {
    loading: true,
    size: 180,
    duration: 3,
    colors: ["#0066b7", "#0066b7", "#0066b7"],
  };

  let isSuccess = true;
  const form = useRef();
  const sendEmail = (e) => {
    document.querySelector(".Loader-form").style.display = "block";
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hsvs2q",
        "template_nq8z4qa",
        form.current,
        "z8AOe7wXokvj3NOG6"
      )
      .then(
        (result) => {
          //
          document.querySelector(".Loader-form").style.display = "none";
          document.querySelector(".alert-success").style.display = "block";

          setTimeout(() => {
            window.location = "/";
          }, 5000);
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
    <div
      className="container-fluid"
      style={{
        background: "#000",
      }}
    >
      <div
        className="container"
        style={{
          paddingBottom: "5rem",
          paddingTop: "11rem",
        }}
      >
        <div className="row" id="register">
          <div
            className="col-lg-6 sideRe"
            style={{
              backgroundImage: "url('./imgs/im1v2.png')",
              backgroundSize: "cover",
            }}
          >
            <div
              className="thumbnail__logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="./imgs/logofinal.png"
                style={{
                  width: "238px",
                  height: "35px",
                }}
              />
            </div>

            <div className="thumbnail__links">
              <ul
                className="list-inline m-b-0 text-center"
                style={{
                  display: "flex",
                  gap: "4rem",
                  alignContent: "stretch",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  marginTop: "27rem",
                }}
              >
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      window.open("https://web.facebook.com/club.belgaid")
                    }
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/belga_form/?igshid=YmMyMTA2M2Y%3D"
                      )
                    }
                  >
                    <i className="fa fa-instagram fa-fw "></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
              <div className="form-group">
                <label htmlFor="name">Nom, Prénom</label>
                <input
                  className="form-control2 form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Nom Prénom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control2 form-control"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="exemple@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Text">Numéro</label>
                <input
                  className="form-control2 form-control"
                  type="text"
                  name="phoneNumber"
                  id="password"
                  placeholder="Votre Numéro"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Date de naissance</label>
                <input
                  className="form-control2 form-control"
                  type="date"
                  name="birthDate"
                  id="passwordRepeat"
                  placeholder="********"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Discipline">Discipline</label>
                <select className="form-control2 form-control" name="select">
                  <option value="Karaté">Karaté</option>
                  <option value="taekwondo">taekwondo</option>
                  <option value="King fu">King fu</option>
                  <option value="kickboxing">kickboxing</option>
                  <option value="MMA">MMA</option>
                  <option value="GYMASTIQUE">GYMASTIQUE (MAX 12 ANS)</option>
                  <option value="fitness">Fitness</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="trainingDate">Date prévu de Début</label>
                <input
                  className="form-control2 form-control"
                  type="date"
                  name="trainingDate"
                  id="passwordRepeat"
                  placeholder=""
                  required
                />
              </div>
              <div className="m-t-lg">
                <ul className="list-inline2" style={{ listStyle: "none" }}>
                  <li>
                    <input
                      className="btn btn--form"
                      type="submit"
                      value="Register"
                    />
                  </li>
                  <li>
                    <a className="signup__link" href="/">
                      Retour à la page d'accueil
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
              style={{
                position: "absolute",
                zIndex: "1",
                marginTop: "-305px",
                display: "none",
                padding: "45px",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
