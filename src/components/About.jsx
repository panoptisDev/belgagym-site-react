import Fade from "react-reveal/Fade";
import ImgSlider from "./ImgSlider";
const SalleImg1 = "./imgs/a.png";
const SalleImg2 = "./imgs/im1.png";
const SalleImg3 = "./imgs/im2.png";
const SalleImg4 = "./imgs/im3.png";
const SalleImg5 = "./imgs/im4.png";
const SalleImg6 = "./imgs/IMG5-.png";
const SalleImg7 = "./imgs/belga.png";
const SalleImg8 = "./imgs/c.png";
const SalleImg9 = "./imgs/b.png";
function About({ img1, img2, mouse }) {
  return (
    <section className="about section" id="about" onMouseEnter={mouse}>
      <div className="container-fluid">
        <div className="row">
          <Fade left>
            <div className="container" style={{ maxWidth: "800px" }}>
              <h2
                className="heading-section"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ marginLeft: "2%" }}
              >
                Bonjour, nous sommes BELGAFORM
              </h2>

              <p data-aos="fade-up" data-aos-delay="400">
                Nos coachs vous attendent pour vous soutenir dans votre démarche
                de bien-être ! Organisez votre Bilan de Forme gratuit et
                profitez de notre offre du moment ! Essayez notre séance
                d’entraînement de 30 minutes, une combinaison de Renforcement
                Musculaire et de cardio. Nous sommes impatients de vous
                rencontrer.
              </p>
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="cards container-fluid">
            <div className="mycard">
              <div className="card__image-holder">
                <img
                  className="card__image"
                  src="../imgs/coach1.png "
                  alt="wave"
                />
              </div>
              <div className="card-title">
                <a href="#" className="toggle-info sliderbtn">
                  <span className="left"></span>
                  <span className="right"></span>
                </a>
                <h2>
                  Coach
                  <small>motqrine khadija</small>
                </h2>
              </div>
              <div className="card-flap flap1">
                <div className="card-description">
                  coaching personnel, cours collectifs 100 % femmes et mix,
                  accompagnement sur le plateau de musculation et spinning
                </div>
              </div>
            </div>

            <div className="mycard ">
              <div className="card__image-holder">
                <img
                  className="card__image"
                  src="../imgs/coach4.png"
                  alt="water"
                />
              </div>
              <div className="card-title">
                <a href="#" className="toggle-info sliderbtn">
                  <span className="left"></span>
                  <span className="right"></span>
                </a>
                <h2>
                  Coach
                  <small>belmadani youssef</small>
                </h2>
              </div>
              <div className="card-flap flap1">
                <div className="card-description">
                  accompagnement sur plateau de musculation, coaching personnel
                  de boxe,
                  <br /> kick boxing et Muay Thai
                </div>
              </div>
            </div>

            <div className="mycard ">
              <div className="card__image-holder">
                <img
                  className="card__image"
                  src="../imgs/coach2.png"
                  alt="desert"
                />
              </div>
              <div className="card-title">
                <a href="#" className="toggle-info sliderbtn">
                  <span className="left"></span>
                  <span className="right"></span>
                </a>
                <h2>
                  Coach
                  <small>El Alami hamza</small>
                </h2>
              </div>
              <div className="card-flap flap1">
                <div className="card-description">
                  cours collectifs mix, spinning, <br /> coaching personnel et
                  accompagnement sur
                  <br /> plateau de musculation
                </div>
              </div>
            </div>
            <div className="mycard ">
              <div className="card__image-holder">
                <img
                  className="card__image"
                  src="./imgs/coach3.png"
                  alt="desert"
                />
              </div>
              <div className="card-title">
                <a href="#" className="toggle-info sliderbtn">
                  <span className="left"></span>
                  <span className="right"></span>
                </a>
                <h2>
                  Coach
                  <small>Yassif Zaid</small>
                </h2>
              </div>
              <div className="card-flap flap1">
                <div className="card-description">
                  coaching personnel,
                  <br /> accompagnement sur plateaude musculation
                  <br /> {"  "} <br />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="row about2">
          <div className="col-lg-6">
            <ImgSlider
              img2={SalleImg2}
              img3={SalleImg3}
              img1={SalleImg6}
              img4={SalleImg4}
              img5={SalleImg5}
              img6={SalleImg6}
            />
          </div>
          <div
            className="col-lg-4"
            style={{ marginLeft: "2rem", marginTop: "-29px" }}
          >
            <h1 className="heading-section">Notre club </h1>
            <p>
              te propose tous les haltères et toutes les machines pour passer du
              mini au maxi effort. Que tu choisisses de te muscler plus
              spécifiquement les fessiers, les quadriceps, les dorsaux ou les
              abdos… nos machines guidées sont à ta disposition, ainsi que la
              zone de poids libre. Tu l’as bien compris, ici tu peux te muscler
              comme tu veux et aussi où tu veux.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
