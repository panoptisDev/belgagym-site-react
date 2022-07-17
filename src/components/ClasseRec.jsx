import React from "react";
import Fade from "react-reveal/Fade";

const ClasseRec = ({ mouse }) => {
  return (
    <>
      <section
        className="section"
        id="class"
        style={{ background: "#000" }}
        onMouseEnter={mouse}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 data-aos="fade-up">Notre programme</h6>
              <h2 className="heading-section mb-5">Cours offerts</h2>
            </div>
            <div className="col-md-12">
              <div className="featured-carousel owl-carousel">
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/judo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">Judo</span>
                        <h3>
                          <a href="#">
                            Au judo, vous utilisez l'énergie de votre adversaire
                            à votre avantage
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/kunfu.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">Kun fu</span>
                        <h3>
                          <a href="#">
                            Apprenez plus de façons de préserver que de détruire
                            car la vie est précieuse.
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/teakwando.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">teakwando</span>
                        <h3>
                          <a href="#">
                            Tekwando ne vous apprennent pas à vous battre, ils
                            vous apprennent pourquoi ne pas le faire.
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/kickboxing.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">kickboxing</span>
                        <h3>
                          <a href="#">La force ne vient pas de la victoire</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/mascul.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">Musculation</span>
                        <h3>
                          <a href="#">
                            Les excuses ne brûlent pas de calories. Je ne fais
                            pas d'excuses
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/karate.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">Karaté</span>
                        <h3>
                          <a href="#">
                            Le karaté vise à forger le caractère et à améliorer
                            le comportement humain
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: "url(./imgs/women.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="text w-100">
                        <span className="cat">Cours 100% femmes</span>
                        <h3>
                          <a href="#">
                            Il est facile de repérer les femmes fortes. Ce sont
                            eux qui le clouent dans Belgafrom
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClasseRec;
