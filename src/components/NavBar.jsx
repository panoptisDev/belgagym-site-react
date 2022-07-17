import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
function NavBar() {
  function handelClick(pos) {
    const eleActive = document.querySelector(".active");
    eleActive.classList.remove("active");
    const elets = document.querySelectorAll(".smoothScroll");
    elets[pos].classList.add("active");
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <div className="row">
            <img
              src="./imgs/logo.png"
              style={{
                width: "46px",
                height: "41px",
                marginTop: "-5px",
                marginRight: "-3.5px",
              }}
            />
            ELGAFORM
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                className="nav-link smoothScroll active"
                onClick={() => handelClick(0)}
              >
                Accuiel
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                className="nav-link smoothScroll about"
                onClick={() => handelClick(1)}
              >
                A propos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="class"
                smooth={true}
                className="nav-link smoothScroll classes"
                onClick={() => handelClick(2)}
              >
                Classes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="schedule"
                smooth={true}
                className="nav-link smoothScroll programme"
                onClick={() => handelClick(3)}
              >
                Programme
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                className="nav-link smoothScroll contactl"
                onClick={() => handelClick(4)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="social-icon ml-lg-3">
            <li>
              <Link
                to="https://web.facebook.com/club.belgaid"
                className="fa fa-facebook"
                onClick={() =>
                  window.open("https://web.facebook.com/club.belgaid")
                }
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/belga_form/?igshid=YmMyMTA2M2Y%3D"
                className="fa fa-instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/belga_form/?igshid=YmMyMTA2M2Y%3D"
                  )
                }
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
