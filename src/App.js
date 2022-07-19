import React, { useState, useEffect } from "react";
//
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import ClasseRec from "./components/ClasseRec";
import MySlider from "./components/slider";
import Loader from "./components/Loader";

import "./App.css";

const img1 = "./imgs/trainera.png";

const img2 = "./imgs/trainerb.png";

function App() {
  let [loaded, setLoaded] = useState(false);
  //
  function handelClick(pos) {
    const eleActive = document.querySelector(".active");
    eleActive.classList.remove("active");
    const elets = document.querySelectorAll(".smoothScroll");
    elets[pos].classList.add("active");
  }
  //page loader

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  });
  //
  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Home mouse={() => handelClick(0)} />
          <Features />
          <About img1={img1} img2={img2} mouse={() => handelClick(1)} />
          <MySlider mouse={() => handelClick(2)} />
          <Schedule mouse={() => handelClick(3)} />
          <Contact mouse={() => handelClick(4)} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
