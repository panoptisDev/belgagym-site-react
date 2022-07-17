function ImgSlider({ img1, img2, img3, img4, img5, im6, im7, im8, im9 }) {
  return (
    <div className="slideshow container">
      <div className="slideshow-container slide">
        <img src={img2} alt="" style={{ height: "600px", width: "500px" }} />
        <img src={img3} alt="" style={{ height: "600px" }} />
        <img src={img4} alt="" style={{ height: "600px" }} />
        <img src={img1} alt="" style={{ height: "600px" }} />
        <img src={img5} alt="" style={{ height: "600px" }} />
        <img src={im6} alt="" style={{ height: "600px" }} />
        <img src={im7} alt="" style={{ height: "600px" }} />
        <img src={im8} alt="" style={{ height: "600px" }} />
        <img src={im9} alt="" style={{ height: "600px" }} />
      </div>
    </div>
  );
}

export default ImgSlider;
