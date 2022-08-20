import React from "react";

const CoachCard = ({ img, nameCoach, desc, prof }) => {
  console.log(!prof);
  function handelClick(e) {
    //variables
    let isShowing = false;
    var zindex = 10;

    //default
    e.preventDefault();

    let currentCard = e.target.parentNode.parentNode;
    if (currentCard.classList.contains("card-title")) {
      currentCard = currentCard.parentNode;
    }
    if (currentCard.classList.contains("mycard")) {
      if (currentCard.classList.contains("show")) {
        isShowing = true;
      }
      const cards = document.querySelector(".cards");
      if (cards.classList.contains("showing")) {
        document.querySelector(".show").classList.remove("show");
        if (isShowing) {
          cards.classList.remove("showing");
        } else {
          currentCard.classList.add("show");
        }
      } else {
        cards.classList.add("showing");
        currentCard.classList.add("show");
      }
    }
  }
  return (
    <div className="mycard" onClick={(e) => handelClick(e)}>
      <div className="card__image-holder">
        <img className="card__image" src={img} alt="wave" />
      </div>
      <div className="card-title">
        <div className="toggle-info sliderbtn">
          <span className="left"></span>
          <span className="right"></span>
        </div>
        <h2> {nameCoach}</h2>
        {prof == "" && <b>{desc}</b>}
        {prof == "no" && <b>Fitness</b>}
      </div>
      {prof == "no" && (
        <div className="card-flap flap1">
          <div className="card-description">{desc}</div>
        </div>
      )}
    </div>
  );
};

export default CoachCard;
