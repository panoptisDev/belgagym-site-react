function Footer({ isRegister }) {
  let color = "";
  {
    isRegister ? (color = "rgb(23 24 25)") : (color = "#000");
  }
  return (
    <footer className="site-footer" style={{ backgroundColor: `${color}` }}>
      <div className="container">
        <div className="row">
          <div className="ml-auto col-lg-4 col-md-5">
            <p className="copyright-text">
              <span style={{ fontFamily: "none" }}>©</span>2022
              <br />
              <a href="/">BELGAFORM</a> Tous les droits sont reservés!
            </p>
            <p className="copyright-text">
              Développé par{" "}
              <a href="https://www.pantofit.com/" style={{ color: "#e80d6b" }}>
                Pantofit
              </a>
            </p>
          </div>

          <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
            <p className="mr-4">
              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#">belgaform-1984@hotmail.com</a>
            </p>

            <p>
              <i className="fa fa-phone mr-1"></i> 05 37 53 39 53
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
