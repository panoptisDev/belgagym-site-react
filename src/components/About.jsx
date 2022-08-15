import { coachesData } from "../data/data";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

import ImgSlider from "./ImgSlider";
import CoachCard from "./CoachCard";

const SalleImg2 = "./imgs/im1.png";
const SalleImg3 = "./imgs/im2.png";
const SalleImg4 = "./imgs/im3.png";
const SalleImg5 = "./imgs/im4.png";
const SalleImg6 = "./imgs/unnamed.png";

function About({ mouse }) {
  return (
    <>
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
                  Nos coachs vous attendent pour vous soutenir dans votre
                  démarche de bien-être ! Organisez votre Bilan de Forme gratuit
                  et profitez de notre offre du moment ! Essayez notre séance
                  d’entraînement de 30 minutes, une combinaison de Renforcement
                  Musculaire et de cardio. Nous sommes impatients de vous
                  rencontrer.
                </p>
              </div>
            </Fade>
          </div>
          <Zoom left>
            <div className="cards container">
              {coachesData.map((coach) => {
                return (
                  <CoachCard
                    img={coach.img}
                    nameCoach={coach.nameCoach}
                    desc={coach.desc}
                  />
                );
              })}
            </div>
          </Zoom>
        </div>
      </section>
      <section style={{ backgroundColor: "#000" }}>
        <div
          className="container section"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Zoom right>
            <div className="col">
              <ImgSlider
                img2={SalleImg2}
                img3={SalleImg3}
                img4={SalleImg4}
                img5={SalleImg5}
                im6={SalleImg6}
                im7={SalleImg2}
              />
            </div>
          </Zoom>
          <Zoom left>
            <div
              className="col"
              style={{ marginLeft: "2rem", marginTop: "-29px" }}
            >
              <h1 className="heading-section">Notre club </h1>
              <p>
                te propose tous les haltères et toutes les machines pour passer
                du mini au maxi effort. Que tu choisisses de te muscler plus
                spécifiquement les fessiers, les quadriceps, les dorsaux ou les
                abdos… nos machines guidées sont à ta disposition, ainsi que la
                zone de poids libre. Tu l’as bien compris, ici tu peux te
                muscler comme tu veux et aussi où tu veux.{" "}
              </p>
            </div>
          </Zoom>
        </div>
      </section>
    </>
  );
}

export default About;
