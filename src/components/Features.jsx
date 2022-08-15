import Fade from "react-reveal/Fade";

function Features() {
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="row">
          <Fade top>
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-white" data-aos="fade-up">
                Nouveau à Belgaform ?
              </h2>

              <h6 className="mb-4 text-white" data-aos="fade-up">
                Rejoignez nous maintenant
              </h6>

              <a
                href="/register"
                className="btn custom-btn bg-color mt-3"
                data-aos="fade-up"
              >
                Devenez membre aujourd'hui
              </a>
            </div>
          </Fade>
          <Fade bottom>
            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2
                    className="mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Heures d'ouverture
                  </h2>

                  <strong
                    className="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    dimanche
                  </strong>
                  <p data-aos="fade-up" data-aos-delay="800">
                    10:00 - 16:00
                  </p>

                  <strong
                    className="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Lundi - Vendredi
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    09:00 - 22:00
                  </p>

                  <strong
                    className="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Samedi
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    10:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Features;
