import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ sliders }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const showSlides = () => {
    if (sliders) {
      return (
        <Slider {...settings}>
          {sliders.map((slide) => {
            return (
              <div key={slide.id}>
                <div
                  style={{
                    background: `url(/images/covers/${slide.cover})`,
                  }}
                  className="sliders_block"
                >
                  <div className="caption">
                    <h3>{slide.topic}</h3>
                    <p>{slide.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      );
    }
  };
  return <div>{showSlides()}</div>;
};

export default Slide;
