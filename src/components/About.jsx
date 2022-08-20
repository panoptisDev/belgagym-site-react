import { coachesData } from "../data/data";
import Fade from "react-reveal/Fade";

import Zoom from "react-reveal/Zoom";

import Slider from "react-slick";
import CoachCard from "./CoachCard";

const SalleImg2 = "./imgs/im1.png";
const SalleImg3 = "./imgs/im2.png";
const SalleImg4 = "./imgs/im3.png";
const SalleImg5 = "./imgs/im4.png";
const SalleImg6 = "./imgs/unnamed.png";
const SalleImg7 = "./imgs/IMG5-.png";

function About({ mouse }) {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [],
  };
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
                  NOS COACHES
                </h2>
              </div>
            </Fade>
          </div>
          <Zoom left>
            <div className="cards container">
              {coachesData.map((coach, index) => {
                console.log(coach.prof);
                return (
                  <CoachCard
                    key={index}
                    img={coach.img}
                    nameCoach={coach.nameCoach}
                    desc={coach.desc}
                    prof={coach.prof}
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
            <div className="col-lg-6 slideshow">
              <Slider {...settings}>
                <img src={SalleImg2} alt="png" style={{ height: "600px" }} />
                <img src={SalleImg3} alt="png" style={{ height: "600px" }} />
                <img src={SalleImg4} alt="png" style={{ height: "600px" }} />
                <img src={SalleImg5} alt="png" style={{ height: "600px" }} />
                <img src={SalleImg6} alt="png" style={{ height: "600px" }} />
                <img src={SalleImg7} alt="png" style={{ height: "600px" }} />
              </Slider>
            </div>
          </Zoom>
          <Zoom left>
            <div
              className="col"
              style={{ marginLeft: "2rem", marginTop: "-29px" }}
            >
              <h1 className="heading-section">Notre club </h1>
              <p>
                Que vous souhaitiez effectuer un renforcement musculaire et
                gagner en tonus pour vous sentir mieux et accessoirement
                sculpter votre silhouette, que vous vouliez plus simplement
                entretenir votre cardio et vous défouler en vous dépensant au
                rythme endiablé de la Zumba, ou que vous projetiez de travailler
                sur votre souplesse et sur la paix intérieure en faisant des
                exercices de relaxation, vous trouverez tout ce qu'il vous faut
                en vous adressant aux salles de sport BELGAFORM
              </p>
            </div>
          </Zoom>
        </div>
      </section>
    </>
  );
}

export default About;
