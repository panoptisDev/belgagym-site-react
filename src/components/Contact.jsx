import Fade from "react-reveal/Fade";
function Contact({ mouse }) {
  return (
    <section
      className="contact section"
      id="contact"
      style={{ backgroundColor: "#000" }}
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
                action="#"
                // method="post"
                className="contact-form webform"
                data-aos="fade-up"
                data-aos-delay="400"
                role="form"
              >
                <input
                  type="text"
                  className="form-control"
                  name="cf-name"
                  placeholder="Nom"
                />

                <input
                  type="email"
                  className="form-control"
                  name="cf-email"
                  placeholder="Email"
                />

                <textarea
                  className="form-control"
                  rows="5"
                  name="cf-message"
                  placeholder="Message"
                ></textarea>

                <button
                  type="submit"
                  className="form-control"
                  id="submit-button"
                  name="submit"
                >
                  Envoyer
                </button>
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
                  src="https://maps.google.com/maps?q=Salle+de+sport+Belgaforme/@33.9972341,-6.7438413,16.58z/data=!4m9!1m2!2m1!1sAv.+Moulay+Youssef,+Salé,AL+JADIDA+Maroc+madinat!3m5!1s0xda74024e3aedc17:0x514401bcdd4f7982!8m2!3d33.9990141!4d-6.7404551!15sCjFBdi4gTW91bGF5IFlvdXNzZWYsIFNhbMOpLEFMIEpBRElEQSBNYXJvYyBtYWRpbmF0kgEOc3BvcnRzX2NvbXBsZXg?hl=fr-FR%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="1920"
                  height="250"
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
