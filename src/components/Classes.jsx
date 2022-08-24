import { classeData } from "../data/data";
import ClassCard from "./ClassCard";
import React from "react";
import Slider from "react-slick";

function Classes({ mouse }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <section className="section" id="class" style={{}} onMouseEnter={mouse}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6 data-aos="fade-up">Notre programme</h6>
            <h2 className="heading-section mb-5">COURS OFFERTS</h2>
          </div>
          <div className="col-md-12">
            <div className="featured-carousel owl-carousel">
              <Slider {...settings}>
                {classeData.map((classe, index) => {
                  return (
                    <ClassCard
                      key={index}
                      img={classe.image}
                      nameClasse={classe.nameClasse}
                      desc={classe.desc}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classes;
